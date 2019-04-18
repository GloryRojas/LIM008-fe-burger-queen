import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <h1>&#60; COFFEE &amp; BURGUER &#62;</h1>
    <Link className="link" to="/"><i class="fas fa-sign-out-alt"></i></Link>
  </header>
);

export default Header;
