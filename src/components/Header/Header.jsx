import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => (
  <header className="header">
      <span className="main-title">
        VEGIFRUTS
      </span>
      { props.back &&
        <span className="icon-back">
          <Link className="link" to="/"><i className="fas fa-sign-out-alt"></i></Link>
        </span>
      }
  </header>
);

export default Header;
