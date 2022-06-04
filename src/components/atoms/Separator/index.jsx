import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Separator = ({ title }) => {
  return (
    <div className="style__separator">
      <div className="line" />
      <p className="style__separator--title">{title}</p>
      <div className="line" />
    </div>
  );
};

Separator.propTypes = {
  title: PropTypes.string.isRequired
};

Separator.defaultProps = {
  title: 'Title'
};

export default Separator;
