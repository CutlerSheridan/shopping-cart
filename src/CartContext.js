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
            return { ...x, quantity: handleTypedQuantity(value) };
          }
          return x;
        })
        .filter((x) => x.quantity > 0);
      if (!exists && value > 0) {
        newCart.push({
          ...catalogue.find((x) => x.id === action.id),
          quantity: handleTypedQuantity(value),
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
export const handleTypedQuantity = (quantity) => {
  let result = quantity;
  if (result > 99) {
    return 99;
  }
  if (result < 0) {
    return 0;
  }
  while (result % 1 !== 0) {
    result = (result * 10 - 1) / 10;
  }
  return result;
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
// export const catalogue = [
//   Item(itemCount++, 'pumpkin', 25, 'pumpkin description'),
//   Item(itemCount++, 'squash', 7.5, 'squash description'),
//   Item(itemCount++, 'zucchini', 0.99, 'zucchini description'),
//   Item(itemCount++, 'apple', 1.5, 'apple description'),
// ];
export const catalogue = [
  Item(
    itemCount++,
    'empty bottle',
    4,
    "The classic.  A simple, empty glass bottle.  A staple in any potion-maker's toolset.",
    'empty-bottle.webp'
  ),
  Item(
    itemCount++,
    'Set of bottles',
    10,
    "Three empty bottles, for when you realize your stock is running low.  Don't kid yourself... you know you'll use them eventually.",
    'three-bottles.png'
  ),
  Item(
    itemCount++,
    'Mermaid tears',
    775,
    "These tears are brimming with magical potential.  Used in all sorts of potions for centuries, just one or two drops can augment the strength of a potion or change its effects entirely.  Yes they're expensive, but do you know how hard these things are to collect?",
    'mermaid-tears.png'
  ),
  Item(
    itemCount++,
    'Druidic balm',
    63,
    'No one is quite sure what this does, but the druids swear by it.',
    'druidic-balm.png'
  ),
  Item(
    itemCount++,
    'Love potion',
    226,
    'Difficult to brew and banned in many regions, demand remains high for this tantalizing potion.  Use responsibly.',
    'love-potion.png'
  ),
  Item(
    itemCount++,
    'Bulbadox juice',
    47,
    "Yes, we know it's not filled all the way up—that's because the vapor is the best part.  Pull the stopper and take a whiff next time your brain needs a little kick-start.  You won't know anything you didn't already, but it will supercharge your memory.  Remember what you had for breakfast a year ago today?  You will now!",
    'bulbadox-juice.png'
  ),
];
const initialCart = [];
