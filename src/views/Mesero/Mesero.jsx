import React, { useState } from 'react';
import './Mesero.css';
import Menu from '../../components/Menu/Menu';
import Pedidos from '../../components/Pedidos/Pedidos';
import Header from '../../components/Header/Header';
import {Button} from "../../components/commons/Button/Button";

const Mesero = () => {
  const [stat, setMenu] = useState('Desayuno');
  const [pedido, setPedido] = useState([]);

  const sendProduct = (item, menu) => {
    const itemPedido = menu.find(e => e.id === item.id);
    if(!itemPedido){
      setPedido(pedido.concat(item));
    }else{
      let cantidad = menu[menu.indexOf(itemPedido)].cantidad;
      itemPedido.cantidad = cantidad + 1;
      setPedido([...pedido]);
    }
  };

  return (
    <div>
      <Header back />
      <div className="bodrow">
        <div className="col back-uno">
          <h3>MENÚ</h3>
          <Button className="btn-primary" type="button" onClick={() => setMenu('Desayuno')}>Desayuno</Button>
          <Button className="btn-primary" type="button" onClick={() => setMenu('allDay')}>Resto del día</Button>
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
