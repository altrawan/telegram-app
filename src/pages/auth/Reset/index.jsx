import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { reset } from '../../../redux/actions/auth';
import { AuthLayout } from '../../../layouts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Card, Button, PasswordInput } from '../../../components';
import { toastr } from '../../../utils/toastr';
import { APP_NAME } from '../../../helpers/env';

const index = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirm, setIsShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    password: '',
    passwordConfirmation: ''
  });

  useEffect(() => {
    document.title = `${APP_NAME} - Reset Password Page`;
  }, []);

  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleClickShowConfirm = () => {
    setIsShowConfirm(!isShowConfirm);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.password || !form.passwordConfirmation) {
      Swal.fire({
        title: 'Error!',
        text: 'All field must be filled!',
        icon: 'error'
      });
    } else if (form.password !== form.passwordConfirmation) {
      Swal.fire({
        title: 'Error!',
        text: 'Password confirmation does not match password',
        icon: 'error'
      });
    } else {
      setIsLoading(true);

      reset(form, token)
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
            password: '',
            passwordConfirmation: ''
          });
          setIsLoading(false);
        });
    }
  };

  return (
    <AuthLayout>
      <Card>
        <section className="style__login">
          <h3 className="style__login--title">Reset Password</h3>
          <p className="style__login--subtitle">
            You need to change your password to activate your account
          </p>
          <form onSubmit={handleSubmit}>
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
            <div style={{ marginTop: '30px', marginBottom: '40px' }}>
              <PasswordInput
                id="passwordConfirmation"
                value={form.passwordConfirmations}
                onChange={handleChange}
                isShowPassword={isShowConfirm}
                handleClickShowPassword={handleClickShowConfirm}
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
                Reset Password
              </Button>
            )}
          </form>
        </section>
      </Card>
    </AuthLayout>
  );
};

export default index;
