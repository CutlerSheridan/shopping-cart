import './App.css';
import { Outlet } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        <div>This is App</div>
        <Outlet />
      </div>
    </CartProvider>
  );
};

export default App;
