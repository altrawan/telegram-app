import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import jwtDecode from 'jwt-decode';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { getUser } from '../../redux/actions/user';
import { API_URL } from '../../helpers/env';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Header from './header';
import Content from './content';
import Sidebar from './sidebar';
import Footer from './footer';
import ProfileSidebar from './profile-sidebar';
import 'react-notifications/lib/notifications.css';
import './index.scss';

const index = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem('token');
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
  // const [login, setLogin] = useState({});
  const decoded = jwtDecode(token);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const socket = io(API_URL);
    socket.on('send-message-response', (response) => {
      const receiver = JSON.parse(localStorage.getItem('receiver'));
      if (response.length) {
        if (
          receiver.user.id === response[0].sender_id ||
          receiver.user.id === response[0].receiver_id
        ) {
          setListChat(response);
        } else {
          createNotification(
            response[response.length - 1].sender,
            response[response.length - 1].message
          );
        }
      }
    });
    setSocketio(socket);
  }, []);

  const createNotification = (sender, message) => {
    return NotificationManager.info(message, `New chat from: ${sender}`, 3000);
  };

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
    // if (token) {
    //   setLogin(jwtDecode(token));
    // }
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
    // socketio.emit('join-room', login);
    socketio.emit('join-room', decoded);
    const data = {
      sender: decoded.id,
      receiver: item.user.id
    };
    socketio.emit('chat-history', data);
  };

  const onSendMessage = (e) => {
    e.preventDefault();
    const decoded = jwtDecode(token);
    const receiver = JSON.parse(localStorage.getItem('receiver'));
    const payload = {
      sender_id: decoded.id,
      receiver_id: receiver.user.id,
      sender: decoded.name,
      receiver: receiver.user.name,
      sender_avatar: decoded.avatar,
      receiver_avatar: receiver.user.avatar,
      type: 0,
      message
    };
    setListChat([...listChat, payload]);
    const data = {
      sender: decoded.id,
      receiver: activeReceiver.user.id,
      type: 0,
      message
    };
    socketio.emit('send-message', data);
    setMessage('');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    filter();
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    const payload = {
      id,
      sender: decoded.id,
      receiver: activeReceiver.user.id
    };
    Swal.fire({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this experience',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#7e98df',
      cancelButtonColor: '#c61212',
      confirmButtonText: 'Yes, I sure'
    }).then(async (deleted) => {
      if (deleted.isConfirmed) {
        socketio.emit('delete-message', payload);
        setListChat([...listChat, payload]);
      }
    });
  };

  return (
    <div className="style__home">
      <aside>
        {location.pathname === '/profile' ? (
          <ProfileSidebar />
        ) : (
          <Sidebar
            login={decoded}
            listUsers={user}
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

            <Content listChat={listChat} login={decoded} handleDelete={handleDelete} />
            {children}

            <Footer onSendMessage={onSendMessage} message={message} setMessage={setMessage} />
          </div>
        </div>
      )}
      <NotificationContainer />
    </div>
  );
};

export default index;
