import { useState, useEffect } from 'react';
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

  export const deleteProduct = (id, arr, setMenu) => {
   let filt = arr.filter(a => a !== (arr.find(e => e.id === id )));
    setMenu(filt);
    console.log(filt);
  };

  export const addCount = (id, arr, setMenu, option) => {
    let index = arr.indexOf(arr.find(e => e.id === id));
    option ?
    arr[index].cantidad -= 1 : 
    arr[index].cantidad += 1;
    let newArr = [...arr];
    setMenu(newArr);
    console.log(newArr);
  };

  export const saludo = (arr) => {
   let suma = (arr.map((a) => a.cantidad * a.precio)).reduce((a,b) => a+b , 0);
   return suma;
  };


