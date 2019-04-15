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

export const deleteProduct = (p, arr, setMenu) => {
  let filt = arr.filter(a => a !== (arr.find(e => e.id === p.id )));
  p.cantidad = 1;
  setMenu(filt);
};

export const addCount = (obj, arr, setMenu, option) => {
  if(option){
    obj.cantidad += 1;
    setMenu([...arr]);
  } else {
    obj.cantidad -= 1;
    setMenu([...arr]);
  }
};

export const totalPrice = (arr) => {
  let suma = (arr.map((a) => a.cantidad * a.precio)).reduce((a,b) => a+b ,0);
  return suma;
};

export const cancel = (setMenu) => {
  setMenu([]);
};

export const sendOrder = (pedido, total, name, setMenu) => {
  setMenu([]);
  return firebase.firestore().collection('pedidos').add({
    Cliente: name,
    Hora: Date(),
    Productos: pedido,
    Total: total,
    });
};
   

