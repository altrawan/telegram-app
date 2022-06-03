import React, { useEffect } from 'react';
import { Row, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../../../layouts';
import { Card, Input, Button } from '../../../components';
import './index.scss';

const index = () => {
  const [isShowPassword, setIsShowPassword] = React.useState('password');
  const [form, setForm] = {
    email: '',
    password: ''
  };

  useEffect(() => {
    document.title = 'Telegram App | Login Page';
  }, []);

  const handleChange = () => {};

  const handleSubmit = () => {};

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
                placeholder="Enter email"
                value={form.email}
                onChange={handleChange}
              />
            </Row>
            <Row>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
              />
            </Row>
            <Row>
              <Link to="/auth/forgot-password">Forgot password</Link>
            </Row>
            <Button primary type="submit">
              Submit
            </Button>
          </Form>

          <Separator title="Login with" />
        </section>
      </Card>
    </AuthLayout>
  );
};

export default index;
