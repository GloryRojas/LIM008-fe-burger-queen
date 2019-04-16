import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Header.css';

class Header extends Component {
  render() {
    return ( 
      <div>
        <header className='header'>
        "COFFEE & BURGUER"
        </header>
        <nav className='router'>
          <ul className='nav nav-pills nav-fill'>
            <li className='nav-item'>
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link" to="/Mesero">Mesero</Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link" to="/Cocinero">Cocinero</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  };
};

export default Header;
