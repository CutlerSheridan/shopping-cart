import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  // logic
};

export const cartReducer = (cart, action) => {
  switch (action.type) {
    case 'incremented': {
      let exists = false;
      const newCart = [...cart];
      newCart.map((x) => {
        if (x.id === action.id) {
          exists = true;
          return { ...x, quantity: ++x.quantity };
        }
      });
      if (!exists) {
        newCart.push({
          ...catalogue.find((x) => x.id === action.id),
          quantity: 1,
        });
      }
      return newCart;
    }
    default:
      throw Error('unknown action: ' + action.type);
  }
};

export const Item = (
  id,
  name,
  price,
  description = 'test desc',
  imgPath = 'test path'
) => {
  return { id, name, price, description, imgPath };
};
let itemCount = 0;
export const catalogue = [
  Item(itemCount++, 'pumpkin', 25),
  Item(itemCount++, 'squash', 7.5),
  Item(itemCount++, 'zucchini', 0.99),
];
