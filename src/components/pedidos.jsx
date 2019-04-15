import React, { useState }from 'react';
import { deleteProduct, addCount, cancel, totalPrice, sendOrder } from './Firebase';
import './pedidos.css';

const Pedidos = (props) => {
  const [name, setName] = useState('');
  let totalPrecio = totalPrice(props.menu);
  return ( 
    <div>
      <h5>Ingrese nombre del cliente:</h5>
      <input type='text' onChange={e => setName(e.currentTarget.value)}></input>
      <div>
        <table className='column'>
          <thead>
            <tr>
              <th><span>PRODUCTO</span></th>
              <th><span>CANTIDAD</span></th>
              <th><span>TOTAL($)</span></th>
              <th><span>ELIMIN</span></th>
            </tr>
          </thead>
          <tbody>
            {props.menu.map((p) => {
              return (
                <tr key={p.id}>
                <td><span>{p.nombre}</span></td>
                <td>
                  <span onClick={()=>addCount(p, props.menu, props.setMenu)}><i className="fas fa-minus sign"></i></span>
                  {'  '}
                  <span>{p.cantidad}</span>
                  {'  '}
                  <span onClick={()=>addCount(p, props.menu, props.setMenu, '+1')}><i className="fas fa-plus sign"></i></span>
                </td>
                <td><span>{p.cantidad * p.precio}</span></td>
                <td>
                  <span onClick={()=> deleteProduct(p, props.menu, props.setMenu)}><i className="fas fa-times sign"></i></span>   
                </td>
              </tr>
              )
            })}
            <tr>
              <th><span>TOTAL</span></th>
              <th><span>{' '}$. {' '}</span></th>
              <th>{totalPrecio}</th>
            </tr>
          </tbody>
        </table> 
      </div>
      <button onClick={()=>cancel(props.setMenu)} >Cancelar pedido</button>
      <button onClick={()=>sendOrder(props.menu, totalPrecio, name, props.setMenu)}>Enviar pedido</button>
    </div>
  )
};

export default Pedidos;