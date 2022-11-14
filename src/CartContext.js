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
    case 'typed_value': {
      const { value } = action;
      let exists = false;
      const newCart = [...cart]
        .map((x) => {
          if (x.id === action.id) {
            exists = true;
            return { ...x, quantity: Math.round(value) };
          }
          return x;
        })
        .filter((x) => x.quantity > 0);
      if (!exists && value > 0) {
        newCart.push({
          ...catalogue.find((x) => x.id === action.id),
          quantity: Math.round(value),
        });
      }
      return newCart;
    }
    case 'deleted_item': {
      return cartReducer(cart, {
        type: 'typed_value',
        id: action.id,
        value: 0,
      });
    }
    case 'cleared_cart': {
      return [];
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
  Item(itemCount++, 'pumpkin', 25, 'pumpkin description'),
  Item(itemCount++, 'squash', 7.5, 'squash description'),
  Item(itemCount++, 'zucchini', 0.99, 'zucchini description'),
];
const initialCart = [];
