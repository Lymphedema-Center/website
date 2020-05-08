import * as cdk from "@aws-cdk/core";
import * as cognito from "@aws-cdk/aws-cognito";
import * as lambda from "@aws-cdk/aws-lambda";
import * as iam from "@aws-cdk/aws-iam";

export class AuthStack extends cdk.Stack {
  public userPool: cognito.CfnUserPool;
  public userPoolGroup_Users: cognito.CfnUserPoolGroup;
  public userPoolClient: cognito.CfnUserPoolClient;
  public userPoolDomain: cognito.CfnUserPoolDomain;

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //
    // Create user pool
    ///////////////////////////////////////////////////////////////////////////
    // create post-confirmation lambda
    const postConfirmationLambda = new lambda.Function(
      this,
      "PostConfirmationLambda",
      {
        runtime: lambda.Runtime.NODEJS_12_X,
        code: lambda.Code.fromAsset("lib/lambda"),
        handler: "userPool.postConfirmationTrigger",
      }
    );

    // create user pool
    this.userPool = new cognito.CfnUserPool(this, "LymphedemaCenterUserPool", {
      accountRecoverySetting: {
        recoveryMechanisms: [{ name: "verified_email", priority: 1 }],
      },
      autoVerifiedAttributes: ["email"],
      usernameAttributes: ["email"],
      usernameConfiguration: {
        caseSensitive: false,
      },
      lambdaConfig: {
        postConfirmation: postConfirmationLambda.functionArn,
      },
      policies: {
        passwordPolicy: {
          minimumLength: 6,
          requireLowercase: false,
          requireNumbers: false,
          requireSymbols: false,
          requireUppercase: false,
        },
      },
      schema: [
        {
          attributeDataType: "String",
          mutable: true,
          name: "given_name",
          required: true,
          stringAttributeConstraints: {
            minLength: "1",
          },
        },
        {
          attributeDataType: "String",
          mutable: true,
          name: "family_name",
          required: true,
          stringAttributeConstraints: {
            minLength: "1",
          },
        },
      ],
      verificationMessageTemplate: {
        defaultEmailOption: "CONFIRM_WITH_LINK",
        emailSubjectByLink: "Email Verification Link",
      },
    });

    // give postConfirmationLambda role with permissions to change group
    if (postConfirmationLambda.role) {
      new iam.Policy(this, "PostConfirmationPolicy", {
        policyName: "PostConfirmationPolicy",
        statements: [
          new iam.PolicyStatement({
            actions: ["cognito-idp:AdminAddUserToGroup"],
            effect: iam.Effect.ALLOW,
            resources: [this.userPool.attrArn],
          }),
        ],
      }).attachToRole(postConfirmationLambda.role);
    }
    postConfirmationLambda.addPermission("somepermissionid", {
      principal: new iam.ServicePrincipal("cognito-idp.amazonaws.com"),
      action: "lambda:InvokeFunction",
    });

    // create default group
    this.userPoolGroup_Users = new cognito.CfnUserPoolGroup(
      this,
      "LymphedemaCenterUsers",
      {
        userPoolId: this.userPool.ref,
        description: "The group for users of LymphedemaCenter.com.",
        groupName: "Users",
        precedence: 0,
        //roleArn: <arn>
      }
    );

    // create client
    this.userPoolClient = new cognito.CfnUserPoolClient(
      this,
      "LymphedemaCenterUserPoolClient",
      {
        explicitAuthFlows: [
          "ALLOW_CUSTOM_AUTH",
          "ALLOW_USER_SRP_AUTH",
          "ALLOW_REFRESH_TOKEN_AUTH",
        ],
        generateSecret: false,
        userPoolId: this.userPool.ref,
      }
    );

    // create domain
    this.userPoolDomain = new cognito.CfnUserPoolDomain(
      this,
      "LymphedemaCenterUserPoolDomain",
      {
        domain: "lymphedemacenter-email-confirmation",
        userPoolId: this.userPool.ref,
      }
    );
  }
}
