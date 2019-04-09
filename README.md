# aws_cognito
The purpose of this repo is the POC, which authenticates against google app. Pass that authentication token to AWS Cognito specific identity pool. AWS Cognito generates federated identities. Then those federated identities are used to access the resources (Lambda) which are configured in the identity pool roles.
