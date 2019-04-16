import React, { useState } from 'react';
import './Mesero.css';
import { Menu, Desayuno } from './menu';
import { useFirebase } from './Firebase'
import Pedidos from './pedidos';

const Mesero = () => {
  const [desayunoVisible, setDesayuno] = useState(false);
  const [menuVisible, setMenu] = useState(false);
  const [pedido, setPedido] = useState([]);

  const sendProduct = (item, menu) => {
    const itemPedido = menu.find(e => e.id === item.id);
    itemPedido ? setPedido([...menu]) : setPedido([item,...menu]);
  };

  return ( 
    <div className="bodrow">
      <div className="col back-uno">
        <h3>MENÚ</h3>
        <button type="button" onClick={() => setDesayuno(!desayunoVisible)}>Desayuno</button>
        <button type="button" onClick={() => setMenu(!menuVisible)}>Resto del día</button>
        <div>
          {desayunoVisible && <Desayuno callback={useFirebase} sendProduct={sendProduct} pedido={pedido} />}
          {menuVisible && <Menu callback={useFirebase} sendProduct={sendProduct} pedido={pedido} />}
        </div>
      </div>
      <div className="col back-uno">
        <h3>PEDIDOS</h3>
        <Pedidos menu={pedido} setMenu={setPedido} />
      </div>
    </div>
  );
};

export default Mesero;
