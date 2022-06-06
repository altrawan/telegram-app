import React from 'react';
import './index.scss';

const index = ({ id, name, placeholder, value, onChange }) => {
  return (
    <div className="style__search">
      <svg
        className="style__search--icon"
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="9.5" cy="9.5" r="8" stroke="#848484" strokeWidth="3" />
        <rect
          x="14"
          y="16.1213"
          width="3"
          height="8.74773"
          rx="1.5"
          transform="rotate(-45 14 16.1213)"
          fill="#848484"
        />
      </svg>
      <input id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default index;
