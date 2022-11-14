import './ProductPage.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { catalogue } from '../../CartContext';

const ProductPage = () => {
  const { productId } = useParams();
  const product = catalogue.find((x) => x.id === +productId);

  return (
    <div className="productPage-container">
      <h1>{product.name}</h1>
      <div>${product.price.toFixed(2)}</div>
      <div>{product.description}</div>
      <Link className="productPage-dismiss" to="..">
        X
      </Link>
    </div>
  );
};

export default ProductPage;
