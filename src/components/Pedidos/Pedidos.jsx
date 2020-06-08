import React, { useState, useEffect } from 'react';
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
  const [ errorName, setErrorName ] = useState(false);
  const totalPrecio = totalPrice(menu);
  const [ newMenu, setNewMenu ] = useState(menu);
  const [ success, setSuccess ] = useState(false);

  const validateName = () => {
    if(name.length > 1){
      setErrorName(false);
      return true;
    }else{
      setErrorName(true);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    validateName();
    if(newMenu.length > 0 && name.length > 1 ){
      sendOrder(newMenu, totalPrecio, name);
      setNewMenu([]);
      setName('');
      setSuccess(true);
      setMenu([])
    }
  };

  useEffect(()=>{
    setNewMenu(menu.filter(ele => ele.cantidad > 0));
  }, [menu]);

  const onHandleInput = (e) => {
    setName(e.currentTarget.value);
    validateName();
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="section-client-name">
        <h5>Ingrese nombre del cliente:</h5>
        <section className="input-client">
          <input type="text" onChange={e => onHandleInput(e)} value={name} />
          { errorName && <span className="error-input">Ingrese nombre del cliente</span>}
        </section>
      </div>
      { newMenu.length === 0 && success &&
        <div className="empty-box">
          <p>Gracias por su pedido.</p>
          <p>Puede realizar otro pedido seleccionando un producto del listado.</p>
        </div>
      }
      { newMenu.length === 0 && !success &&
          <div className="empty-box">
            <img
              src="https://user-images.githubusercontent.com/45070947/83985423-d6600d00-a8fe-11ea-86af-c2f018c62a3f.jpg"
              alt="Plato vacio"/>
            <p>Elija un producto</p>
          </div>
      }
      { newMenu.length > 0 &&
        <>
          <div className="container">
            <div className="row head">
              <span className="col-4">PRODUCTO</span>
              <span className="col-4">CANTIDAD</span>
              <span className="col-2">TOTAL($)</span>
              <span className="col-2">ELIM</span>
            </div>
            { newMenu.map(p =>
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
