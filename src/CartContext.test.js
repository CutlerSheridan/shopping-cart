import {
  Item,
  cartReducer,
  catalogue,
  handleTypedQuantity,
} from './CartContext';

describe('Item', () => {
  it('produces all fields from shorthand declaration', () => {
    const testItem = Item(0, 'pumpkin', 25);
    const expectedFields = ['id', 'name', 'price', 'description', 'imgPath'];
    expectedFields.forEach((field) => {
      expect(testItem[field]).toBeDefined();
    });
  });
});

describe('cartReducer - incremented', () => {
  it('adds 1 of item already in cart', () => {
    const action = {
      type: 'incremented',
      id: 0,
    };
    const testCart = [
      { ...catalogue.find((x) => x.id === action.id), quantity: 2 },
    ];

    expect(cartReducer(testCart, action)).toEqual([
      { ...catalogue.find((x) => x.id === action.id), quantity: 3 },
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
  it('adds 2 of item to empty cart', () => {
    const testCart = [];
    const action = {
      type: 'incremented',
      id: 1,
    };

    let newCart = cartReducer(testCart, action);
    newCart = cartReducer(newCart, action);
    expect(newCart).toEqual([
      { ...catalogue.find((x) => x.id === action.id), quantity: 2 },
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

describe('cartReducer - decremented', () => {
  it('subtracts 1 of item already with 2 in cart', () => {
    const action = {
      type: 'decremented',
      id: 1,
    };
    const testCart = [
      { ...catalogue.find((x) => x.id === action.id), quantity: 2 },
    ];

    expect(cartReducer(testCart, action)).toEqual([
      { ...catalogue.find((x) => x.id === action.id), quantity: 1 },
    ]);
  });
  it('deletes item from cart upon decrementing to 0', () => {
    const action = {
      type: 'decremented',
      id: 1,
    };
    const testCart = [
      { ...catalogue.find((x) => x.id === action.id), quantity: 1 },
    ];

    expect(cartReducer(testCart, action)).toEqual([]);
  });
});

describe('cartReducer - typed_value', () => {
  it('increases value of item already in cart', () => {
    const action = {
      type: 'typed_value',
      id: 1,
      value: 4,
    };
    const testCart = [
      { ...catalogue.find((x) => x.id === action.id), quantity: 1 },
    ];

    expect(cartReducer(testCart, action)).toEqual([
      { ...catalogue.find((x) => x.id === action.id), quantity: 4 },
    ]);
  });
  it('increases value of item not in cart', () => {
    const action = {
      type: 'typed_value',
      id: 1,
      value: 4,
    };
    const testCart = [];

    expect(cartReducer(testCart, action)).toEqual([
      { ...catalogue.find((x) => x.id === action.id), quantity: 4 },
    ]);
  });
  it('decreases value of item already in cart', () => {
    const action = {
      type: 'typed_value',
      id: 1,
      value: 4,
    };
    const testCart = [
      { ...catalogue.find((x) => x.id === action.id), quantity: 7 },
    ];

    expect(cartReducer(testCart, action)).toEqual([
      { ...catalogue.find((x) => x.id === action.id), quantity: 4 },
    ]);
  });
  it('deletes item from cart if input 0', () => {
    const action = {
      type: 'typed_value',
      id: 1,
      value: 0,
    };
    const testCart = [
      { ...catalogue.find((x) => x.id === action.id), quantity: 7 },
    ];

    expect(cartReducer(testCart, action)).toEqual([]);
  });
  it('returns empty cart if typed is not in cart', () => {
    const action = {
      type: 'typed_value',
      id: 0,
      value: -2,
    };
    const testCart = [];

    expect(cartReducer(testCart, action)).toEqual([]);
  });
});

describe('cartReducer - deleted_item', () => {
  it('fully removes item from cart', () => {
    const action = {
      type: 'deleted_item',
      id: 1,
    };
    const testCart = [
      { ...catalogue[0], quantity: 3 },
      { ...catalogue[1], quantity: 4 },
    ];

    expect(cartReducer(testCart, action)).toEqual([
      { ...catalogue[0], quantity: 3 },
    ]);
  });
});

describe('cartReducer - cleared_cart', () => {
  it('clears a cart with 2 products x5 each', () => {
    const action = {
      type: 'cleared_cart',
    };
    const testCart = [
      { ...catalogue[0], quantity: 5 },
      { ...catalogue[1], quantity: 5 },
    ];

    expect(cartReducer(testCart, action)).toEqual([]);
  });
});

describe('handleTypedQuantity', () => {
  it('rounds down from decimal', () => {
    expect(handleTypedQuantity(12.7)).toBe(12);
  });
  it('reverts num > 999 to 999', () => {
    expect(handleTypedQuantity(1240)).toBe(999);
  });
});
