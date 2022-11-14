import { Link } from 'react-router-dom';
import './ProductCard.css';
import { useCart, useCartDispatch, catalogue } from '../../CartContext';

const ProductCard = (props) => {
  const productId = +props.productId;
  const dispatch = useCartDispatch();
  const cart = useCart();
  return (
    <div className="productCard">
      <h3>Go to {catalogue.find((x) => x.id === productId).name}</h3>
      <Link to={`${productId}`}>Click</Link>
      <div className="productCard-quantityControls">
        <button
          onClick={() => {
            dispatch({
              type: 'decremented',
              id: productId,
            });
          }}
        >
          {'<'}
        </button>
        <input
          type="number"
          className="productCard-input"
          onChange={(e) => {
            dispatch({
              type: 'typed_value',
              id: productId,
              value: +e.target.value,
            });
          }}
          value={(() => {
            const item = cart.find((x) => x.id === productId);
            return item ? item.quantity : '';
          })()}
          placeholder="0"
        ></input>
        <button
          onClick={() => {
            dispatch({
              type: 'incremented',
              id: productId,
            });
          }}
        >
          {`>`}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
