import React, { Component, useState } from 'react';
import './Pedidos.css';

export const Pedidos = ({menu}) => {
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
                <tr>
                  <td>{p.nombre}</td>
                  <td>
                    <button><i className="fas fa-minus"></i></button>
                    {p.count}
                    <button><i className="fas fa-plus"></i></button>
                  </td>
                  <td>{p.precio}</td>
                  <td>{p.count * p.precio}</td>
                  <td>
                    <button><i className="fas fa-times"></i></button>   
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