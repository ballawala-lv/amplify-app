import React, { Component } from 'react';
import logo from './logo.svg';
import awsmobile from './aws-exports';
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import {withOAuth } from 'aws-amplify-react';
import './App.css';

// GraphQL endpoint: https://ekm6fg4dcrfa5olovw7joczefq.appsync-api.us-east-1.amazonaws.com/graphql
// GraphQL API KEY: da2-q6wyx3ufbnfdpfct5o7obr5z6a
// https://github.com/aws-samples/aws-mobile-appsync-events-starter-react

Amplify.configure(aws_exports);

Amplify.configure(awsmobile)
Amplify.Logger.LOG_LEVEL = 'DEBUG';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
          
//         </p>
//       </div>
//     );
//   }
// }
// export default App;
let session = Auth.currentSession();

const oauth = {
  // Domain name
  domain : 'mytestapp1.auth.us-east-1.amazoncognito.com',
  
  // Authorized scopes
  scope : ['phone', 'email', 'profile', 'openid','aws.cognito.signin.user.admin'], 

  // Callback URL
  redirectSignIn : 'http://localhost:3000', 
  
  // Sign out URL
  redirectSignOut : 'http://localhost:3000',

  // 'code' for Authorization code grant, 
  // 'token' for Implicit grant
  responseType: 'code',

  // optional, for Cognito hosted ui specified options
  options: {
      // Indicates if the data collection is enabled to support Cognito advanced security features. By default, this flag is set to true.
      AdvancedSecurityDataCollectionFlag : true
  }
}

Amplify.configure({
  Auth: {
      // other configurations...
      // ....
      oauth: oauth
  },
  // ...
});



class MyApp extends React.Component {
  // ...
  render() {
    Auth.currentAuthenticatedUser()
    .then(user => console.log('USER IS', user))
    .catch(err => console.log(err));
      return(
          <div>
            <button onClick={this.props.OAuthSignIn}>
              Sign in with AWS
          </button>
          {JSON.stringify(session)}
          </div>
      )
  }
}

export default withOAuth(MyApp);



// https://mytestapp1.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=7ve27tb642l965fj0vnngh9dl4&redirect_uri=http://localhost:3000
// https://aws.amazon.com/blogs/aws/launch-amazon-cognito-user-pools-general-availability-app-integration-and-federation/
// https://github.com/aws-amplify/amplify-js/issues/705