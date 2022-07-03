import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import jwtDecode from 'jwt-decode';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { getDetailUser, getDetailReceiver } from '../../redux/actions/user';
import { API_URL } from '../../helpers/env';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Drawer from 'react-modern-drawer';
import Header from './header';
import Content from './content';
import Sidebar from './sidebar';
import Footer from './footer';
import ProfileSidebar from './profile-sidebar';
import ContactSidebar from './contact-sidebar';
import 'react-modern-drawer/dist/index.css';
import 'react-notifications/lib/notifications.css';
import './index.scss';

const index = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { detailUser, detailReceiver } = useSelector((state) => state);
  const [queryParams] = useSearchParams();
  const [tab, setTab] = useState('');

  const token = localStorage.getItem('token');
  const decoded = jwtDecode(token);

  const [socketio, setSocketio] = useState(null);
  const [message, setMessage] = useState('');
  const [listChat, setListChat] = useState([]);
  const [activeReceiver, setActiveReceiver] = useState('');
  const [openMessage, setOpenMessage] = useState(false);

  // Drawer
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    dispatch(getDetailUser(decoded.id, navigate));
  }, []);

  useEffect(() => {
    setTab('');
    if (queryParams.get('tab')) {
      setTab(queryParams.get('tab'));
    }
  }, [queryParams]);

  useEffect(() => {
    const socket = io(API_URL);
    socket.on('send-message-response', (response) => {
      const receiver = localStorage.getItem('receiver');
      if (response.length) {
        if (receiver === response[0].sender_id || receiver === response[0].receiver_id) {
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
    return NotificationManager.info(message, `New chat from: ${sender}`, 5000);
  };

  const selectReceiver = (receiverId) => {
    setOpenMessage(true);
    setListChat([]);
    dispatch(getDetailReceiver(navigate, receiverId));
    setActiveReceiver(receiverId);
    localStorage.setItem('receiver', receiverId);
    socketio.emit('join-room', decoded.id);
    socketio.emit('chat-history', {
      sender: decoded.id,
      receiver: receiverId
    });
  };

  const onSendMessage = (e) => {
    e.preventDefault();

    if (!message) {
      Swal.fire('Oops!', 'Message empty', 'warning');
      return;
    }

    const data = {
      sender: decoded.id,
      receiver: activeReceiver,
      message
    };
    socketio.emit('send-message', data);

    const payload = {
      sender_id: decoded.id,
      receiver_id: activeReceiver,
      message,
      avatar: detailUser.data.avatar
    };

    setListChat([...listChat, payload]);

    setMessage('');
  };

  const onEditMessage = (newMessage, message) => {
    if (!newMessage) {
      Swal.fire('Oops!', 'Message empty', 'warning');
      return;
    }

    const data = {
      sender: message.sender_id,
      receiver: message.receiver_id,
      message: newMessage,
      id: message.id
    };

    socketio.emit('edit-message', data);

    document.getElementById('close').click();
  };

  const onDestroyMessage = (e, chat) => {
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#7e98df',
      cancelButtonColor: '#c61212',
      confirmButtonText: 'Yes, I sure'
    }).then(async (deleted) => {
      if (deleted.isConfirmed) {
        const data = {
          id: chat.id,
          sender: chat.sender_id,
          receiver: chat.receiver_id
        };
        console.log(data);
        socketio.emit('destroy-message', data);
      }
    });
  };

  const onDeleteMessage = (e, chat) => {
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#7e98df',
      cancelButtonColor: '#c61212',
      confirmButtonText: 'Yes, I sure'
    }).then(async (deleted) => {
      if (deleted.isConfirmed) {
        const data = {
          id: chat.id,
          sender: chat.sender_id,
          receiver: chat.receiver_id
        };
        console.log(data);
        socketio.emit('delete-message', data);
      }
    });
  };

  return (
    <div className="style__home">
      <aside>
        {tab === 'settings' ? (
          <ProfileSidebar />
        ) : (
          <Sidebar decoded={decoded} selectReceiver={selectReceiver} />
        )}
      </aside>
      {!openMessage ? (
        <div className="style__home--content">
          <div className="style__home--notfound">Please select a chat to start messaging</div>
        </div>
      ) : (
        <div className="style__home--main">
          <div className="style__home--room">
            <Header detailReceiver={detailReceiver} onClick={toggleDrawer} />

            <Content
              listChat={listChat}
              login={decoded}
              handleEdit={onEditMessage}
              handleDestroy={onDestroyMessage}
              handleDelete={onDeleteMessage}
            />
            {children}
            <Footer onSendMessage={onSendMessage} message={message} setMessage={setMessage} />
          </div>
        </div>
      )}
      <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
        <ContactSidebar detailReceiver={detailReceiver} />
      </Drawer>

      <NotificationContainer />
    </div>
  );
};
export default index;
