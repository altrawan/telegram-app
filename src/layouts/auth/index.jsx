import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/_layout.scss';

const AuthLayout = ({ children }) => {
  return (
    <main className="layout__auth">
      <div className="children">{children}</div>
    </main>
  );
};

export default AuthLayout;

AuthLayout.PropTypes = {
  children: PropTypes.element
};
