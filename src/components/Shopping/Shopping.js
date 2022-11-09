import './Shopping.css';
import ProductCard from './ProductCard';
import { Outlet } from 'react-router-dom';

const Shopping = () => {
  return (
    <div className="shopping-container">
      <h1>This is Shopping</h1>
      <ProductCard />
      <Outlet />
    </div>
  );
};

export default Shopping;
