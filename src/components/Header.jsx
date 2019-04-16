import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div>
    <header className="header">
      <h1>&#60; COFFEE &amp; BURGUER &#62;</h1>
    </header>
    <nav className="router">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link" to="/">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Mesero">Mesero</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Cocinero">Cocinero</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
