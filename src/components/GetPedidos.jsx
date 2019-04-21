import React from 'react';
import './getPedidos.css';

const GetPedidos = ({ callback }) => {
  const items = callback('pedidos');
  return (
    <div className="blocks">
      {items.map(item => (
        <div className='ped' key={item.id}>
          <p className='title'>Cliente: {item.Cliente}</p>
          <p className='hora-pedido'>Hora Pedido: {item.Hora}</p>
          <hr />
            <div className="col pedidos-fire">
              <div className="row">
                <span className="col-8 head-pedidos">PRODUCTO</span>
                <span className="col-4 head-pedidos">CANT.</span>
              </div>
              {item.Productos.map(prod => (
              <div className="row" key={prod.id}>
                <span className="col-8">{prod.nombre}</span>
                <span className="col-4">{prod.cantidad}</span>
              </div>
              ))}
            </div>
            <hr />
            <button>PEDIDO LISTO</button>
        </div>
      ))
      }
    </div>
  );
};
  
export default GetPedidos;
