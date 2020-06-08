import React from 'react';

export const ProductSelected = (props) => {
  const { p, lessQuantity, addQuantity, deleteProduct } = props;

  return(
    <div className="row prod" key={p.id}>
      <span className="col-4">{p.nombre}</span>
      <span className="col-4">
        <button type="button" className="sign i" onClick={lessQuantity}>
          <i className="fas fa-minus" />
        </button>
        <span>{p.cantidad}</span>
        <button type="button" className="sign i" onClick={addQuantity}>
          <i className="fas fa-plus" />
        </button>
      </span>
      <span className="col-2">{p.cantidad * p.precio}</span>
      <span className="col-2">
          <button type="button" className="sign i" onClick={deleteProduct}>
            <i className="fas fa-times" />
          </button>
        </span>
    </div>
  )
};
