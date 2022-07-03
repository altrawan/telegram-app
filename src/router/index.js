import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';
import ScrollToTop from '../utils/scrollToTop';

// Auth
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Forgot from '../pages/auth/Forgot';
import Reset from '../pages/auth/Reset';

// Main
import Home from '../pages/Home';
import NotFound from '../pages/404';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot" element={<Forgot />} />
          <Route path="reset/:token" element={<Reset />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
};
export default router;
