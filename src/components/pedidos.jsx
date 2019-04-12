import React, {useState} from 'react';
import { deleteProduct, addCount } from './Firebase';
import './Pedidos.css';

const Pedidos = ({menu, setMenu}) => {

  return ( 
    <div>
      <h5>Ingrese nombre del cliente:</h5>
      <input type='text'></input>
      <div>
        <table>
          <thead>
            <tr>
              <th>PRODUCTO</th>
              <th>CANTIDAD</th>
              <th>P /UNIT $</th>
              <th>P /TOTAL $</th>
              <th>P /ELIMIN $</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((p) => {
              return (
                <tr key={p.id}>
                  <td>{p.nombre}</td>
                  <td>
                    <button onClick={()=>addCount(p.id, menu, setMenu, '-1')}><i className="fas fa-minus"></i></button>
                    {p.cantidad}
                    <button onClick={()=>addCount(p.id, menu, setMenu)}><i className="fas fa-plus"></i></button>
                  </td>
                  <td>{p.precio}</td>
                  <td>{p.cantidad * p.precio}</td>
                  <td>
                    <button onClick={()=> deleteProduct(p.id, menu, setMenu)}><i className="fas fa-times"></i></button>   
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table> 
      </div>
      <button>Enviar pedido</button>
    </div>
  )
};

export default Pedidos;