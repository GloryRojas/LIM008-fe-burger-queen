import MockFirebase from 'mock-cloud-firestore';
import { useFirebase } from '../src/components/Firebase';

const fixtureData = {
  __collection__: {
    menu: {
      __doc__: {
        P1: {
          cantidad: 1,
          categoria: 'allDay', 
          id : 1,
          nombre: 'Hamburguesa Simple',
          precio: 10,
          producto: 'Hamburguesa'
        },
        P2: {
            cantidad: 1,
            categoria: 'allDay', 
            id : 2,
            nombre: 'Hamburguesa Doble',
            precio: 15,
            producto: 'Hamburguesa'
        },
      }
    }
  }
}

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });


describe ('useFirebase', () => {
    it('debería ser una función', () => {
        expect(typeof useFirebase).toBe('function');
    })
})