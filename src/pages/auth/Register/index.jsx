import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { register } from '../../../redux/actions/auth';
import { AuthLayout } from '../../../layouts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Card, Button, Input, PasswordInput, Separator } from '../../../components';
import { toastr } from '../../../utils/toastr';
import { APP_NAME } from '../../../helpers/env';
import './index.scss';

const index = () => {
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    document.title = `${APP_NAME} - Register Page`;
  }, []);

  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      Swal.fire({
        title: 'Error!',
        text: 'All field must be filled!',
        icon: 'error'
      });
    } else {
      setIsLoading(true);

      register(form)
        .then((res) => {
          Swal.fire({
            title: 'Success!',
            text: res.message,
            icon: 'success'
          });
          navigate('/login');
        })
        .catch((err) => {
          if (err.response.data.code === 422) {
            const error = err.response.data.error;
            error.map((item) => toastr(item, 'error'));
          } else {
            Swal.fire({
              title: 'Error!',
              text: err.response.data.message,
              icon: 'error'
            });
          }
        })
        .finally(() => {
          setForm({
            name: '',
            email: '',
            password: ''
          });
          setIsLoading(false);
        });
    }
  };

  return (
    <AuthLayout>
      <Card>
        <section className="style__login">
          <div className="style__login--header">
            <svg
              onClick={() => {
                return navigate('/login');
              }}
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
            <h3 className="style__login--title">Register</h3>
          </div>
          <p className="style__login--subtitle">Let&apos;s create your account!</p>
          <form onSubmit={handleSubmit}>
            <div>
              <Input
                id="name"
                name="name"
                label="Name"
                style={{ marginBottom: '30px' }}
                className="style__login--textfield"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <Input
                type="email"
                id="email"
                name="email"
                label="Email"
                style={{ marginBottom: '30px' }}
                className="style__login--textfield"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <PasswordInput
                id="password"
                value={form.password}
                onChange={handleChange}
                isShowPassword={isShowPassword}
                style={{ marginBottom: '35px' }}
                handleClickShowPassword={handleClickShowPassword}
                handleMouseDownPassword={(e) => e.preventDefault()}
              />
            </div>
            {isLoading ? (
              <Button isPrimary type="submit" className="style__login--button" disabled="disabled">
                <FontAwesomeIcon icon={faSpinner} spin />
                Loading...
              </Button>
            ) : (
              <Button isPrimary type="submit" className="style__login--button">
                Register
              </Button>
            )}
          </form>

          <Separator title="Register with" />
          <Button isOutline type="button" icon="google">
            Google
          </Button>
        </section>
      </Card>
    </AuthLayout>
  );
};

export default index;
