import React, { Component } from 'react';
import './App.css';
import Header from './components/header.jsx';
import { Menu, Desayuno } from './components/menu.jsx';
import Pedidos from './components/pedidos.jsx'

class App extends Component {
  render() {
    return ( 
      <div className='container'>
        <Header />
        <div className='row'>
          <div className='col back-uno'>
            <h3>MENÚ</h3>
            <button onClick={()=><Menu />}>Desayuno</button>
            <button onClick={()=><Desayuno />}>Resto del Día</button>
          </div>
          <div className='col back-uno'>
            <Pedidos />
          </div>
        </div>
      </div> 
    )};
};

export default App;