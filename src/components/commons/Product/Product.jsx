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
        <img
          src={`${item.img}`}
          alt="Product"
          className="img-menu"/>
        <p data-testid={`${item.id}-nombre`}>
          {item.nombre}
        </p>
        <p>
          &#36; {item.precio}&#46;00
        </p>
    </button>
  )
};