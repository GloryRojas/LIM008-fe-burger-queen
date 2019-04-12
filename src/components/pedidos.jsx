import React from 'react';
import { deleteProduct, addCount, saludo } from './Firebase';
import './Pedidos.css';

const Pedidos = ({menu, setMenu}) => {

  return ( 
    <div>
      <h5>Ingrese nombre del cliente:</h5>
      <input type='text'></input>
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
                  <span onClick={()=>addCount(p.id, menu, setMenu, '-1')}><i className="fas fa-minus sign"></i></span>
                  {'  '}
                  <span>{p.cantidad}</span>
                  {'  '}
                  <span onClick={()=>addCount(p.id, menu, setMenu)}><i className="fas fa-plus sign"></i></span>
                </td>
                <td><span>{p.cantidad * p.precio}</span></td>
                <td>
                  <span onClick={()=> deleteProduct(p.id, menu, setMenu)}><i className="fas fa-times sign"></i></span>   
                </td>
              </tr>
              )
            })}
            <tr>
              <th><span>TOTAL</span></th>
              <th><span>{' '}$. {' '}</span></th>
              <th>{saludo(menu)}</th>
            </tr>
          </tbody>
        </table> 
      </div>
      <button>Enviar pedido</button>
    </div>
  )
};

export default Pedidos;