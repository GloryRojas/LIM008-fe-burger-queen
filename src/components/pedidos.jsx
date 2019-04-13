import React, {setState} from 'react';
import { deleteProduct, addCount, cancel, totalPrice, sendOrder } from './Firebase';
import './Pedidos.css';

const Pedidos = ({menu, setMenu}) => {
  /* const [name, setName] = setState('');
  console.log(name) */
  let totalPrecio = totalPrice(menu);
  return ( 
    <div>
      <h5>Ingrese nombre del cliente:</h5>
      <input type='text' /* onChange={e => setName(e.currentTarget.value)} */></input>
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
            {menu.map((p) => {
              return (
                <tr key={p.id}>
                <td><span>{p.nombre}</span></td>
                <td>
                  <span onClick={()=>addCount(p, menu, setMenu)}><i className="fas fa-minus sign"></i></span>
                  {'  '}
                  <span>{p.cantidad}</span>
                  {'  '}
                  <span onClick={()=>addCount(p, menu, setMenu, '+1')}><i className="fas fa-plus sign"></i></span>
                </td>
                <td><span>{p.cantidad * p.precio}</span></td>
                <td>
                  <span onClick={()=> deleteProduct(p, menu, setMenu)}><i className="fas fa-times sign"></i></span>   
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
      <button onClick={()=>cancel(setMenu)} >Cancelar pedido</button>
      <button onClick={()=>sendOrder(menu, totalPrecio)}>Enviar pedido</button>
    </div>
  )
};

export default Pedidos;