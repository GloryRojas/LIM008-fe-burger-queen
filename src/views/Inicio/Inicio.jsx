import React from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css';
import {Button} from "../../components/commons/Button/Button";
import Header from "../../components/Header/Header";

const Inicio = () => {
  return (
    <div>
      <Header />
      <div className="inicio">
        <Button type="button" className="btn-secondary">
          <Link to="/Mesero">Mesero</Link>
        </Button>
        <Button type="button" className="btn-secondary">
          <Link to="/Cocinero">Cocinero</Link>
        </Button>
      </div>
    </div>
  );
};

export default Inicio;
