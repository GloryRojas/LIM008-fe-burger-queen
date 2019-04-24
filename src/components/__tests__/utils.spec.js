import { deleteProduct, addCount, totalPrice, filterMenu } from '../utils';

const input = [{id:1, cantidad:1, precio:3, categoria:'desayuno'},{id:2, cantidad:1, precio:2, categoria:'almu'}];
const output	= [{id:2, cantidad:1, precio:2, categoria:'almu'}];
const output1 = [{id:1, cantidad:2, precio:3, categoria:'desayuno'},{id:2, cantidad:1, precio:2, categoria:'almu'}];

// Test para funcion deleteProduct
describe('deleteProduct', () => {
  it('deberia eliminar un objeto de un array de acuerdo a su id', () => {
    expect(deleteProduct(1, input)).toEqual(output);
  })
});

// Test para funcion addCount
describe('addCount', () => {
  it('deberia sumar uno a la cantidad', () => {
    expect(addCount(1, input, '+1')).toEqual(output1)
  })
  it('deberia restar uno a la cantidad', () => {
    expect(addCount(1, output1)).toEqual(input)
  })
});

// Test para funcion totalPrice
describe('totalPrice', () => {
  it('deberia devolver el total de precios de un array', () => {
    expect(totalPrice(input)).toBe(5)
  })
})

// Test para funcion filterMenu
describe('filterMenu', () => {
  it('deberia retornar un array filtrado', () => {
    expect(filterMenu(input, 'almu')).toEqual(output)
  })
})