import React, { Component } from 'react';
import firebase from './firestore.js';
import './App.css';


const db = firebase.firestore();

db.collection('menu').get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} : ${doc.data().nombre} : ${doc.data().precio}`);
  });
});

class App extends Component {
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
        <div>
          { 
            items.map(item => {
              return ( 
                <div key={item.id}>
                  <h6>{item.nombre}: {item.precio}.00</h6>
                </div>
              )
            })
          }
        </div>
      )
    }
  }
}

export default App;