import React, { Component } from 'react';
import './App.css';
import Header from './components/header.jsx';
import { Menu, Desayuno } from './components/menu.jsx';
import Pedidos from './components/pedidos.jsx'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      box: <div><Desayuno/></div>,
      boxing: <div></div>
    }
  }
/*   breakfast = () => {
    this.setState({
      box: <div><Desayuno/></div>
    })
  };

  dinner = () => {
    this.setState({
      boxing: <div><Menu/></div>
    })
  }; */

  render() {

    return ( 
      <div className=''>
        <Header />
        <div className='bodrow'>
          <div className='col back-uno'>
            <h3>MENÚ</h3>
            <button onClick={this.breakfast}>Desayuno</button>
            <button onClick={this.dinner}>Resto del día</button>
            <Desayuno/>
            <Menu/>
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