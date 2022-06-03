import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Card = ({ children }) => {
  return <div className="style__card">{children}</div>;
};

export default Card;

Card.PropTypes = {
  children: PropTypes.element
};
