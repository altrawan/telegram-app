import React from 'react';
import propTypes from 'prop-types';
import { AvatarDefault } from '../../../assets/images';
import { API_URL } from '../../../helpers/env';
import './index.scss';
// import { API_URL } from '../../../helpers/env';

const MessageCard = ({ avatar, username, message, time, newMessage, onClick }) => {
  return (
    <div className="style__message" onClick={onClick}>
      <div className="style__message--avatar">
        <img
          src={`${
            avatar ? `${API_URL}uploads/users/${avatar}` : `${API_URL}uploads/users/default.png`
          }`}
          alt={username}
          onError={(e) => {
            e.target.src = AvatarDefault;
          }}
        />
      </div>
      <div className="style__message--content">
        <div className="style__message--text">
          <h4 className="style__message--username">{username}</h4>
          <h4 className="style__message--chat">{message}</h4>
        </div>
        <div className="style__message--number">
          <p className="times">{time}</p>
          <div className="cirle-notification">
            <p>{newMessage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

MessageCard.propTypes = {
  avatar: propTypes.string,
  username: propTypes.string.isRequired,
  message: propTypes.string,
  time: propTypes.string,
  onClick: propTypes.func
};

MessageCard.defaultProps = {
  avatar: AvatarDefault,
  username: 'Username'
};

export default MessageCard;
