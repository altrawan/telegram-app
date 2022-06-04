import React, { useState } from 'react';
import { AvatarDefault } from '../../../assets/images';
import './index.scss';

const index = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);
  return (
    <section className="style__header">
      <div
        className="style__header--wrapper"
        onClick={() => {
          return showContactInfo ? setShowContactInfo(false) : setShowContactInfo(true);
        }}>
        <div className="style__header--avatar">
          <img src={AvatarDefault} alt="name" />
        </div>
        <div className="style__header--desc">
          <h3>Mother</h3>
          <p className="online">Online</p>
        </div>
      </div>
      <div className="style__header--more">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="5" height="5" rx="2.5" fill="#7E98DF" />
          <rect x="17" y="2" width="5" height="5" rx="2.5" fill="#7E98DF" />
          <rect x="2" y="16" width="5" height="5" rx="2.5" fill="#7E98DF" />
          <rect x="17" y="16" width="5" height="5" rx="2.5" fill="#7E98DF" />
        </svg>
      </div>
    </section>
  );
};

export default index;
