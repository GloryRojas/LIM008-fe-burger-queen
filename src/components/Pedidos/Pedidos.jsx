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
import {CenterContainer} from "../commons/containers/MainContaimer";

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
    <form onSubmit={(e) => onSubmit(e)} className="container-products">
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
            <p>Elija un producto</p>
          </div>
      }
      { newMenu.length > 0 &&
        <>
          <div className="container">
            <div className="section-client-name">
              <h4>Productos Seleccionados:</h4>
              <div className="total-price">
                <span>TOTAL S/. {totalPrecio}.00
                </span>
              </div>
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
          </div>
          <CenterContainer>
            <Button className="btn-primary" type="button" onClick={() => setMenu([])}>Cancelar</Button>
            <Button className="btn-primary" type="submit" >Enviar</Button>
          </CenterContainer>
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
