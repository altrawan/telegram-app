import React from 'react';
import { AvatarDefault } from '../../../assets/images';

const index = ({ listChat, login }) => {
  return (
    <section className="style__home--chat">
      <div className="display">
        {listChat.map((item, index) => (
          <div key={index}>
            {item.sender_id === login.id ? (
              <div className="chat me">
                <div className="box">
                  <div className="wrapper">
                    <p className="message">{item.message}</p>
                    <p className="time">15:10</p>
                  </div>
                  <img className="avatar" src={AvatarDefault} alt="Mother" />
                </div>
              </div>
            ) : (
              <div className="chat others">
                <div className="box">
                  <div className="wrapper">
                    <p className="message">{item.message}</p>
                    <p className="time">15:00</p>
                  </div>
                  <img className="avatar" src={AvatarDefault} alt="Mother" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default index;
