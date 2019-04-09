import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { Menu, Desayuno } from './components/Menu';
import Pedidos from './components/Pedidos'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      desayunoVisible: false,
      menuVisible: false
    }
  }

  render() {
    const { desayunoVisible, menuVisible } = this.state;
    return ( 
      <div className=''>
        <Header />
        <div className='bodrow'>
          <div className='col back-uno'>
            <h3>MENÚ</h3>
            <button onClick={() => { this.setState({ desayunoVisible: !desayunoVisible }) }}>Desayuno</button>
            <button onClick={() => { this.setState({ menuVisible: !menuVisible }) }}>Resto del día</button>
            <div>
              {desayunoVisible && <Desayuno/>}
              {menuVisible && <Menu/>}
            </div>
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