import React, { useEffect } from 'react';
import moment from 'moment';
import { AvatarDefault } from '../../../assets/images';
import { API_URL } from '../../../helpers/env';

const index = ({ listChat, login }) => {
  moment.locale('id');
  const messagesEndRef = React.useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom();
  }, [listChat]);

  // console.log(listChat);
  // console.log(login.id);

  return (
    <section className="style__home--chat">
      <div className="display">
        {listChat.map((item, index) => (
          <div key={index}>
            <div className={`chat ${item.sender_id === login.id ? 'me' : 'others'}`}>
              <div className="box">
                <div className="wrapper">
                  <p className="message">{item.message}</p>
                  <p className="time">{moment(item.created_at).calendar()}</p>
                </div>
                <img
                  className="avatar"
                  src={
                    item.sender_id === login.id
                      ? `${
                          item.sender_avatar
                            ? `${API_URL}uploads/users/${item.sender_avatar}`
                            : `${API_URL}uploads/users/default.png`
                        }`
                      : `${
                          item.receiver_avatar
                            ? `${API_URL}uploads/users/${item.receiver_avatar}`
                            : `${API_URL}uploads/users/default.png`
                        }`
                  }
                  alt="Mother"
                  onError={(e) => {
                    e.target.src = AvatarDefault;
                  }}
                />
              </div>
            </div>
            <div ref={messagesEndRef} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default index;
