import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <div className="name-header">
      <h1>&#60; COFFEE &amp; BURGUER &#62;</h1>
    </div>
    <div className="link-router">
      <Link className="link" to="/"><i className="fas fa-sign-out-alt"></i></Link>
    </div>
  </header>
);

export default Header;
