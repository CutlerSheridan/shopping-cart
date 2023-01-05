import './App.css';
import { Outlet } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Navbar from './components/Navbar/Navbar';
import { useEffect } from 'react';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        {/* <div>This is App</div> */}
        <Outlet />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
