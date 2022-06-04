import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../../helpers/env';
import './index.scss';

const index = () => {
  useEffect(() => {
    document.title = `${APP_NAME} | Not Found Page`;
  }, []);

  return (
    <div className="style__notfound">
      <div className="style__notfound--container">
        <div className="style__notfound--title">
          <h1>404</h1>
        </div>
        <h2>Oops, The Page you are looking for can&apos;t be found!</h2>
        <form className="style__notfound--search">
          <input type="text" placeholder="Search..." />
          <button type="button">Search</button>
        </form>
        <Link to="/">
          <span className="arrow" />
          Return To Homepage
        </Link>
      </div>
    </div>
  );
};

export default index;
