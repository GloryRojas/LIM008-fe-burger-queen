import React from 'react';
import './Menu.css';


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

export const Desayuno = ({callback, sendProduct, pedido }) => {
  const items = callback();
  return (
    <div className='blocks'>
      { items.map(item => {
          if (item.categoria === 'Desayuno') { 
            return ( 
              <div className='product back-tres' key={item.id} onClick={() => sendProduct(item, pedido)}>
                <p >{item.nombre}:</p>
                <p>$ {item.precio}.00</p>
              </div>
            )
          }
        })
      }
    </div>
  )
}

export const Menu = (props) => {
  const items = props.callback();
  return (
    <div className="blocks">
      {items.map(item => {
        if (item.categoria === 'allDay') { 
          return ( 
            <button className='product back-dos' key={item.id} onClick={()=>props.sendProduct(item,props.pedido)}>
              <p>{item.nombre}: </p>
              <p>$ {item.precio}</p>
            </button>
            );
          }
        })
      };
    </div>
  );
};
