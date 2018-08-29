import React, { Component } from 'react';
import logo from './logo.svg';
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import './App.css';

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

export default App;
