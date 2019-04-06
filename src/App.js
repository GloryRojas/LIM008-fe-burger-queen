import React, { Component } from 'react';
import './App.css';
import Header from './components/header.jsx';
import { Menu, Desayuno } from './components/menu.jsx';
import Pedidos from './components/pedidos.jsx'

class App extends Component {

  render() {
    return ( 
      <div className=''>
        <Header />
        <div className='bodrow'>
          <div className='col back-uno'>
            <h3>MENÚ</h3>
            <button onClick={<Desayuno />}>Desayuno</button>
            <button onClick={<Menu />}>Resto del Día</button>
            <Desayuno />
            <Menu />
          </div>
          <div className='col back-uno'>
            <h3>PEDIDOS</h3>
            <Pedidos />
          </div>
        </div>
      </div> 
    )};
};

export default App;