import React, { Component } from 'react';
import logo from './logo.svg';
import awsmobile from './aws-exports';
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import {withAuthenticator } from 'aws-amplify-react';
import './App.css';

// GraphQL endpoint: https://ekm6fg4dcrfa5olovw7joczefq.appsync-api.us-east-1.amazonaws.com/graphql
// GraphQL API KEY: da2-q6wyx3ufbnfdpfct5o7obr5z6a

Amplify.configure(aws_exports);

Amplify.configure(awsmobile)
Amplify.Logger.LOG_LEVEL = 'DEBUG';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

export default withAuthenticator(App, { includeGreetings: true });
