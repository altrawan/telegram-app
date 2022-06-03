import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const publicRoute = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Outlet />;
  }
  return <Navigate to="/" />;
};

export default publicRoute;
