import React, { useState } from 'react';
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
      <div>
        <table className="column">
          <thead>
            <tr>
              <th><span>PRODUCTO</span></th>
              <th><span>CANTIDAD</span></th>
              <th><span>TOTAL($)</span></th>
              <th><span>ELIMIN</span></th>
            </tr>
          </thead>
          <tbody>
            {menu.map(p =>
              (
                <tr key={p.id}>
                  <td><span>{p.nombre}</span></td>
                  <td>
                    <button type="button" className="sign" onClick={() => addCount(p.id, menu, setMenu)}><i className="fas fa-minus" /></button>
                    {'  '}
                    <span>{p.cantidad}</span>
                    {'  '}
                    <button type="button" className="sign" onClick={() => addCount(p.id, menu, setMenu, '+1')}><i className="fas fa-plus" /></button>
                  </td>
                  <td><span>{p.cantidad * p.precio}</span></td>
                  <td>
                    <button type="button" className="sign" onClick={() => deleteProduct(p, menu, setMenu)}><i className="fas fa-times" /></button>
                  </td>
                </tr>
              ),
            )}
            <tr>
              <th><span>TOTAL</span></th>
              <th><span>{' '}$. {' '}</span></th>
              <th>{totalPrecio}</th>
            </tr>
          </tbody>
        </table>
      </div>
      <button type="button" onClick={() => cancel(setMenu)}>Cancelar pedido</button>
      <button type="button" onClick={() => sendOrder(menu, totalPrecio, name, setMenu)}>Enviar pedido</button>
    </div>
  );
};

export default Pedidos;
