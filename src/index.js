import React from 'react';
import ReactDOM from 'react-dom';
import firebase from './firestore.js';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';


const db = firebase.firestore();

db.collection('menu').get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} : ${doc.data().nombre} : ${doc.data().precio}`);
  });
});

class App extends React.Component {
  render() {
    return <h1>Hola</h1>
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
