import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Footer from './footer';
// import { Routes, Route } from 'react-router-dom';
import './index.scss';

const index = ({ children }) => {
  return (
    <div className="style__home">
      <aside>
        <Sidebar />
      </aside>
      {/* <div className="style__home--content">
        <div className="style__home--notfound">Please select a chat to start messaging</div>
      </div> */}
      <div className="style__home--main">
        <div className="style__home--room">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default index;
