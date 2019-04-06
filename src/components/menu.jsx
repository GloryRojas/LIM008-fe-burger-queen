import React, { Component } from 'react';
import firebase from '../firestore.js';
import './menu.css';

const db = firebase.firestore();

export class Desayuno extends Component {
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
          <div className='blocks'>
            { 
              items.map(item => {
                if (item.categoria === 'Desayuno') { 
                  return ( 
                    <div className='product back-tres'>
                      <p key={item.id}>{item.nombre}:</p>
                      <p>$ {item.precio}.00</p>
                    </div>
                   )
                }
              })
            }
          </div>
      )
    }
  }
}

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
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
                if (item.categoria === 'allDay') { 
                  return ( 
                    <div className='product back-dos'>
                      <p>{item.nombre}: </p>
                      <p key={item.id} >$ {item.precio}.00</p>               
                    </div>
                  )
                }
              })
            }
          </div>

      )
    }
  }
}

export const Desa = ()  =>{
  return(
    <h1>hola</h1>
  )
}