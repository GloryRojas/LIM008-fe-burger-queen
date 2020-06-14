import React from 'react';
import './product.css';

export const Product = (props) => {
  const { item } = props;
  return(
    <button
      data-testid={`${item.id}-button`}
      type="button"
      className="product"
      key={item.id}
      onClick={props.onClick}>
        <p data-testid={`${item.id}-nombre`} className="product-description">
          {item.nombre}
        </p>
        <p>
          &#36; {item.precio}&#46;00
        </p>
    </button>
  )
};
