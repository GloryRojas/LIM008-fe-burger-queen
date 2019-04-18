import React from 'react';
import './getPedidos.css';

const GetPedidos = ({ callback }) => {
  const items = callback('pedidos');
  return (
    <div className="blocks">
      {items.map(item => (
        <div className='ped'>
          <p className='title'>{item.Cliente}</p>
          <p className='title'>{item.Hora}</p>
            <div className="col">
              <div className="row">
                <span className="col-8">PRODUCTO</span>
                <span className="col-4">CANTIDAD</span>
              </div>
              {item.Productos.map(prod => (
              <div className="row">
                <span className="col-8">{prod.nombre}</span>
                <span className="col-4">{prod.cantidad}</span>
              </div>
              ))}
            </div>
          <p>Total: {item.Total}</p>
        </div>
      ))
      }
    </div>
  );
};
  
export default GetPedidos;
