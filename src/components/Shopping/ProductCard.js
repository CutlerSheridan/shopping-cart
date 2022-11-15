import { Link } from 'react-router-dom';
import './ProductCard.css';
import { useCart, catalogue } from '../../CartContext';
import QuantitySelector from '../Cart/QuantitySelector';

const ProductCard = (props) => {
  const productId = +props.productId;
  const cart = useCart();
  return (
    <div className="productCard">
      <h3>Go to {catalogue.find((x) => x.id === productId).name}</h3>
      <Link to={`${productId}`}>Details</Link>
      <QuantitySelector productId={productId} />
    </div>
  );
};

export default ProductCard;
