import './CartPreview.css';
import { useCart, useCartDispatch } from '../../CartContext';

const CartPreview = () => {
  const cart = useCart();
  const dispatch = useCartDispatch();
  return (
    <div className="cartPreview">
      <h2 className="cartPreview-heading">CART</h2>
      {cart.length > 0
        ? cart.map((x, index) => (
            <div className="cartPreview-item" key={index}>
              <h3>{x.name}</h3>
              <div>
                ${x.price.toFixed(2)} x {x.quantity} = $
                {(x.price * x.quantity).toFixed(2)}
              </div>
            </div>
          ))
        : '- Empty -'}
      {cart.length > 0 ? (
        <h2 className="cartPreview-total">
          TOTAL: $
          {cart.reduce((prev, x) => prev + x.quantity * x.price, 0).toFixed(2)}
        </h2>
      ) : (
        <></>
      )}
      <button
        onClick={() => {
          dispatch({
            type: 'cleared_cart',
          });
        }}
      >
        Clear cart
      </button>
    </div>
  );
};

export default CartPreview;
