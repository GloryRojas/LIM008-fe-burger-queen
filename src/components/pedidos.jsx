import React, { Component } from 'react';
import './pedidos.css';
class Pedidos extends Component {
    render() {
        return ( 
            <div>
                <h5>Ingrese nombre del cliente:</h5>
                <input type='text'></input>
                <div>
                    <table>
                        <tr>
                            <th>PRODUCTO</th>
                            <th>CANTIDAD</th>
                            <th>P /UNIT $</th>
                            <th>P /TOTAL $</th>
                            <th>P /ELIMIN $</th>

                        </tr>
                        <tr>
                            <td>Hamburguesa Simple</td>
                            <td>
                                <button><i className="fas fa-minus"></i></button>
                                2
                                <button><i className="fas fa-plus"></i></button>
                            </td>
                            <td>10</td>
                            <td>20</td>
                            <td>
                                <button><i class="fas fa-times"></i></button>   
                            </td>
                        </tr>
                    </table> 
                </div>
                <button>Enviar pedido</button>
            </div>
        )
    };
};

export default Pedidos;