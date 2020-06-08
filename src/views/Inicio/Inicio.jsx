import React from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css';
import Header from "../../components/Header/Header";

const Inicio = () => {
  return (
    <div>
      <Header />
      <div className="inicio">
        <Link to="/Mesero" className="btn-secondary">
            Mesero
        </Link>
        <Link to="/Cocinero"  className="btn-secondary">
            Cocinero
        </Link>
      </div>
    </div>
  );
};

export default Inicio;
