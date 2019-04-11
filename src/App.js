import React, { Component, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Menu, Desayuno } from './components/Menu';
import { useFirebase } from './components/Firebase'
import Pedidos from './components/Pedidos';

const App = () => {

  const [desayunoVisible, setDesayuno] = useState(false);
  const [menuVisible, setMenu] = useState(false);
  const [pedido, setPedido] = useState([]);

  const sendProduct = (item) => {
    setPedido([{...item, count:1}, ...pedido])
  }

  return ( 
    <div className=''>
      <Header />
      <div className='bodrow'>
        <div className='col back-uno'>
          <h3>MENÚ</h3>
          <button onClick={() => { setDesayuno(!desayunoVisible) }}>Desayuno</button>
          <button onClick={() => { setMenu(!menuVisible) }}>Resto del día</button>
          <div>
            {desayunoVisible && <Desayuno callback={useFirebase} sendProduct={sendProduct}/>}
            {menuVisible && <Menu callback={useFirebase} sendProduct={sendProduct}/>}
          </div>
        </div>
        <div className='col back-uno'>
          <h3>PEDIDOS</h3>
          <Pedidos menu={pedido} />
        </div>
      </div>
    </div> 
  );
};

export default App;