import './QuantitySelector.css';
import { useCart, useCartDispatch } from '../../CartContext';

const QuantitySelector = (props) => {
  const cart = useCart();
  const dispatch = useCartDispatch();
  const productId = +props.productId;
  return (
    <div className="quantityControls">
      <button
        className="qc-stepButton app-button"
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
        className="qc-input"
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
        className="qc-stepButton app-button"
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
  );
};

export default QuantitySelector;
