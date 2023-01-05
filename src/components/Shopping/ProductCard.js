import { Link } from 'react-router-dom';
import './ProductCard.css';
import { useCart, catalogue } from '../../CartContext';
import QuantitySelector from '../Cart/QuantitySelector';

const ProductCard = (props) => {
  const productId = +props.productId;
  const cart = useCart();
  const item = catalogue.find((x) => x.id === productId);
  // const imgPath = `../../images/${item.imgPath}`;
  const disableBodyScroll = () => {
    document.querySelector('body').classList.add('shopping-noScroll');
  };

  return (
    <div className="productCard">
      <div className="productCard-imgContainer">
        {/* <img src={`../../images/${item.imgPath}`}/> */}
        <img src={require('../../images/' + item.imgPath)} />
        {/* <img src={require('../../images/empty-bottle.webp')} /> */}
      </div>
      <h3>{item.name}</h3>
      <div className="productCard-price">
        {item.price.toLocaleString(undefined, {
          currency: 'USD',
          style: 'currency',
        })}
      </div>
      <Link
        className="productCard-link"
        to={`${productId}`}
        onClick={disableBodyScroll}
      >
        Quick view
      </Link>
      <div className="productCard-quantitySelector">
        <QuantitySelector productId={productId} offsetDelete={true} />
      </div>
    </div>
  );
};

export default ProductCard;
