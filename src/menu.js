import React, { Component } from 'react';
import firebase from './firestore.js';
import './App.css';


const db = firebase.firestore();

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }

/*   componentDidMount() {
    fetch('https://raw.githubusercontent.com/GloryRojas/LIM008-fe-burger-queen/developer/src/menu/menu.json')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      });
  } */

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
            <div className='productos'>
                <div className='prod-desayuno'>
                    <h3>DESAYUNO</h3>
                    { 
                        items.map(item => {
                            if (item.categoria === 'Desayuno') { 
                        return ( 
                            <div key={item.id}>
                                <p>{item.nombre}: {item.precio}.00</p>
                            </div>               
                            )}
                        })
                    }
                </div>
                <div className='prod-rest'>
                    <h3>RESTO DEL DÍA</h3>
                    { 
                        items.map(item => {
                            if (item.categoria === 'allDay') { 
                        return ( 
                            <div key={item.id}>
                                <p>{item.nombre}: {item.precio}.00</p>
                            </div>               
                            )}
                        })
                    }
                </div>
            </div>

      )
    }
  }
}

export default Menu;