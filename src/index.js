import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from 'aws-appsync-react';
import { AUTH_TYPE } from "aws-appsync/lib/link/auth-link";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";

const client = new AWSAppSyncClient({
    url: "https://ekm6fg4dcrfa5olovw7joczefq.appsync-api.us-east-1.amazonaws.com/graphql",
    region: 'us-east-1',
    auth: {
        type: AUTH_TYPE.API_KEY,
        apiKey: 'da2-q6wyx3ufbnfdpfct5o7obr5z6a',

        // type: AUTH_TYPE.AWS_IAM,
        // Note - Testing purposes only
        /*credentials: new AWS.Credentials({
            accessKeyId: AWS_ACCESS_KEY_ID,
            secretAccessKey: AWS_SECRET_ACCESS_KEY
        })*/

        // Amazon Cognito Federated Identities using AWS Amplify
        //credentials: () => Auth.currentCredentials(),

        // Amazon Cognito user pools using AWS Amplify
        // type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
        // jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
    },
});
client
    .query({
            query: gql `
      {
  listTests{
    items {
      id
      content
    }
  }
}
    `
  })
  .then(result => console.log(result));

const federated = {
    facebook_app_id: '320065391877856',
};

const WithProvider = () => (
    <ApolloProvider client={client}>
      <Rehydrated>
        <App federated={federated}/>
      </Rehydrated>
    </ApolloProvider>
  );

ReactDOM.render(<WithProvider/>, document.getElementById('root'));
registerServiceWorker();
