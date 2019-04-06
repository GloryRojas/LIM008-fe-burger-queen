import React, { Component } from 'react';
import './App.css';
import Header from './header';
import { Menu, Desayuno } from './menu';

class App extends Component {
  render() {
    return ( 
      <div>
        <Header />
        <div>
          <h3>MENÚ</h3>
          <button>Desayuno</button>
          <button>Resto del Día</button>
          <Menu />
          <Desayuno />
        </div>
        <div>
          <h3>AQUI VAN LOS PEDIDOS</h3>
        </div>
      </div> 
    )};
};

export default App;