import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  deleteProduct,
  addCount,
  totalPrice,
} from '../../utils/utils';
import { sendOrder } from '../../utils/Firebase';
import './Pedidos.css';
import {Button} from "../commons/Button/Button";
import {ProductSelected} from "../commons/ProductSelected/ProductSelected";

const Pedidos = ({ menu, setMenu }) => {
  const [name, setName] = useState('');
  const totalPrecio = totalPrice(menu);

  const onSubmit = (e) => {
    e.preventDefault();
    if(menu.length > 0 ){
      sendOrder(menu, totalPrecio, name, setMenu, setName);
    }else {
      console.log('error')
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="section-client-name">
        <h5>Ingrese nombre del cliente:</h5>
        <input className="input-client" type="text" onChange={e => setName(e.currentTarget.value)} />
      </div>
      { menu.length === 0 &&
          <div className="empty-box">
            Elija un producto
          </div>
      }
      { menu.length > 0 &&
        <>
          <div className="container">
            <div className="row head">
              <span className="col-4">PRODUCTO</span>
              <span className="col-4">CANTIDAD</span>
              <span className="col-2">TOTAL($)</span>
              <span className="col-2">ELIM</span>
            </div>
            {menu.map(p =>
              <ProductSelected
                key={p.id}
                p={p}
                lessQuantity={() => setMenu(addCount(p.id, menu))}
                addQuantity={() => setMenu(addCount(p.id, menu, '+1'))}
                deleteProduct={() => setMenu(deleteProduct(p.id, menu))}
              />
            )}
            <div className="col-6 total-price">
            <span>TOTAL  &#36; {totalPrecio}.00
            </span>
            </div>
          </div>
          <Button className="btn-primary" type="button" onClick={() => setMenu([])}>Cancelar pedido</Button>
          <Button className="btn-primary" type="submit" >Enviar pedido</Button>
        </>
      }
    </form>
  );
};

export default Pedidos;

Pedidos.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object).isRequired,
  setMenu: PropTypes.func.isRequired,
};
