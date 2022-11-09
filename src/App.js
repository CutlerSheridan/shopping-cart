import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div>This is App</div>
      <Outlet />
    </div>
  );
};

export default App;
