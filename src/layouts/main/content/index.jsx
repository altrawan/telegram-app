import React, { useEffect } from 'react';
import moment from 'moment';
import { AvatarDefault } from '../../../assets/images';

const index = ({ listChat, login, handleDestroy }) => {
  moment.locale('id');
  const messagesEndRef = React.useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom();
  }, [listChat]);

  console.log(listChat);

  return (
    <section className="style__home--chat">
      <div className="display">
        {listChat.map((item, index) => (
          <div key={index}>
            <div className={`chat ${item.sender_id === login.id ? 'me' : 'others'}`}>
              <div className="box">
                <div className="wrapper">
                  {item.is_deleted ? (
                    <p className="message" style={{ color: '#bebebe', fontStyle: 'italic' }}>
                      This message has been deleted
                    </p>
                  ) : (
                    <p className="message">{item.message}</p>
                  )}
                  <div className={`extra ${item.sender_id === login.id ? 'me' : 'others'}`}>
                    <p className="time">{moment(item.created_at).calendar()}</p>
                    <div className={`delete ${item.sender_id === login.id ? 'me' : 'others'}`}>
                      <svg
                        onClick={(e) => handleDestroy(e, item)}
                        width="19"
                        height="23"
                        viewBox="0 0 19 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.92537 1.75627C7.98594 1.08343 8.5514 0.556152 9.24 0.556152C9.92861 0.556152 10.4941 1.08343 10.5546 1.75627H16.12C17.5559 1.75627 18.72 2.92033 18.72 4.35627C18.72 5.65638 17.7658 6.73361 16.5194 6.92578L15.7661 19.7324C15.6728 21.3181 14.3597 22.5562 12.7713 22.5562H5.94872C4.36029 22.5562 3.04718 21.3181 2.9539 19.7324L2.20057 6.92578C0.954257 6.73362 0 5.65638 0 4.35627C0 2.92033 1.16406 1.75627 2.6 1.75627H7.92537ZM16.12 3.75627H2.6C2.26863 3.75627 2 4.0249 2 4.35627C2 4.57852 2.12084 4.77254 2.3004 4.87623H4.08347H14.6366H16.4196C16.5992 4.77254 16.72 4.57852 16.72 4.35627C16.72 4.0249 16.4514 3.75627 16.12 3.75627ZM4.95045 19.615L4.20582 6.95627H14.5142L13.7696 19.615C13.7385 20.1435 13.3008 20.5562 12.7713 20.5562H5.94872C5.41925 20.5562 4.98154 20.1435 4.95045 19.615ZM6.24003 10.076C6.24003 9.50166 6.70565 9.03604 7.28003 9.03604C7.85441 9.03604 8.32003 9.50166 8.32003 10.076V17.356C8.32003 17.9304 7.85441 18.396 7.28003 18.396C6.70565 18.396 6.24003 17.9304 6.24003 17.356V10.076ZM11.44 9.03604C10.8657 9.03604 10.4 9.50166 10.4 10.076V17.356C10.4 17.9304 10.8657 18.396 11.44 18.396C12.0144 18.396 12.48 17.9304 12.48 17.356V10.076C12.48 9.50166 12.0144 9.03604 11.44 9.03604Z"
                          fill="#c61212"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <img
                  className="avatar"
                  src={`https://drive.google.com/uc?export=view&id=${item.avatar}`}
                  alt={item.sender}
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
