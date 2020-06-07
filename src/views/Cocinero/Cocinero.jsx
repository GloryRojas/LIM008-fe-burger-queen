import React from 'react';
import Header from '../../components/Header/Header';
import GetPedidos from '../../components/MostrarPedidos/GetPedidos';
import { useFirebase } from '../../utils/Firebase';

const Cocinero = () => (
  <div>
    <Header back />
    <div className="bodrow">
      <GetPedidos callback={useFirebase}/>
    </div>
  </div>
);

export default Cocinero;
