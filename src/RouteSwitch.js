import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './components/Home/Home';
import Shopping from './components/Shopping/Shopping';
import ProductPage from './components/Shopping/ProductPage';

const RouteSwitch = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="shopping" element={<Shopping />}>
            <Route path=":productId" element={<ProductPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default RouteSwitch;
