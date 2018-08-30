import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const federated = {
    facebook_app_id: '320065391877856',
};


ReactDOM.render(<App federated={federated}/>, document.getElementById('root'));
registerServiceWorker();
