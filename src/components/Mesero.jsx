import React, { useState } from 'react';
import './Mesero.css';
import Menu from './Menu';
import Pedidos from './Pedidos';
import Header from './Header';

const Mesero = () => {
  const [stat, setMenu] = useState('Desayuno');
  const [pedido, setPedido] = useState([]);

  const sendProduct = (item, menu) => {
    const itemPedido = menu.find(e => e.id === item.id);
    const newPedido = itemPedido
      ? [...menu]
      : [item, ...menu];
    setPedido(newPedido);
  };

  return (
    <div>
      <Header />
      <div className="bodrow">
        <div className="col back-uno">
          <h3>MENÚ</h3>
          <button type="button" onClick={() => setMenu('Desayuno')}>Desayuno</button>
          <button type="button" onClick={() => setMenu('allDay')}>Resto del día</button>
          <div>
            <Menu sendProduct={sendProduct} pedido={pedido} stat={stat} />
          </div>
        </div>
        <div className="col back-uno">
          <h3>PEDIDOS</h3>
          <Pedidos menu={pedido} setMenu={setPedido} />
        </div>
      </div>
    </div>
  );
};

export default Mesero;
