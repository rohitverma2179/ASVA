import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ShopPage } from './pages/Shop/ShopPage';
import { ProductPage } from './pages/Product/ProductPage';
import { BlogPage } from './pages/Blog/BlogPage';
import { BlogInnerPage } from './components/Blog/BlogInnerPage';
import { SubscriptionPage } from './pages/Subscription/SubscriptionPage';
import { ServicesPage } from './pages/Services/ServicesPage';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/ProductPage" element={<ShopPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogInnerPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App