import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home.jsx';
import Model from './pages/model.jsx';
import './css/transitions.css';

function AppRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 700); // 
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {loading ? (
        <div className="page-loader">
       <img
src="https://i.pinimg.com/736x/8b/b1/84/8bb184b137c8858d430b5e8555795f31.jpg"
alt="Loading BMW"
className="bmw-logo"
/>

        </div>
      ) : (
        <div className="fade-wrapper">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/model" element={<Model />} />
            {/* Add more routes here */}
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
