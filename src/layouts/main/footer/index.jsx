import React, { useState } from 'react';
import { IconPlus, IconEmoticon, IconCamera } from '../../../assets/icons';
import Picker from 'emoji-picker-react';
import './index.scss';

const index = ({ onSendMessage, message, setMessage }) => {
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setMessage((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

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
          <div className="icon" onClick={() => setShowPicker((val) => !val)}>
            <img src={IconEmoticon} alt="icon" />
          </div>
          <div className="icon">
            <img src={IconCamera} alt="icon" />
          </div>
        </div>
      </form>
      {showPicker && <Picker pickerStyle={{ width: '100%' }} onEmojiClick={onEmojiClick} />}
    </section>
  );
};

export default index;
