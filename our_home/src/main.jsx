import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Home from './assets/pages/Home.jsx';
import Shopnow from './assets/pages/Shopnow.jsx';

import './css/transitions.css';
function AppRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {loading ? (
        <div className="page-loader">
      <div className="paw-container">
  <div className="paw paw1"></div>
  <div className="paw paw2"></div>
  <div className="paw paw3"></div>
  <div className="paw paw4"></div>

</div>

        </div>
      ) : (

        
        <div className="fade-wrapper">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/shopnow" element={<Shopnow />} />
          </Routes>
        </div>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
