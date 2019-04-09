var AWS = require('aws-sdk');
AWS.config.update({ region: 'eu-west-1' });

function callLambdaFunction(){
    var lambda = new AWS.Lambda({ region: 'eu-west-1' });

    const startTime = new Date().getTime()
    // create variable to hold data returned by the Lambda function
    for (i = 0; i < 2; i++) {
      
      // lambdas[i] = new AWS.Lambda({ region: 'eu-west-1' });
      var pullParams = {
        FunctionName: 'search',
        InvocationType: 'RequestResponse',
        LogType: 'None',
        Payload: "{\"id\": \"test_"+i+ "\",\"age\": 1}"
      };
      lambda.invoke(pullParams, function (error, data) {
        if (error) {
          console.log(error);
        } else {
          pullResults = JSON.parse(data.Payload);
          const endTime = new Date().getTime()
          console.log("Data "+i+" : ")
          console.log(data.Payload)
          console.log("Total time : "+(endTime - startTime))
        }
      });
    }
}

function signinCallback(googlAccessId) {
    // Add the Google access token to the Cognito credentials login map.
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'eu-west-1:b6d67f30-5b3d-4f4a-bcc3-3e93467bba22',
      Logins: {
          'accounts.google.com': googlAccessId
      }
    });

    // Obtain AWS credentials
    AWS.config.credentials.get(function(err){
      if(err)
        console.error(err);
      else
        console.log("AWS credentials "+ AWS.config.credentials.accessKeyId);
     callLambdaFunction();
    } ,);
}

exports.cognito_module = signinCallback;