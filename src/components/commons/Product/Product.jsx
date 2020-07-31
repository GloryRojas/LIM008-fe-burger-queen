import React from 'react';
import './product.scss';

export const Product = (props) => {
  const { item } = props;
  return(
    <button
      data-testid={`${item.id}-button`}
      type="button"
      className="product"
      key={item.id}
      onClick={props.onClick}>
      <img src={item.img} />
      <p data-testid={`${item.id}-nombre`} className="paragraph_main">
        {item.nombre}
      </p>
      <p>  {item.moneda} {item.precio}&#46;00 </p>
      <div className='button__primary'>Agregar</div>
    </button>
  )
};
