import React from 'react';
import './Menu.css';
import PropTypes from 'prop-types';
import { filterMenu } from './utils';
import { useFirebase } from './Firebase';

const Menu = ({
  sendProduct,
  pedido,
  stat,
}) => {
  const items = filterMenu(useFirebase('menu'), stat);
  return (
    <div className="blocks">
      {items.map(item => (
        <button data-testid={`${item.id}-button`} type="button" className="product back-dos" key={item.id} onClick={() => sendProduct(item, pedido)}>
          <img src={`${item.img}`} alt="" className="img-menu"/>
          <p data-testid={`${item.id}-nombre`}>
            {item.nombre}
          </p>
          <p>
           &#36; {item.precio}&#46;00
          </p>
        </button>
      ))
      }
    </div>
  );
};

Menu.propTypes = {
  sendProduct: PropTypes.func.isRequired,
  pedido: PropTypes.arrayOf(PropTypes.object).isRequired,
  stat: PropTypes.string.isRequired,
};

export default Menu;
