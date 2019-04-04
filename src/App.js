import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div>
          <h2>Ingrese Nombre del cliente:</h2> 
          <input type="text"></input>
        </div>
        <div>
          <h6>Aqui va el menú </h6>
        </div>
        <button></button>
      </div>
    );
  }
}

export default App;