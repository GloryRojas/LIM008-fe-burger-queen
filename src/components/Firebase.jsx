import React, { useState, useEffect } from 'react';
import firebase from '../firestore.js';

const db = firebase.firestore();
export const useFirebase = () => {
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
  
  export const sendProduct = () => {
    console.log('hola');
  }