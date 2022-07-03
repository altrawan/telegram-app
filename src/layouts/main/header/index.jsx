import React, { useState } from 'react';
import ContentLoader from 'react-content-loader';
import { AvatarDefault } from '../../../assets/images';
import { IconPhone, IconTrash, IconMute, IconSearch } from '../../../assets/icons';
import './index.scss';

const index = ({ detailReceiver, onClick }) => {
  const [navbarPopup, setNavbarPopup] = useState(false);

  return (
    <section className="style__header">
      {detailReceiver.isLoading ? (
        <ContentLoader />
      ) : (
        <div className="style__header--wrapper" onClick={onClick}>
          <div className="style__header--avatar">
            <img
              src={`https://drive.google.com/uc?export=view&id=${detailReceiver.data.avatar}`}
              alt={detailReceiver.data.name}
              onError={(e) => {
                e.target.src = AvatarDefault;
              }}
            />
          </div>
          <div className="style__header--desc">
            <h3>{detailReceiver.data.name}</h3>
            <p className="online">Online</p>
          </div>
        </div>
      )}
      <div className="style__header--more">
        <svg
          onClick={() => {
            navbarPopup ? setNavbarPopup(false) : setNavbarPopup(true);
          }}
          className="style__header--toggler"
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
        {navbarPopup && (
          <div className="nav__popup">
            <div className="nav__popup--row">
              <img src={IconPhone} alt="Call" />
              <p>Call</p>
            </div>
            <div className="nav__popup--row">
              <img src={IconTrash} alt="Delete chat history" />
              <p>Delete chat history</p>
            </div>
            <div className="nav__popup--row">
              <img src={IconMute} alt="Mute notification" />
              <p>Mute notification</p>
            </div>
            <div className="nav__popup--row">
              <img src={IconSearch} alt="Search" />
              <p>Search</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default index;
