import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../redux/actions/user';
import Header from './header';
import Content from './content';
import Sidebar from './profile-sidebar';
import Footer from './footer';
import './index.scss';

const index = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [socketio, setSocketio] = useState(null);
  const [listChat, setListChat] = useState([]);
  const [activeReceiver, setActiveReceiver] = useState({});
  const [openMessage, setOpenMessage] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const socket = io(`http://localhost:4000/`);
    // console.log(socket);
    socket.on('send-message-response', (response) => {
      const receiver = JSON.parse(localStorage.getItem('receiver'));
      if (
        receiver.user.id === response[0].sender_id ||
        receiver.user.id === response[0].receiver_id
      ) {
        setListChat(response);
      }
    });
    setSocketio(socket);
  }, []);

  const [listUsers, setListUsers] = useState([]);
  const [login, setLogin] = useState({});
  useEffect(() => {
    setIsLoading(true);
    dispatch(getUser(navigate, 100));
    setListUsers(user.data);
    if (token) {
      setLogin(jwtDecode(token));
    }
    setIsLoading(false);
  }, []);

  const selectReceiver = (item) => {
    setOpenMessage(true);
    setListChat([]);
    setActiveReceiver(item);
    localStorage.setItem('receiver', JSON.stringify(item));
    socketio.emit('join-room', login);
    const data = {
      sender: login.id,
      receiver: item.user.id
    };
    console.log(login);
    console.log(item.user);
    socketio.emit('chat-history', data);
  };

  const [message, setMessage] = useState('');

  const onSendMessage = (e) => {
    e.preventDefault();
    // const user = JSON.parse(localStorage.getItem('user'));
    const decoded = jwtDecode(token);
    const receiver = JSON.parse(localStorage.getItem('receiver'));
    const payload = {
      sender: login.fullname,
      receiver: receiver.fullname,
      message
    };
    setListChat([...listChat, payload]);
    const data = {
      sender: decoded.id,
      receiver: activeReceiver.user.id,
      message
    };
    console.log(data);
    socketio.emit('send-message', data);
    setMessage('');
  };

  // console.log(listChat);

  return (
    <div className="style__home">
      <aside>
        <Sidebar
          isLoading={isLoading}
          login={login}
          listUsers={listUsers}
          selectReceiver={selectReceiver}
        />
      </aside>

      {!openMessage ? (
        <div className="style__home--content">
          <div className="style__home--notfound">Please select a chat to start messaging</div>
        </div>
      ) : (
        <div className="style__home--main">
          <div className="style__home--room">
            <Header activeReceiver={activeReceiver} />

            <Content listChat={listChat} login={login} />
            {children}

            <Footer onSendMessage={onSendMessage} message={message} setMessage={setMessage} />
          </div>
        </div>
      )}
    </div>
  );
};

export default index;
