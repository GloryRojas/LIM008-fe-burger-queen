import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Menu from '../Menu/Menu';

describe('Menu', () => {
  beforeEach(cleanup);

  it('agrega item al pedido', () => {
    const callback = () => ([
      {
        id: 1, categoria: 'Desayuno',
      },
    ]);
    const pedido = [];
    const unaFuncionDistinta = (item, pedido2) => {
      expect(item).toEqual(callback()[0]);
      expect(pedido2).toEqual(pedido);
    };
    const { getByTestId } = render(<Menu callback={callback} sendProduct={unaFuncionDistinta} stat="Desayuno" pedido={pedido} />);
    const menuItem = getByTestId('1-button');
    fireEvent.click(menuItem);
  });

  it('agrega nombre del item pedido', () => {
    const callback = () => ([
      {
        id: 1, categoria: 'Desayuno', nombre: 'Glory',
      },
    ]);
    const { getByTestId } = render(<Menu callback={callback} stat="Desayuno" />);
    const label = getByTestId('1-nombre');
    expect(label.textContent).toBe('Glory');
  });
});
