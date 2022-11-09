import { Link } from 'react-router-dom';
import './Navbar.css';

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
      </nav>
    </header>
  );
};

export default Navbar;
