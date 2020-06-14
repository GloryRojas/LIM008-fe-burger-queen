import React from 'react';
import Header from '../../components/Header/Header';
import GetPedidos from '../../components/MostrarPedidos/GetPedidos';
import { useFirebase } from '../../utils/Firebase';

const Cocinero = () => (
  <>
    <Header back />
    <div className="main-container">
      <GetPedidos callback={useFirebase}/>
    </div>
  </>
);

export default Cocinero;
