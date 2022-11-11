import { Item, cartReducer, catalogue } from './CartContext';

describe('Item', () => {
  it('produces all fields from shorthand declaration', () => {
    const testItem = Item(0, 'pumpkin', 25);
    const expectedFields = ['id', 'name', 'price', 'description', 'imgPath'];
    expectedFields.forEach((field) => {
      expect(testItem[field]).toBeDefined();
    });
  });
});

describe('cartReducer', () => {
  it('adds 1 of item already in cart', () => {
    const action = {
      type: 'incremented',
      id: 1,
    };
    const testCart = [
      { ...catalogue.find((x) => x.id === action.id), quantity: 2 },
    ];

    expect(cartReducer(testCart, action)).toEqual([
      { ...catalogue[action.id], quantity: 3 },
    ]);
  });
  it('adds 1 of item to empty cart', () => {
    const testCart = [];
    const action = {
      type: 'incremented',
      id: 1,
    };

    expect(cartReducer(testCart, action)).toEqual([
      { ...catalogue.find((x) => x.id === action.id), quantity: 1 },
    ]);
  });
  it('adds 1 of new item to non-empty cart', () => {
    const action = {
      type: 'incremented',
      id: 1,
    };
    const testCart = [{ ...catalogue.find((x) => x.id === 0), quantity: 2 }];

    expect(cartReducer(testCart, action)).toEqual([
      { ...catalogue.find((x) => x.id === 0), quantity: 2 },
      { ...catalogue.find((x) => x.id === action.id), quantity: 1 },
    ]);
  });
});
