import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchInput, MessageCard } from '../../../components';
import {
  IconSetting,
  IconUser,
  IconPhone,
  IconBookmark,
  IconAddUser,
  IconQuestion
} from '../../../assets/icons';
import './index.scss';

const index = () => {
  const navigate = useNavigate();
  const [navbarPopup, setNavbarPopup] = useState(false);

  return (
    <div className="style__sidebar">
      <div className="style__sidebar--header">
        <h1 className="style__sidebar--logo">Telegram</h1>
        <svg
          className="style__sidebar--toggler"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            navbarPopup ? setNavbarPopup(false) : setNavbarPopup(true);
          }}>
          <rect x="6" y="8" width="22" height="3.3" rx="1.65" fill="#7E98DF" />
          <rect x="6" y="15.7" width="13.2" height="3.3" rx="1.65" fill="#7E98DF" />
          <rect x="6" y="23.4" width="22" height="3.3" rx="1.65" fill="#7E98DF" />
        </svg>
        {navbarPopup && (
          <div className="nav__popup">
            <div className="nav__popup--row" onClick={() => navigate('/profile')}>
              <img src={IconSetting} alt="Setting" />
              <p>Settings</p>
            </div>
            <div className="nav__popup--row">
              <img src={IconUser} alt="Contacts" />
              <p>Contacts</p>
            </div>
            <div className="nav__popup--row">
              <img src={IconPhone} alt="Calls" />
              <p>Calls</p>
            </div>
            <div className="nav__popup--row">
              <img src={IconBookmark} alt="Save Messages" />
              <p>Save Messages</p>
            </div>
            <div className="nav__popup--row">
              <img src={IconAddUser} alt="Invite Friends" />
              <p>Invite Friend</p>
            </div>
            <div className="nav__popup--row">
              <img src={IconQuestion} alt="Telegram FAQ" />
              <p>Telegram FAQ</p>
            </div>
            <div className="nav__popup--row">
              <img src={IconQuestion} alt="Logout" />
              <p>Logout</p>
            </div>
          </div>
        )}
      </div>
      <div className="style__sidebar--action">
        <SearchInput id="search" name="search" placeholder="Type your message..." />
        <div className="style__sidebar--plus">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect x="10" width="3" height="23" rx="1.5" fill="#7E98DF" />
            <rect
              x="23"
              y="10"
              width="3"
              height="23"
              rx="1.5"
              transform="rotate(90 23 10)"
              fill="#7E98DF"
            />
          </svg>
        </div>
      </div>
      <div className="style__sidebar--message">
        <MessageCard
          username="Thresa Webb"
          message="Why did you do that?"
          time="15:20"
          newMessage={2}
        />
        <MessageCard
          username="Thresa Webb"
          message="Why did you do that?"
          time="15:20"
          newMessage={2}
        />
        <MessageCard
          username="Thresa Webb"
          message="Why did you do that?"
          time="15:20"
          newMessage={2}
        />
        <MessageCard
          username="Thresa Webb"
          message="Why did you do that?"
          time="15:20"
          newMessage={2}
        />
        <MessageCard
          username="Thresa Webb"
          message="Why did you do that?"
          time="15:20"
          newMessage={2}
        />
        <MessageCard
          username="Thresa Webb"
          message="Why did you do that?"
          time="15:20"
          newMessage={2}
        />
        <MessageCard
          username="Thresa Webb"
          message="Why did you do that?"
          time="15:20"
          newMessage={2}
        />
        <MessageCard
          username="Thresa Webb"
          message="Why did you do that?"
          time="15:20"
          newMessage={2}
        />
        <MessageCard
          username="Thresa Webb"
          message="Why did you do that?"
          time="15:20"
          newMessage={2}
        />
      </div>
    </div>
  );
};

export default index;