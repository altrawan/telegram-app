import React from 'react';
import propTypes from 'prop-types';
import { AvatarDefault } from '../../../assets/images';
import moment from 'moment';
import './index.scss';

const MessageCard = ({ avatar, username, message, time, newMessage, onClick }) => {
  return (
    <div className="style__message" onClick={onClick}>
      <div className="style__message--avatar">
        <img
          src={`https://drive.google.com/uc?export=view&id=${avatar}`}
          alt={username}
          onError={(e) => {
            e.target.src = AvatarDefault;
          }}
        />
      </div>
      <div className="style__message--content">
        <div className="style__message--text">
          <h4 className="style__message--username">{username}</h4>
          {message.length ? (
            message.map((item) => (
              <h4 key={item.id} className="style__message--chat">
                {item.message}
              </h4>
            ))
          ) : (
            <h4 className="style__message--chat">No Chat</h4>
          )}
        </div>

        <div className="style__message--number">
          {time.length ? (
            time.map((item) => (
              <p key={item.id} className="times">
                {moment(item.created_at).format('HH:mm')}
              </p>
            ))
          ) : (
            <></>
          )}

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
