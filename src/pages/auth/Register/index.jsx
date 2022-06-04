import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Form } from 'react-bootstrap';
import { AuthLayout } from '../../../layouts';
import { Card, Button, Input, PasswordInput, Separator } from '../../../components';
import './index.scss';

const index = () => {
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = React.useState(false);
  // const [form, setForm] = {
  //   email: '',
  //   password: ''
  // };

  useEffect(() => {
    document.title = 'Telegram App | Register Page';
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
          <Form onSubmit={handleSubmit}>
            <Row>
              <Input
                id="name"
                name="name"
                label="Name"
                style={{ marginBottom: '30px' }}
                className="style__login--textfield"
              />
            </Row>
            <Row>
              <Input
                type="email"
                id="email"
                name="email"
                label="Email"
                style={{ marginBottom: '30px' }}
                className="style__login--textfield"
              />
            </Row>
            <Row>
              <PasswordInput
                isShowPassword={isShowPassword}
                style={{ marginBottom: '35px' }}
                handleClickShowPassword={handleClickShowPassword}
                handleMouseDownPassword={(e) => e.preventDefault()}
              />
            </Row>
            <Button isPrimary type="submit" className="style__login--button">
              Register
            </Button>
          </Form>

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
