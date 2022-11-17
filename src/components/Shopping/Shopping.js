import './Shopping.css';
import ProductCard from './ProductCard';
import { Outlet } from 'react-router-dom';
import { useCart, catalogue } from '../../CartContext';
import CartPreview from '../Cart/CartPreview';

const Shopping = () => {
  const cart = useCart();
  return (
    <div className="shopping-outerContainer">
      <h1>Shop Our Products</h1>

      <section className="shopping-content">
        <div className="shopping-grid">
          {catalogue.map((x) => (
            <ProductCard productId={x.id} key={x.id} />
          ))}
        </div>

        <div className="shopping-cartPreviewContainer">
          <CartPreview />
        </div>
      </section>

      <Outlet />
    </div>
  );
};

export default Shopping;
