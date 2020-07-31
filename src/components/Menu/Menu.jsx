import React from 'react';
import './Menu.scss';
import PropTypes from 'prop-types';
import { filterMenu } from '../../utils/utils';
import { useFirebase } from '../../utils/Firebase';
import {Product} from "../commons/Product/Product";

const Menu = ({
  sendProduct,
  pedido,
  stat,
}) => {
  const items = filterMenu(useFirebase('menu'), stat);
  return (
    <div className="container-products">
      {items.map(item =>
        <Product
          key={item.id}
          item={item}
          onClick={() => sendProduct(item, pedido)}
        />
      )}
    </div>
  );
};

Menu.propTypes = {
  sendProduct: PropTypes.func.isRequired,
  pedido: PropTypes.arrayOf(PropTypes.object).isRequired,
  stat: PropTypes.string.isRequired,
};

export default Menu;
