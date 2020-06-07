import React from 'react';
import './button.css';

export const Button = (props) => {
  return(
    <button
      type={props.type}
      onClick={props.onClick}
      className={props.className}>
      { props.children }
    </button>
  )
};
