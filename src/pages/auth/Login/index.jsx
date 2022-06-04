import React, { useEffect } from 'react';
import { Row, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../../../layouts';
import { Card, Button, Input, PasswordInput, Separator } from '../../../components';
import './index.scss';

const index = () => {
  const [isShowPassword, setIsShowPassword] = React.useState(false);
  // const [form, setForm] = {
  //   email: '',
  //   password: ''
  // };

  useEffect(() => {
    document.title = 'Telegram App | Login Page';
  }, []);

  // const handleChange = () => {};

  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleSubmit = () => {
    // setForm('');
  };

  return (
    <AuthLayout>
      <Card>
        <section className="style__login">
          <h3 className="style__login--title">Login</h3>
          <p className="style__login--subtitle">Hi, Welcome back!</p>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Input
                type="email"
                id="email"
                name="email"
                label="email"
                style={{ marginBottom: '30px' }}
                className="style__login--textfield"
              />
            </Row>
            <Row>
              <PasswordInput
                isShowPassword={isShowPassword}
                handleClickShowPassword={handleClickShowPassword}
                handleMouseDownPassword={(e) => e.preventDefault()}
              />
            </Row>
            <Row>
              <Link to="/auth/forgot-password" className="style__login--forgot">
                Forgot Password?
              </Link>
            </Row>
            <Button isPrimary type="submit" className="style__login--button">
              Login
            </Button>
          </Form>

          <Separator title="Login with" />
          <Button isOutline type="button" icon="google">
            Google
          </Button>

          <footer className="style__login--footer">
            <p className="style__login--text">
              Don&apos;t have and account?{' '}
              <Link to="/auth/register" className="style__login--anchor">
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
