import './Shopping.css';
import ProductCard from './ProductCard';
import { Outlet } from 'react-router-dom';
import { useCart } from '../../CartContext';
import CartPreview from '../Cart/CartPreview';

const Shopping = () => {
  const cart = useCart();
  return (
    <div className="shopping-container">
      <h1>This is Shopping</h1>
      <ProductCard productId="0" />
      <ProductCard productId="1" />
      <ProductCard productId="2" />
      <Outlet />
      <CartPreview />
    </div>
  );
};

export default Shopping;
