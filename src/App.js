import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch('https://gloryrojas.github.io/LIM008-fe-burger-queen/src/menu/menu.json')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      });
  }

  render() {
    const { isLoaded, items } = this.state;

    if(!isLoaded) {
      return <div>Loading...</div>
    } else{
      return (
        <div>
          <ul>
            {
              items.map(item => (
                <li key={item.id}>
                  {item.categoria} => Categoria: {item.producto} | Nombre: {item.nombre} | Precio: {item.precio}
                </li>
              ))
            }
          </ul>
        </div>
      )
    }
  }
}

export default App;