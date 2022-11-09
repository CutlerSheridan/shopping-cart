import './ProductPage.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  const { productId } = useParams();

  return (
    <div className="productPage-container">
      <h1>Product ID is {productId}</h1>
      <Link className="productPage-dismiss" to="..">
        X
      </Link>
    </div>
  );
};

export default ProductPage;
