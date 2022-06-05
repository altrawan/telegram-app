import React, { useEffect } from 'react';
import { MainLayout } from '../../layouts';
import { APP_NAME } from '../../helpers/env';

const index = () => {
  useEffect(() => {
    document.title = `${APP_NAME} | Home Page`;
  }, []);

  return <MainLayout />;
};

export default index;
