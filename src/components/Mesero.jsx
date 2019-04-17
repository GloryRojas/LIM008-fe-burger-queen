import React, { useState } from 'react';
import './Mesero.css';
import Menu from './Menu';
import { useFirebase } from './Firebase';
import Pedidos from './Pedidos';

const Mesero = () => {
  const [desVis, setDesayuno] = useState(false);
  const [menuVis, setMenu] = useState(false);
  const [pedido, setPedido] = useState([]);

  const sendProduct = (item, menu) => {
    const itemPedido = menu.find(e => e.id === item.id);
    itemPedido
      ? setPedido([...menu])
      : setPedido([item, ...menu]);
  };

  return (
    <div className="bodrow">
      <div className="col back-uno">
        <h3>MENÚ</h3>
        <button type="button" onClick={() => setDesayuno(!desVis)}>Desayuno</button>
        <button type="button" onClick={() => setMenu(!menuVis)}>Resto del día</button>
        <div>
          {desVis && <Menu callback={useFirebase} sendProduct={sendProduct} pedido={pedido} stat="Desayuno" />}
          {menuVis && <Menu callback={useFirebase} sendProduct={sendProduct} pedido={pedido} stat="allDay" />}
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
