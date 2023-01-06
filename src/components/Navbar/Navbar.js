import { Link } from 'react-router-dom';
import './Navbar.css';
import { useCart } from '../../CartContext';

const Navbar = () => {
  const cart = useCart();
  const getCartText = () => {
    let result = '';
    let quantity = cart.reduce((prev, x) => prev + x.quantity, 0);
    result += quantity;
    if (quantity <= 9) {
      result += ' ';
    }
    return result;
  };
  return (
    <header>
      <nav>
        <Link className="nav-link app-button" to="home">
          Home
        </Link>
        <Link className="nav-link app-button" to="shopping">
          Shopping
        </Link>
        <Link className="nav-link app-button cartButton" to="cart">
          <div className="cartButton-prefaceText">Cart:</div>
          <div>{getCartText()}</div>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
