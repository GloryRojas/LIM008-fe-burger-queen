import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  deleteProduct,
  addCount,
  cancel,
  totalPrice,
} from './Utils';
import { sendOrder } from './Firebase';
import './Pedidos.css';

const Pedidos = ({ menu, setMenu }) => {
  const [name, setName] = useState('');
  const totalPrecio = totalPrice(menu);
  return (
    <div>
      <h5>Ingrese nombre del cliente:</h5>
      <input type="text" onChange={e => setName(e.currentTarget.value)} />
      <div className="container">
        <div className="row head">
          <span className="col-4">PRODUCTO</span>
          <span className="col-4">CANTIDAD</span>
          <span className="col-2">TOTAL($)</span>
          <span className="col-2">ELIM</span>
        </div>
        {menu.map(p => (
          <div className="row prod" key={p.id}>
            <span className="col-4">{p.nombre}</span>
            <span className="col-4">
              <button type="button" className="sign i" onClick={() => addCount(p.id, menu, setMenu)}><i className="fas fa-minus" /></button>
              <span>{p.cantidad}</span>
              <button type="button" className="sign i" onClick={() => addCount(p.id, menu, setMenu, '+1')}><i className="fas fa-plus" /></button>
            </span>
            <span className="col-2">{p.cantidad * p.precio}</span>
            <span className="col-2">
              <button type="button" className="sign i" onClick={() => deleteProduct(p, menu, setMenu)}><i className="fas fa-times" /></button>
            </span>
          </div>
        ))}
        <div className="col-6 total-price">
          <span>TOTAL  &#36; {totalPrecio}
          </span>
        </div>
      </div>
      <button type="button" onClick={() => cancel(setMenu)}>Cancelar pedido</button>
      <button type="button" onClick={() => sendOrder(menu, totalPrecio, name, setMenu, setName)}>Enviar pedido</button>
    </div>
  );
};

export default Pedidos;

Pedidos.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object).isRequired,
  setMenu: PropTypes.func.isRequired,
};
