import React, { useEffect } from 'react';
import { MainLayout } from '../../layouts';
import { AvatarDefault } from '../../assets/images';
import { APP_NAME } from '../../helpers/env';

const index = () => {
  useEffect(() => {
    document.title = `${APP_NAME} | Home Page`;
  }, []);

  return (
    <MainLayout>
      <section className="style__home--chat">
        <div className="display">
          <div className="chat others">
            <div className="box">
              <div className="wrapper">
                <p className="message">
                  Hi, son, how are you doing? Today, my father and I went to buy a car, bought a
                  cool car.
                </p>
                <p className="time">15:00</p>
              </div>
              <img className="avatar" src={AvatarDefault} alt="Mother" />
            </div>
          </div>
          <div className="chat me">
            <div className="box">
              <div className="wrapper">
                <p className="message">
                  Hi, son, how are you doing? Today, my father and I went to buy a car, bought a
                  cool car.
                </p>
                <p className="time">15:10</p>
              </div>
              <img className="avatar" src={AvatarDefault} alt="Mother" />
            </div>
          </div>
          <div className="chat others">
            <div className="box">
              <div className="wrapper">
                <p className="message">
                  Hi, son, how are you doing? Today, my father and I went to buy a car, bought a
                  cool car.
                </p>
                <p className="time">15:00</p>
              </div>
              <img className="avatar" src={AvatarDefault} alt="Mother" />
            </div>
          </div>
          <div className="chat me">
            <div className="box">
              <div className="wrapper">
                <p className="message">
                  Hi, son, how are you doing? Today, my father and I went to buy a car, bought a
                  cool car.
                </p>
                <p className="time">15:10</p>
              </div>
              <img className="avatar" src={AvatarDefault} alt="Mother" />
            </div>
          </div>
          <div className="chat others">
            <div className="box">
              <div className="wrapper">
                <p className="message">
                  Hi, son, how are you doing? Today, my father and I went to buy a car, bought a
                  cool car.
                </p>
                <p className="time">15:00</p>
              </div>
              <img className="avatar" src={AvatarDefault} alt="Mother" />
            </div>
          </div>
          <div className="chat me">
            <div className="box">
              <div className="wrapper">
                <p className="message">
                  Hi, son, how are you doing? Today, my father and I went to buy a car, bought a
                  cool car.
                </p>
                <p className="time">15:10</p>
              </div>
              <img className="avatar" src={AvatarDefault} alt="Mother" />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default index;
