import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import jwtDecode from 'jwt-decode';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../redux/actions/user';
import Header from './header';
import Content from './content';
import Sidebar from './sidebar';
import Footer from './footer';
import ProfileSidebar from './profile-sidebar';
import './index.scss';

const index = ({ children }) => {
  const location = useLocation();
  const [socketio, setSocketio] = useState(null);
  const [listChat, setListChat] = useState([]);
  const [activeReceiver, setActiveReceiver] = useState({});
  const [openMessage, setOpenMessage] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.listUser);
  const [query] = useSearchParams();
  const [querySearch, setQuerySearch] = useState('');
  const [queryLimit, setQueryLimit] = useState('');
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
    let url = 'user?';

    setQuerySearch('');
    if (query.get('search')) {
      setQuerySearch(query.get('search'));
      url += `&search=${query.get('search')}`;
    }

    setQueryLimit('');
    if (query.get('limit')) {
      setQueryLimit(query.get('limit'));
      url += `&limit=${query.get('limit')}`;
    }

    dispatch(getUser(navigate, url));
    // console.log(user.data);
    setListUsers(user.data);
    if (token) {
      setLogin(jwtDecode(token));
    }
  }, [dispatch, navigate, query]);

  const filter = () => {
    let url = '/?';

    if (querySearch) {
      url += `&search=${querySearch}`;
    }

    if (queryLimit) {
      url += `&limit=${queryLimit}`;
    }

    return navigate(url);
  };

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
    socketio.emit('chat-history', data);
  };

  const [message, setMessage] = useState('');

  const onSendMessage = (e) => {
    e.preventDefault();
    // const user = JSON.parse(localStorage.getItem('user'));
    const decoded = jwtDecode(token);
    const receiver = JSON.parse(localStorage.getItem('receiver'));
    // console.log(receiver);
    const payload = {
      sender_id: decoded.id,
      receiver_id: activeReceiver.user.id,
      sender: decoded.name,
      receiver: receiver.name,
      sender_avatar: decoded.avatar,
      receiver_avatar: activeReceiver.user.avatar,
      message
    };
    setListChat([...listChat, payload]);
    const data = {
      sender: decoded.id,
      receiver: activeReceiver.user.id,
      message
    };
    // console.log(data);
    socketio.emit('send-message', data);
    setMessage('');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    filter();
    window.location.reload();
  };

  return (
    <div className="style__home">
      <aside>
        {location.pathname === '/profile' ? (
          <ProfileSidebar />
        ) : (
          <Sidebar
            login={login}
            listUsers={listUsers}
            selectReceiver={selectReceiver}
            value={querySearch}
            onChange={(e) => setQuerySearch(e.target.value)}
            handleSearch={handleSearch}
          />
        )}
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
