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
        <div className="app-headerContentGroup">
          <Navbar />
          {/* <div>This is App</div> */}
          <Outlet />
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
