import React, { Component } from 'react';
import './pedidos.css';
class Pedidos extends Component {
    render() {
        return ( 
            <div>
                <p>Ingrese nombre del cliente:</p>
                <input type='text'></input>
                <div>Aqui van los pedidos</div>
                <button>Enviar pedido</button>
            </div>
        )
    };
};

export default Pedidos;