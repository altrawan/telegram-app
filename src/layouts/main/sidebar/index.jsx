import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { SearchInput, MessageCard } from '../../../components';
import { BulletList } from 'react-content-loader';
import { useSelector, useDispatch } from 'react-redux';
import { getListUser } from '../../../redux/actions/user';
import {
  IconSetting,
  IconUser,
  IconPhone,
  IconBookmark,
  IconAddUser,
  IconQuestion,
  IconLogout
} from '../../../assets/icons';
import './index.scss';

const index = ({ decoded, selectReceiver }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { listUser } = useSelector((state) => state);
  // const [search, setSearch] = useState('');
  const [queryParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [limitQuery, setLimitQuery] = useState('');
  const [navbarPopup, setNavbarPopup] = useState(false);
  // const [queryParams] = useSearchParams();

  useEffect(() => {
    let url = 'user?';
    setSearchQuery('');
    if (queryParams.get('search')) {
      setSearchQuery(queryParams.get('search'));
      url += `&search=${queryParams.get('search')}`;
    }
    setLimitQuery('');
    if (queryParams.get('limit')) {
      setLimitQuery(queryParams.get('limit'));
      url += `&limit=${queryParams.get('limit')}`;
    }

    dispatch(getListUser(navigate, url));
  }, [dispatch, navigate, queryParams]);

  const applyFilter = () => {
    let url = '/?';
    if (searchQuery) {
      url += `&search=${searchQuery}`;
    }
    if (limitQuery) {
      url += `&limit=${limitQuery}`;
    }
    return navigate(url);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    applyFilter();
  };

  const logout = () => {
    localStorage.clear();
    return navigate('/login');
  };

  return (
    <div className="style__sidebar">
      <div className="style__sidebar--header">
        <h1 className="style__sidebar--logo">Telegram</h1>
        <svg
          className="style__sidebar--toggler"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            navbarPopup ? setNavbarPopup(false) : setNavbarPopup(true);
          }}>
          <rect x="6" y="8" width="22" height="3.3" rx="1.65" fill="#7E98DF" />
          <rect x="6" y="15.7" width="13.2" height="3.3" rx="1.65" fill="#7E98DF" />
          <rect x="6" y="23.4" width="22" height="3.3" rx="1.65" fill="#7E98DF" />
        </svg>
        {navbarPopup && (
          <div className="nav__popup">
            <Link to="?tab=settings" style={{ textDecoration: 'none' }}>
              <div className="nav__popup--row">
                <img src={IconSetting} alt="Setting" />
                <p>Settings</p>
              </div>
            </Link>
            <div className="nav__popup--row">
              <img src={IconUser} alt="Contacts" />
              <p>Contacts</p>
            </div>
            <div className="nav__popup--row">
              <img src={IconPhone} alt="Calls" />
              <p>Calls</p>
            </div>
            <div className="nav__popup--row">
              <img src={IconBookmark} alt="Save Messages" />
              <p>Save Messages</p>
            </div>
            <div className="nav__popup--row">
              <img src={IconAddUser} alt="Invite Friends" />
              <p>Invite Friend</p>
            </div>
            <div className="nav__popup--row">
              <img src={IconQuestion} alt="Telegram FAQ" />
              <p>Telegram FAQ</p>
            </div>
            <div className="nav__popup--row" onClick={logout}>
              <img src={IconLogout} alt="Logout" />
              <p>Logout</p>
            </div>
          </div>
        )}
      </div>
      <div className="style__sidebar--action">
        <form onSubmit={handleSearch}>
          <SearchInput
            id="search"
            name="search"
            placeholder="Type your message..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        <div className="style__sidebar--plus">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect x="10" width="3" height="23" rx="1.5" fill="#7E98DF" />
            <rect
              x="23"
              y="10"
              width="3"
              height="23"
              rx="1.5"
              transform="rotate(90 23 10)"
              fill="#7E98DF"
            />
          </svg>
        </div>
      </div>
      <div className="style__sidebar--message">
        {listUser.isLoading ? (
          <BulletList />
        ) : listUser.isError ? (
          <h4>{listUser.error}</h4>
        ) : listUser.data.length ? (
          listUser.data.map(
            (item, index) =>
              item.user.id !== decoded.id && (
                <div key={index}>
                  <MessageCard
                    avatar={item.user.avatar}
                    username={item.user.name}
                    message={item.message}
                    time={item.message}
                    newMessage={0}
                    onClick={() => selectReceiver(item.user.id)}
                  />
                </div>
              )
          )
        ) : (
          <h4>User Tidak Ditemukan</h4>
        )}
      </div>
    </div>
  );
};

export default index;
