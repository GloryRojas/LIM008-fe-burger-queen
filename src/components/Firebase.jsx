import { useState, useEffect } from 'react';
import firebase from '../firestore';

const db = firebase.firestore();

export const useFirebase = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    db.collection('menu').get()
      .then(json => {
        let items = [];
        json.forEach(docu => {
          items.push(docu.data());
        })
        setItems(items);
      });
  }, []);
  return items;
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
