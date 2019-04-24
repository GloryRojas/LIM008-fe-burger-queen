import React from 'react';
import './Menu.css';
import PropTypes from 'prop-types';
import { filterMenu } from './utils';

const Menu = ({
  callback,
  sendProduct,
  pedido,
  stat,
}) => {
  const items = filterMenu(callback('menu'), stat);
  return (
    <div className="blocks">
      {items.map(item => (
        <button data-testid={`${item.id}-button`} type="button" className="product back-dos" key={item.id} onClick={() => sendProduct(item, pedido)}>
          <p data-testid={`${item.id}-nombre`}>
            {item.nombre}
          </p>
          <p>
            {item.precio}
          </p>
        </button>
      ))
      }
    </div>
  );
};

Menu.propTypes = {
  callback: PropTypes.func.isRequired,
  sendProduct: PropTypes.func.isRequired,
  pedido: PropTypes.arrayOf(PropTypes.object).isRequired,
  stat: PropTypes.string.isRequired,
};

export default Menu;
