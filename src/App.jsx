import React, { useState, useEffect } from 'react';
import './index.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BestSale from './pages/BestSale';
import LuxuryMonogramGallery from './pages/Galeria';
import Loader from './components/Loader';
import GoogleLoader from './components/GoogleLoader';
import { AnimatePresence, motion } from 'framer-motion';

const App = () => {
  const [initialLoaderDone, setInitialLoaderDone] = useState(false);
  const [showGoogleLoader, setShowGoogleLoader] = useState(false);
  const location = useLocation();

  // Loader inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoaderDone(true);
    }, 2000); // Ajuste conforme sua animação
    return () => clearTimeout(timer);
  }, []);

  // GoogleLoader após o Loader e a cada troca de rota
  useEffect(() => {
    if (initialLoaderDone) {
      setShowGoogleLoader(true);
      const timer = setTimeout(() => {
        setShowGoogleLoader(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [location, initialLoaderDone]);

  if (!initialLoaderDone) return <Loader />;

  return (
    <>
      <AnimatePresence mode="wait">
        {showGoogleLoader ? (
          <motion.div
            key="google-loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <GoogleLoader />
          </motion.div>
        ) : (
          // Conteúdo sem animação visível (para evitar blur nos textos)
          <div
            key="main-content"
            className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]"
          >
            <ToastContainer />
            <Navbar />
            <SearchBar />
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/bestsellers" element={<BestSale />} />
              <Route path="/gallery" element={<LuxuryMonogramGallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/place-order" element={<PlaceOrder />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
