import './Shopping.css';
import ProductCard from './ProductCard';
import { Outlet } from 'react-router-dom';
import { useCart } from '../../CartContext';

const Shopping = () => {
  const cart = useCart();
  return (
    <div className="shopping-container">
      <h1>This is Shopping</h1>
      <ProductCard productId="0" />
      <ProductCard productId="1" />
      <Outlet />

      <div className="cart">
        <h2>CART</h2>
        {cart.map((x, index) => (
          <div key={index}>
            <div>{x.name}</div>
            <div>
              ${x.price} x {x.quantity} = ${x.price * x.quantity}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopping;
