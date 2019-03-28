import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA0_09VnrA-EZjEyMCIFlmsDqeKYIhiXlQ",
    authDomain: "burguer-queen-grm.firebaseapp.com",
    databaseURL: "https://burguer-queen-grm.firebaseio.com",
    projectId: "burguer-queen-grm",
    storageBucket: "burguer-queen-grm.appspot.com",
    messagingSenderId: "1033408267444"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
