import React, { useState } from 'react';
import './Mesero.css';
import Menu from '../../components/Menu/Menu';
import Pedidos from '../../components/Pedidos/Pedidos';
import Header from '../../components/Header/Header';
import {Button} from "../../components/commons/Button/Button";
import {CenterContainer, MainContainer, SectionContainer} from "../../components/commons/containers/MainContaimer";

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
    <>
      <Header back />
      <MainContainer >
          <SectionContainer >
            <CenterContainer>
              <h3>MENÚ</h3>
            </CenterContainer>
            <CenterContainer>
              <Button className="btn-primary" type="button" onClick={() => setMenu('Desayuno')}>Desayuno</Button>
              <Button className="btn-primary" type="button" onClick={() => setMenu('allDay')}>Resto del día</Button>
            </CenterContainer>
            <div>
              <Menu sendProduct={sendProduct} pedido={pedido} stat={stat} />
            </div>
          </SectionContainer>
          <SectionContainer >
            <CenterContainer>
              <h3>PEDIDOS</h3>
            </CenterContainer>
            <Pedidos menu={pedido} setMenu={setPedido} />
          </SectionContainer>
      </MainContainer>
    </>
  );
};

export default Mesero;
