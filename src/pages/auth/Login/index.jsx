import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { login } from '../../../redux/actions/auth';
import { AuthLayout } from '../../../layouts';
import { Card, Button, Input, PasswordInput, Separator } from '../../../components';
import { toastr } from '../../../utils/toastr';
import './index.scss';

const index = () => {
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    document.title = 'Telegram App | Login Page';
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

      login(form)
        .then((res) => {
          Swal.fire({
            title: 'Success!',
            text: res.message,
            icon: 'success'
          });
          navigate('/');
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
          <h3 className="style__login--title">Login</h3>
          <p className="style__login--subtitle">Hi, Welcome back!</p>
          <form onSubmit={handleSubmit}>
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
                handleClickShowPassword={handleClickShowPassword}
                handleMouseDownPassword={(e) => e.preventDefault()}
              />
            </div>
            <div>
              <Link to="/forgot-password" className="style__login--forgot">
                Forgot Password?
              </Link>
            </div>
            {isLoading ? (
              <Button isPrimary type="submit" className="style__login--button" disabled="disabled">
                Loading...
              </Button>
            ) : (
              <Button isPrimary type="submit" className="style__login--button">
                Login
              </Button>
            )}
          </form>

          <Separator title="Login with" />
          <Button isOutline type="button" icon="google">
            Google
          </Button>

          <footer className="style__login--footer">
            <p className="style__login--text">
              Don&apos;t have and account?{' '}
              <Link to="/register" className="style__login--anchor">
                <span className="style__login--link">Sign Up</span>
              </Link>
            </p>
          </footer>
        </section>
      </Card>
    </AuthLayout>
  );
};

export default index;
