import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = () => {
  const testId = '29j3k';
  return (
    <div className="productCard">
      <h3>Go to product</h3>
      <Link to={testId}>Click</Link>
    </div>
  );
};

export default ProductCard;
