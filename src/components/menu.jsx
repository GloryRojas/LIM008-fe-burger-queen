import React, { Component, useState, useEffect } from 'react';
import firebase from '../firestore.js';
import './Menu.css';

const db = firebase.firestore();

/* export class Desayuno extends Component {
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
/*
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

const useFirebase = () => {
  const [items, setItems] = useState([]);

  useEffect( () => {
    db.collection('menu').get()
    .then(json => {
      let items = []
      json.forEach(docu => {
        items.push(docu.data());
      })
      setItems(items);
    });
  }, []);
  return items;
};


export const Desayuno = () => {
  const items = useFirebase();
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

export const Menu = () => {
  const items = useFirebase();  

  return (
    <div className='blocks'>
      { 
        items.map(item => {
          if (item.categoria === 'allDay') { 
            return ( 
              <button className='product back-dos' key={item.id} >
                <p>{item.nombre}: </p>
                <p>$ {item.precio}.00</p>               
              </button>
            )
          }
        })
      }
    </div>
  )
}
