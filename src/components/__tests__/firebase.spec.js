import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    menu: {
      __doc__: {
        P1: {
          cantidad: 1,
          categoria: "allDay",
          id:1,
          nombre: "Hamburguesa simple",
          precio: 10,
          producto: "Hamburguesa",
        },
        P11: {
          cantidad: 1,
          categoria: "Desayuno",
          id:11,
          nombre: "Café Americano",
          precio: 5,
          producto: "Bebidas Calientes",
        },
      }
    }
  }
}

const output = [{
    cantidad: 1,
    categoria: "Desayuno",
    id:11,
    nombre: "Café Americano",
    precio: 5,
    producto: "Bebidas Calientes",
  }
];

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import { useFirebase, sendOrder } from "../../utils/Firebase";

describe('useFirebase', () => {
  it('debería ser una función', () => {
    expect(typeof useFirebase).toBe('function');
  });
})
