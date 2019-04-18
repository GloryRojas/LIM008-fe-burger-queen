import React from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css';

const Inicio = () => {
return (
  <div>
    <header className="header">
      <h1>&#60; COFFEE &amp; BURGUER &#62;</h1>
    </header>
    <div className="inicio">
      <button className="nav-item">
        <Link className="nav-link" to="/Mesero">Mesero</Link>
      </button>
      <button className="nav-item">
        <Link className="nav-link" to="/Cocinero">Cocinero</Link>
      </button>
    </div>
  </div>
  );
};

export default Inicio;
