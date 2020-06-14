import React from 'react';
import './getPedidos.css';
import PropTypes from 'prop-types';
import {Button} from '../commons/Button/Button'

const GetPedidos = ({ callback }) => {
  const items = callback('pedidos');
  return (
    <div className="container-pedidos">
      {items.map(item => (
        <div className="pedido" key={item.id}>
          <p className="title">Cliente: {item.Cliente}</p>
          <p className="hora-pedido">Hora Pedido: {item.Hora}</p>
          <hr />
          <div className="pedidos-fire">
            <div className="container-pedidos-prod">
              <span className="head-pedidos">PRODUCTO</span>
              <span className="head-pedidos">CANT.</span>
            </div>
            {item.Productos.map(prod => (
              <div className="container-pedidos-prod" key={prod.id}>
                <span className="">{prod.nombre}</span>
                <span className="">{prod.cantidad}</span>
              </div>
            ))}
          </div>
          <div className="container-absolute">
            <hr />
            <Button className="btn-primary" type="button">LISTO</Button>
          </div>
        </div>
      ))
      }
    </div>
  );
};

export default GetPedidos;

GetPedidos.propTypes = {
  callback: PropTypes.func.isRequired
};
