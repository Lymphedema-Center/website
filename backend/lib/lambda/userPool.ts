import AWS = require("aws-sdk");

export const postConfirmationTrigger = async (event: any): Promise<object> => {
  // group name
  const usersGroup = "Users";

  // add user to "Users" group
  try {
    console.log(event.request);
    await new AWS.CognitoIdentityServiceProvider({
      apiVersion: "2016-04-18",
    })
      .adminAddUserToGroup({
        GroupName: usersGroup,
        UserPoolId: event.userPoolId,
        Username: event.request.userAttributes.email,
      })
      .promise();
  } catch (e) {
    console.log("THIS IS AN ERROR MESSAGE HERE");
    console.log(e);
    throw new Error("An error has occured.");
  }

  return event;
};
