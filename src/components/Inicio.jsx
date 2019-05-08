import React from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css';

const Inicio = () => {
  return (
    <div>
      <header>
        <h1>&#60; COFFEE &amp; BURGUER &#62;</h1>
      </header>
      <div className="inicio">
        <button type="button" className="boton-router">
          <Link to="/Mesero">Mesero</Link>
        </button>
        <button type="button" className="boton-router">
          <Link to="/Cocinero">Cocinero</Link>
        </button>
      </div>
    </div>
  );
};

export default Inicio;
