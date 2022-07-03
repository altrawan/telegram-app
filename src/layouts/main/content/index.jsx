import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AvatarDefault } from '../../../assets/images';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  // boxShadow: 24,
  border: 0,
  p: 4,
  borderRadius: 5
};

const index = ({ listChat, login, handleEdit, handleDestroy, handleDelete }) => {
  moment.locale('id');
  const messagesEndRef = React.useRef(null);
  const [newMessage, setNewMessage] = useState('');
  const [dataMessage, setDataMessage] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom();
  }, [listChat]);

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
                      {!item.is_deleted && (
                        <svg
                          onClick={() => {
                            handleOpen();
                            setNewMessage(item.message);
                            setDataMessage(item);
                          }}
                          width="19"
                          height="23"
                          viewBox="0 0 512 512"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z"
                            fill="#7e98df"
                          />
                        </svg>
                      )}

                      <svg
                        onClick={(e) =>
                          item.is_deleted ? handleDelete(e, item) : handleDestroy(e, item)
                        }
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            style={{ fontWeight: 'bold' }}>
            Edit Message
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              id="standard-basic"
              label="New Message"
              variant="standard"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              style={{ width: '100%' }}
            />
            <div style={{ display: 'flex', gap: '15px' }}>
              <button
                type="submit"
                className="custom__button primary"
                onClick={() => handleEdit(newMessage, dataMessage)}>
                Save changes
              </button>
              <button id="close" className="custom__button secondary" onClick={handleClose}>
                Cancel
              </button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </section>
  );
};

export default index;
