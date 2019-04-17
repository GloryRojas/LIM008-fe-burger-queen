export const deleteProduct = (id, arr) => {
  return arr.filter(a => a !== (arr.find(e => e.id === id)));
};

export const addCount = (id, menu, option) => {
  const newArr = [...menu];
  const index = newArr.indexOf(newArr.find(e => e.id === id));
  const elem = {
    ...newArr[index],
  };
  elem.cantidad += (option ? 1 : -1);
  newArr[index] = elem;
  return newArr;
};

export const totalPrice = arr => arr.map(a => a.cantidad * a.precio).reduce((a, b) => a + b, 0);

export const filterMenu = (arr, type) => arr.filter(e => e.categoria === type);
