import './ProductPage.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { catalogue } from '../../CartContext';
import QuantitySelector from '../Cart/QuantitySelector';

const ProductPage = () => {
  const { productId } = useParams();
  const product = catalogue.find((x) => x.id === +productId);
  const enableBodyScroll = () => {
    document.querySelector('body').classList.remove('shopping-noScroll');
  };

  return (
    <div className="productPage-outerContainer">
      <div className="productPage-innerContainer">
        <Link
          className="productPage-dismiss material-symbols-outlined"
          to=".."
          onClick={enableBodyScroll}
        >
          close
        </Link>
        <div className="productPage-imgContainer">
          <img src={require('../../images/' + product.imgPath)} />
        </div>
        <h1 className="productPage-name">{product.name}</h1>
        <div className="productPage-price">
          {product.price.toLocaleString(undefined, {
            currency: 'USD',
            style: 'currency',
          })}
        </div>
        <div className="productPage-description">{product.description}</div>
        <div className="productPage-quantitySelector">
          <QuantitySelector productId={productId} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
