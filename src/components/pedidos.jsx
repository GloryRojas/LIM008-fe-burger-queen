import React, { Component } from 'react';
import './Pedidos.css';

const menu = [
    {
        "id": "P1",
        "nombre": "Hamburguesa Simple",
        "categoria": "Resto del Día",
        "precio": 10,
        "producto": "Hamburguesa"
    },
    {
        "id": "P2",
        "nombre": "Hamburguesa Doble",
        "categoria": "Resto del Día",
        "precio": 15,
        "producto": "Hamburguesa"
    },
]

class Pedidos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pedido: [{
                "id": "P2",
                "nombre": "Hamburguesa Doble",
                "categoria": "Resto del Día",
                "precio": 15,
                "producto": "Hamburguesa"
            },]
        }
    }
      
    render() {
        return ( 
            <div>
                <h5>Ingrese nombre del cliente:</h5>
                <input type='text'></input>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>PRODUCTO</th>
                                <th>CANTIDAD</th>
                                <th>P /UNIT $</th>
                                <th>P /TOTAL $</th>
                                <th>P /ELIMIN $</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.pedido.map((p) => {
                                const producto = menu.find(i => i.id === p.id)
                                return (
                                    <tr>
                                        <td>{producto.nombre}</td>
                                        <td>
                                            <button><i className="fas fa-minus"></i></button>
                                            {p.count}
                                            <button><i className="fas fa-plus"></i></button>
                                        </td>
                                        <td>{producto.precio}</td>
                                        <td>{p.count * producto.precio}</td>
                                        <td>
                                            <button><i className="fas fa-times"></i></button>   
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table> 
                </div>
                <button>Enviar pedido</button>
            </div>
        )
    };
};

export default Pedidos;