import React from 'react';
import './ProductSelected.css'

export const ProductSelected = (props) => {
  const { p, lessQuantity, addQuantity, deleteProduct } = props;

  return(
    <div className="product-selected" key={p.id}>
      <div className="product-selected-quantity">
        <p className="product-selected-name">{p.nombre}</p>
        <p className="product-selected-price">
          Precio Total $ {p.cantidad * p.precio}
        </p>
      </div>
      <div className="product-selected-quantity">
        <div>
          <span>Cantidad: </span>
          <button
            className="product-selected-button"
            onClick={lessQuantity}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 8L3 8" stroke="#494F66" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span>{p.cantidad}</span>
          <button
            className="product-selected-button"
            onClick={addQuantity}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 3V13" stroke="#494F66" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 8L3 8" stroke="#494F66" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className="product-selected-button"
            onClick={deleteProduct}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2 4.36364C14.2 3.61364 13.57 3 12.8 3H7.2C6.43 3 5.8 3.61364 5.8 4.36364H3V7.09091H4.4V16.6364C4.4 17.3864 5.03 18 5.8 18H14.2C14.97 18 15.6 17.3864 15.6 16.6364V7.09091H17V4.36364H14.2ZM7.2 15.2727C7.2 15.6545 6.892 15.9545 6.5 15.9545C6.108 15.9545 5.8 15.6545 5.8 15.2727V8.45455C5.8 8.07273 6.108 7.77273 6.5 7.77273C6.892 7.77273 7.2 8.07273 7.2 8.45455V15.2727ZM10.7 15.2727C10.7 15.6545 10.392 15.9545 10 15.9545C9.608 15.9545 9.3 15.6545 9.3 15.2727V8.45455C9.3 8.07273 9.608 7.77273 10 7.77273C10.392 7.77273 10.7 8.07273 10.7 8.45455V15.2727ZM14.2 15.2727C14.2 15.6545 13.892 15.9545 13.5 15.9545C13.108 15.9545 12.8 15.6545 12.8 15.2727V8.45455C12.8 8.07273 13.108 7.77273 13.5 7.77273C13.892 7.77273 14.2 8.07273 14.2 8.45455V15.2727Z" fill="#494F66"/>
            </svg>
          </button>
        </div>
        <p className="product-selected-price">
          Precio Uni. $ {p.precio}
        </p>
      </div>
    </div>
  )
};
