import { Link } from 'react-router-dom';
import './ProductCard.css';
import { useCartDispatch } from '../../CartContext';

const ProductCard = () => {
  const testId = 0;
  const dispatch = useCartDispatch();
  return (
    <div className="productCard">
      <h3>Go to product</h3>
      <Link to={testId}>Click</Link>
      <div className="productCard-quantityControls">
        <button
          onClick={() => {
            dispatch({
              type: 'decremented',
              id: testId,
            });
          }}
        >
          {'<'}
        </button>
        <button
          onClick={() => {
            dispatch({
              type: 'incremented',
              id: testId,
            });
            console.log('dispatched');
          }}
        >
          {`>`}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
