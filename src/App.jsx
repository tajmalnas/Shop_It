import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductListing from './pages/ProductListing/ProductListing';
import ProductDesignPage from './pages/ProductDetailPage/ProductDesignPage';
import CartPage from './pages/CartPage/CartPage';
import 'primeicons/primeicons.css';
import './App.css';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product-listing" element={<ProductListing />} />
        <Route path="/product-design" element={<ProductDesignPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};

export default App;
