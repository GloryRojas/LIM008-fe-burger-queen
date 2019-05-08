import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  deleteProduct,
  addCount,
  totalPrice,
} from './utils';
import { sendOrder } from './Firebase';
import './Pedidos.css';

const Pedidos = ({ menu, setMenu }) => {
  const [name, setName] = useState('');
  const totalPrecio = totalPrice(menu);
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      sendOrder(menu, totalPrecio, name);
      setMenu([]);
      setName('');
      }}>
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
              <button type="button" className="sign i" onClick={() => setMenu(addCount(p.id, menu))}><i className="fas fa-minus" /></button>
              <span>{p.cantidad}</span>
              <button type="button" className="sign i" onClick={() => setMenu(addCount(p.id, menu, '+1'))}><i className="fas fa-plus" /></button>
            </span>
            <span className="col-2">{p.cantidad * p.precio}</span>
            <span className="col-2">
              <button type="button" className="sign i" onClick={() => setMenu(deleteProduct(p.id, menu))}><i className="fas fa-times" /></button>
            </span>
          </div>
        ))}
        <div className="col-6 total-price">
          <span>TOTAL  &#36; {totalPrecio}.00
          </span>
        </div>
      </div>
      <button type="button" onClick={() => setMenu([])}>Cancelar pedido</button>
      <button type="submit" >Enviar pedido</button>
    </form>
  );
};

export default Pedidos;

Pedidos.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object).isRequired,
  setMenu: PropTypes.func.isRequired,
};
