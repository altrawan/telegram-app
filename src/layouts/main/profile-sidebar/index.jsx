import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IconBell,
  IconLock,
  IconGraphic,
  IconChat,
  IconDevice,
  IconBack
} from '../../../assets/icons';
import { AvatarDefault } from '../../../assets/images';
import './index.scss';

const index = () => {
  const navigate = useNavigate();
  return (
    <div className="style__profile">
      <div className="style__profile--header">
        <svg
          onClick={() => navigate('/')}
          width="11"
          height="19"
          viewBox="0 0 11 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.20711 9.3271L9.22925 3.30496C9.24226 3.29283 9.2551 3.28044 9.26777 3.26777L9.97487 2.56066C10.5607 1.97487 10.5607 1.02513 9.97487 0.43934C9.38909 -0.146447 8.43934 -0.146447 7.85355 0.43934L7.52579 0.767105L7.52513 0.766442L0.732233 7.55933C-0.244077 8.53564 -0.244079 10.1186 0.732233 11.0949L7.14646 17.5091L7.52513 17.8878L7.85357 18.2162C8.43936 18.802 9.3891 18.802 9.97489 18.2162C10.5607 17.6304 10.5607 16.6807 9.97489 16.0949L9.64645 15.7664L9.26778 15.3878C9.26635 15.3863 9.2649 15.3849 9.26346 15.3835L3.20711 9.3271Z"
            fill="#7E98DF"
          />
        </svg>
        <h3 className="style__profile--title">@altrawan</h3>
      </div>
      <form>
        <section className="style__profile--section">
          <div className="style__profile--avatar">
            <img src={AvatarDefault} alt="name" />
            <input type="file" name="avatar" />
          </div>
          <h3 className="style__profile--name">Gloria Mckinney</h3>
          <p className="style__profile--username">@wdlam</p>
        </section>
        <h5 className="style__profile--heading">Account</h5>
        <div className="style__profile--form">
          <p className="style__profile--sub">Muhammad Alif</p>
          <div>
            <input type="text" id="name" className="subheading" placeholder="Name" />
          </div>
          <div className="divider" />
        </div>
        <div className="style__profile--form">
          <p className="style__profile--sub">muhammadalif@gmail.com</p>
          <div>
            <input type="text" id="name" className="subheading" placeholder="Email" />
          </div>
          <div className="divider" />
        </div>
        <div className="style__profile--form">
          <p className="style__profile--sub">08123456789</p>
          <div>
            <input type="text" id="name" className="subheading" placeholder="Phone Number" />
          </div>
          <div className="divider" />
        </div>
        <div className="style__profile--form">
          <p className="style__profile--sub">@altrawan</p>
          <div>
            <input type="text" id="name" className="subheading" placeholder="Username" />
          </div>
          <div className="divider" />
        </div>
        <div className="style__profile--form">
          <p className="style__profile--sub">I&apos;m Senior Frontend Developer from Microsoft</p>
          <div>
            <textarea type="text" id="name" className="subheading" placeholder="Bio"></textarea>
          </div>
          <div className="divider" />
        </div>
        <div className="style__profile--action">
          <button type="submit" className="style__profile--button primary">
            Save
          </button>
          <button type="submit" className="style__profile--button secondary">
            Cancel
          </button>
        </div>
      </form>
      <section className="style__profile--setting">
        <h5 className="style__profile--heading">Settings</h5>
        <div className="setting-items">
          <div className="row">
            <img src={IconBell} alt="icon" />
            <p className="setting-items--label">Notification and Sounds</p>
            <img src={IconBack} alt="icon" className="setting-items--back" />
          </div>
          <div className="row">
            <img src={IconLock} alt="icon" />
            <p className="setting-items--label">Privacy and Security</p>
            <img src={IconBack} alt="icon" className="setting-items--back" />
          </div>
          <div className="row">
            <img src={IconGraphic} alt="icon" />
            <p className="setting-items--label">Data and Storage</p>
            <img src={IconBack} alt="icon" className="setting-items--back" />
          </div>
          <div className="row">
            <img src={IconChat} alt="icon" />
            <p className="setting-items--label">Chat Settings</p>
            <img src={IconBack} alt="icon" className="setting-items--back" />
          </div>
          <div className="row">
            <img src={IconDevice} alt="icon" />
            <p className="setting-items--label">Devices</p>
            <img src={IconBack} alt="icon" className="setting-items--back" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
