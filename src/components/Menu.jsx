import React from 'react';
import './Menu.css';
import PropTypes from 'prop-types';
import { filterMenu } from './Utils';

/* export class Desayuno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }
  componentDidMount() {
    fetch('https://raw.githubusercontent.com/GloryRojas/LIM008-fe-burger-queen/developer/src/menu/menu.json')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      });
}
  componentDidMount() {
    db.collection('menu').get()
    .then(json => {
      let doc = []
      json.forEach(docu => {
        doc.push(docu.data());
        this.setState({
          isLoaded: true,
          items: doc
        })
      })
    });
  }

  render() {
    const { isLoaded, items } = this.state;
    if(!isLoaded) {
      return <div>Loading...</div>
    } else{
        return (
          <div className='blocks'>
            {
              items.map(item => {
                if (item.categoria === 'Desayuno') {
                  return (
                    <button className='product back-tres' key={item.id}>
                      <p >{item.nombre}:</p>
                      <p>$ {item.precio}.00</p>
                    </button>
                   )
                }
              })
            }
          </div>
      )
    }
  }
} */

const Menu = ({ callback, sendProduct, pedido, stat }) => {
  const items = filterMenu(callback(), stat);
  return (
    <div className="blocks">
      {items.map(item => (
        <button type="button" className="product back-dos" key={item.id} onClick={() => sendProduct(item, pedido)}>
          <p>
            {item.nombre}
          </p>
          <p>
            {item.precio}
          </p>
        </button>
      ))
      }
    </div>
  );
};

Menu.propTypes = {
  callback: PropTypes.func.isRequired,
  sendProduct: PropTypes.func.isRequired,
  pedido: PropTypes.arrayOf(PropTypes.object).isRequired,
  stat: PropTypes.string.isRequired,
};

export default Menu;
