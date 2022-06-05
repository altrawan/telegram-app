import React from 'react';
import { IconPlus, IconEmoticon, IconCamera } from '../../../assets/icons';
import './index.scss';

const index = ({ onSendMessage, message, setMessage }) => {
  return (
    <section className="style__footer">
      <form className="style__footer--form" onSubmit={onSendMessage}>
        <input
          type="text"
          name="message"
          autoComplete="off"
          placeholder="Type your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="style__footer--action">
          <div className="icon">
            <img src={IconPlus} alt="icon" />
          </div>
          <div className="icon">
            <img src={IconEmoticon} alt="icon" />
          </div>
          <div className="icon">
            <img src={IconCamera} alt="icon" />
          </div>
        </div>
      </form>
    </section>
  );
};

export default index;
