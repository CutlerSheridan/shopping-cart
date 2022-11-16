import { Link } from 'react-router-dom';
import './ProductCard.css';
import { useCart, catalogue } from '../../CartContext';
import QuantitySelector from '../Cart/QuantitySelector';

const ProductCard = (props) => {
  const productId = +props.productId;
  const cart = useCart();
  const item = catalogue.find((x) => x.id === productId);
  return (
    <div className="productCard">
      <h3>{item.name}</h3>
      <div className="productCard-price">${item.price.toFixed(2)}</div>
      <Link className="productCard-link" to={`${productId}`}>
        Details
      </Link>
      <QuantitySelector productId={productId} />
    </div>
  );
};

export default ProductCard;
