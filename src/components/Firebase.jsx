import { useState, useEffect } from 'react';
import firebase from '../firestore';

const db = firebase.firestore();

export const useFirebase = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    db.collection('menu').get()
      .then((e) => {
        const products = [];
        e.forEach((doc) => {
          products.push(doc.data());
        });
        setItems(products);
      });
  }, []);
  return items;
};

export const sendOrder = (pedido, total, name, setMenu, setName) => {
  setMenu([]);
  setName('');
  return firebase.firestore().collection('pedidos').add({
    Cliente: name,
    Hora: Date(),
    Productos: pedido,
    Total: total,
  });
};
