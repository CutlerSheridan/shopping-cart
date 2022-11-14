import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};

export const cartReducer = (cart, action) => {
  switch (action.type) {
    case 'incremented': {
      let exists = false;
      const newCart = [...cart].map((x) => {
        if (x.id === action.id) {
          exists = true;
          return { ...x, quantity: x.quantity + 1 };
        }
        return x;
      });
      if (!exists) {
        newCart.push({
          ...catalogue.find((x) => x.id === action.id),
          quantity: 1,
        });
      }
      return newCart;
    }
    case 'decremented': {
      const newCart = [...cart]
        .map((x) => {
          if (x.id === action.id) {
            return { ...x, quantity: x.quantity - 1 };
          }
          return x;
        })
        .filter((x) => x.quantity > 0);
      return newCart;
    }
    default:
      throw Error('unknown action: ' + action.type);
  }
};

export const useCart = () => {
  return useContext(CartContext);
};
export const useCartDispatch = () => {
  return useContext(CartDispatchContext);
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
const initialCart = [];
