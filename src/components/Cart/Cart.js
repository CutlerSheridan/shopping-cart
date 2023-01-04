import './Cart.css';
import { useCart, useCartDispatch } from '../../CartContext';
import QuantitySelector from './QuantitySelector';

const Cart = () => {
  const cart = useCart();
  const dispatch = useCartDispatch();
  return (
    <div className="cart-container">
      <div className="cart-innerContainer">
        <div className="cart-headerContainer">
          <h1>Cart</h1>
          <div className="cart-headerCost">Cost</div>
        </div>
        {cart.length > 0 ? (
          cart.map((x, index) => (
            <div
              className={`cart-item ${
                index < cart.length - 1 ? 'cart-item-notLast' : ''
              }`}
              key={index}
            >
              <h3>{x.name}</h3>
              <div className="cart-itemCost">
                <div className="cart-itemBaseCost">
                  {x.price.toLocaleString(undefined, {
                    currency: 'USD',
                    style: 'currency',
                  })}{' '}
                </div>
                <div className="cart-itemCostTotal">
                  {(x.price * x.quantity).toLocaleString(undefined, {
                    currency: 'USD',
                    style: 'currency',
                  })}
                </div>
              </div>
              <div className="cart-quantitySelector">
                <QuantitySelector productId={+x.id}></QuantitySelector>
              </div>
            </div>
          ))
        ) : (
          <div className="cart-total cart-total-empty">- Empty cart -</div>
        )}
        {cart.length > 0 ? (
          <h2 className="cart-total">
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
      </div>
    </div>
  );
};

export default Cart;
