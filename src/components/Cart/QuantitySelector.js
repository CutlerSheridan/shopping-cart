import './QuantitySelector.css';
import { useCart, useCartDispatch } from '../../CartContext';
import { useEffect } from 'react';

const QuantitySelector = (props) => {
  const cart = useCart();
  const dispatch = useCartDispatch();
  const productId = +props.productId;
  const { offsetDelete } = props;

  useEffect(() => {
    const icons = Array.from(
      document.querySelectorAll('.material-symbols-outlined')
    );
    icons.forEach((icon) => {
      icon.style.opacity = 1;
    });
  }, []);

  return (
    <div className={'quantitySelector'}>
      {offsetDelete ? (
        <div className="qs-deleteButtonOffset qs-stepButton qs-deleteButton app-button material-symbols-outlined">
          close
        </div>
      ) : (
        <></>
      )}
      <button
        className="qs-stepButton app-button material-symbols-outlined"
        onClick={() => {
          dispatch({
            type: 'decremented',
            id: productId,
          });
        }}
      >
        {'chevron_left'}
      </button>
      <input
        type="number"
        className="qs-input"
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
        className="qs-stepButton app-button material-symbols-outlined"
        onClick={() => {
          dispatch({
            type: 'incremented',
            id: productId,
          });
        }}
      >
        {`chevron_right`}
      </button>
      <button
        className="qs-stepButton qs-deleteButton app-button material-symbols-outlined"
        onClick={() => {
          dispatch({
            type: 'deleted_item',
            id: productId,
          });
        }}
      >
        close
      </button>
    </div>
  );
};

export default QuantitySelector;
