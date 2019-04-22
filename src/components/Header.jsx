import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
      <span className="name-header">
        &#60; COFFEE &amp; BURGUER &#62;
      </span>
      <span className="link-router">
        <Link className="link" to="/"><i className="fas fa-sign-out-alt"></i></Link>
      </span> 
  </header>
);

export default Header;
