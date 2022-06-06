import React from 'react';
import { IconPlus, IconEmoticon, IconCamera } from '../../../assets/icons';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import './index.scss';

const index = ({ onSendMessage, message, setMessage }) => {
  const [showEmojis, setShowEmojis] = React.useState(false);

  const addEmoji = (e) => {
    let sym = e.unified.split('-');
    let codesArray = [];
    sym.forEach((el) => codesArray.push('0x' + el));
    let emoji = String.fromCodePoint(...codesArray);
    setMessage(message + emoji);
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
          <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
            <img src={IconEmoticon} alt="icon" />
          </div>
          <div className="icon">
            <img src={IconCamera} alt="icon" />
          </div>
        </div>
        {showEmojis && (
          <div>
            <Picker onSelect={addEmoji} />
          </div>
        )}
      </form>
    </section>
  );
};

export default index;
