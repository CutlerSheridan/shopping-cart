import { Link } from 'react-router-dom';
import './Navbar.css';
import { useCart } from '../../CartContext';

const Navbar = (props) => {
  return (
    <header>
      <nav>
        <Link className="nav-link" to="home">
          Home
        </Link>
        <Link className="nav-link" to="shopping">
          Shopping
        </Link>
        <Link className="nav-link" to="cart">
          Cart: {useCart().reduce((prev, x) => ++prev, 0)}
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
