import cdk = require("@aws-cdk/core");
import s3 = require("@aws-cdk/aws-s3");

export class FrontendStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // create s3 bucket
    const baseDomain = "lymphedema-center.com";
    new s3.Bucket(this, "FrontendStaticAssets", {
      accessControl: s3.BucketAccessControl.PUBLIC_READ,
      cors: [
        {
          allowedOrigins: [
            "https://" + baseDomain,
            "https://www." + baseDomain,
            "http://" + baseDomain,
            "http://www." + baseDomain
          ],
          allowedMethods: [s3.HttpMethods.GET, s3.HttpMethods.POST]
        }
      ]
    });

    // deploy static assets
  }
}
