import React from 'react';
import Header from './Header';
import GetPedidos from './GetPedidos';
import { useFirebase } from './Firebase';

const Cocinero = () => (
  <div>
    <Header />
    <div className="bodrow">
      <GetPedidos callback={useFirebase}/>
    </div>
  </div>
);

export default Cocinero;
