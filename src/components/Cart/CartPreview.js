import './CartPreview.css';
import { useCart, useCartDispatch } from '../../CartContext';
import { Link } from 'react-router-dom';
import { useDebugValue } from 'react';

const CartPreview = () => {
  const cart = useCart();
  const dispatch = useCartDispatch();
  return (
    <div className="cartPreview">
      <h2 className="cartPreview-heading">CART</h2>
      {cart.length > 0 ? (
        cart.map((x, index) => (
          <div className="cartPreview-item" key={index}>
            <h3>{x.name}</h3>
            <div className="cartPreview-itemCost">
              <div className="cartPreview-itemBaseCost">
                {x.quantity}
                <span className="cartPreview-itemBaseCost-hideable">
                  {' x '}
                  {x.price.toLocaleString(undefined, {
                    currency: 'USD',
                    style: 'currency',
                  })}
                </span>{' '}
              </div>
              <div className="cartPreview-itemCostTotal">
                {'= '}
                {(x.price * x.quantity).toLocaleString(undefined, {
                  currency: 'USD',
                  style: 'currency',
                })}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="cartPreview-total cartPreview-total-empty">
          - Empty cart -
        </div>
      )}
      {cart.length > 0 ? (
        <h2 className="cartPreview-total">
          Total:{'  '}
          {cart
            .reduce((prev, x) => prev + x.quantity * x.price, 0)
            .toLocaleString(undefined, {
              currency: 'USD',
              style: 'currency',
            })}
        </h2>
      ) : (
        <></>
      )}
      <Link className="cartPreview-button app-button" to="../Cart">
        Go to cart
      </Link>
      <button
        className="cartPreview-button app-button"
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
