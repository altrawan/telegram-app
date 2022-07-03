import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import Swal from 'sweetalert2';
import { toastr } from '../../../utils/toastr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { getDetailUser, updateUser, updatePhoto } from '../../../redux/actions/user';
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.detailUser);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem('token');
  const [form, setForm] = useState({
    name: '',
    email: '',
    username: '',
    phoneNumber: '',
    bio: ''
  });

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      dispatch(getDetailUser(navigate, decoded.id));
    }
  }, []);

  useEffect(() => {
    if (data.data) {
      setForm({
        name: data.data.name,
        email: data.data.email,
        username: data.data.username,
        phoneNumber: data.data.phone_number,
        bio: data.data.bio
      });
    }
  }, [data]);

  const handleAvatar = (fileImage) => {
    if (fileImage) {
      if (
        fileImage.type === 'image/jpg' ||
        fileImage.type === 'image/jpeg' ||
        fileImage.type === 'image/png'
      ) {
        if (fileImage.size > 1048576 * 2) {
          Swal.fire({
            title: 'Error!',
            text: 'File size exceeds 2 MB',
            icon: 'error'
          });
        } else {
          const formData = new FormData();
          formData.append('image', fileImage);

          const decoded = jwtDecode(token);
          updatePhoto(formData)
            .then((res) => {
              Swal.fire({
                title: 'Success!',
                text: res.message,
                icon: 'success'
              });

              dispatch(getDetailUser(navigate, decoded.id));
            })
            .catch((err) => {
              Swal.fire({
                title: 'Error!',
                text: err.response.data.message,
                icon: 'error'
              });
            });
        }
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'File must be jpg or png',
          icon: 'error'
        });
      }
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to upload image',
        icon: 'error'
      });
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.username || !form.phoneNumber || !form.bio) {
      Swal.fire({
        title: 'Error!',
        text: 'All field must be filled!',
        icon: 'error'
      });
    } else {
      setIsLoading(true);
      const decoded = jwtDecode(token);

      updateUser(form)
        .then((res) => {
          Swal.fire({
            title: 'Success!',
            text: res.message,
            icon: 'success'
          });

          dispatch(getDetailUser(navigate, decoded.id));
        })
        .catch((err) => {
          if (err.response.data.code === 422) {
            const { error } = err.response.data;
            error.map((e) => toastr(e, 'error'));
          } else {
            Swal.fire({
              title: 'Error!',
              text: err.response.data.message,
              icon: 'error'
            });
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const handleReset = () => {
    setForm({
      name: data.data.name || '',
      email: data.data.email || '',
      username: data.data.username || '',
      phoneNumber: data.data.phone_number || '',
      bio: data.data.bio || ''
    });
    const decoded = jwtDecode(token);
    dispatch(getDetailUser(navigate, decoded.id));
  };

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
        <h3 className="style__profile--title">{data.data.username}</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <section className="style__profile--section">
          <div className="style__profile--avatar">
            <img
              src={`https://drive.google.com/uc?export=view&id=${data.data.avatar}`}
              alt={data.data.name}
              onError={(e) => {
                e.target.src = AvatarDefault;
              }}
            />
            <input type="file" name="avatar" onChange={(e) => handleAvatar(e.target.files[0])} />
          </div>
          <h3 className="style__profile--name">{data.data.name}</h3>
          <p className="style__profile--username">{data.data.username}</p>
        </section>
        <h5 className="style__profile--heading">Account</h5>
        <div className="style__profile--form">
          <p className="style__profile--sub">Name</p>
          <div>
            <input
              type="text"
              id="name"
              className="subheading"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="divider" />
        </div>
        <div className="style__profile--form">
          <p className="style__profile--sub">Email</p>
          <div>
            <input
              type="text"
              id="email"
              className="subheading"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="divider" />
        </div>
        <div className="style__profile--form">
          <p className="style__profile--sub">Phone Number</p>
          <div>
            <input
              type="text"
              id="phoneNumber"
              className="subheading"
              placeholder="Phone Number"
              value={form.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="divider" />
        </div>
        <div className="style__profile--form">
          <p className="style__profile--sub">Username</p>
          <div>
            <input
              type="text"
              id="username"
              className="subheading"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
            />
          </div>
          <div className="divider" />
        </div>
        <div className="style__profile--form">
          <p className="style__profile--sub">Bio</p>
          <div>
            <textarea
              type="text"
              id="bio"
              className="subheading"
              placeholder="Bio"
              value={form.bio}
              onChange={handleChange}></textarea>
          </div>
          <div className="divider" />
        </div>
        <div className="style__profile--action">
          {isLoading ? (
            <button type="submit" className="style__profile--button primary" disabled="disabled">
              <FontAwesomeIcon icon={faSpinner} spin />
            </button>
          ) : (
            <button type="submit" className="style__profile--button primary">
              Save
            </button>
          )}

          <button className="style__profile--button secondary" onClick={handleReset}>
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
