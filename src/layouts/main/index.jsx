import React from 'react';
import Sidebar from '../../components/organisms/Sidebar';
// import { Routes, Route } from 'react-router-dom';
import './index.scss';

const index = () => {
  return (
    <div className="style__home">
      <aside>
        <Sidebar />
      </aside>
      <div className="style__home--content">
        <div className="style__home--notfound">Please select a chat to start messaging</div>
      </div>
    </div>
  );
};

export default index;
