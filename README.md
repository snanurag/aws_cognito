# aws_cognito
The purpose of this repo is the POC, which authenticates against google app. Pass that authentication token to AWS Cognito specific identity pool. AWS Cognito generates federated identities. Then those federated identities are used to access the resources (Lambda) which are configured in the identity pool roles.

1. Run `npm install`.
2. Run `node app.js`.
3. Access `localhost:3000` from UI. From 
4. It will popup a google sign in page. When you login to it, google access id is transfered to nodejs app.
5. Then nodejs app access the identity pool and generates federated identity.
6. Using those credentials lambda function is executed.