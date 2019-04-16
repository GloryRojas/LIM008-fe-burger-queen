export const deleteProduct = (p, arr, setMenu) => {
  const product = { ...p };
  const filt = arr.filter(a => a !== (arr.find(e => e.id === product.id)));
  product.cantidad = 1;
  setMenu(filt);
};

export const addCount = (id, menu, setMenu, option) => {
  const newArr = menu.slice();
  const index = newArr.indexOf(newArr.find(e => e.id === id));
  option ?
  newArr[index].cantidad += 1:
  newArr[index].cantidad -= 1;
  setMenu(newArr);
  console.log(menu, newArr);
};

export const totalPrice = arr => arr.map(a => a.cantidad * a.precio).reduce((a, b) => a + b, 0);

export const cancel = setMenu => setMenu([]);
