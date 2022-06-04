import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';
import ScrollToTop from '../utils/scrollToTop';

// Auth
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

// Main
import Home from '../layouts/main';
import Profile from '../pages/Profile';
import NotFound from '../pages/404';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="home/" element={<PublicRoute />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
};
export default router;
