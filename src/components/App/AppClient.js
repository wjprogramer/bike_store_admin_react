import React from 'react';
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';

import AppLayout from './../../layout/default';
import { RoutedContent } from './../../routes';

const basePath = process.env.BASE_PATH || '/';

const AppClient = () => {
  return (
    <>
      <ReactNotification />
      
      <Router basename={ basePath }>
        <AppLayout>
          <RoutedContent />
        </AppLayout>
      </Router>
    </>
  );
}

export default hot(module)(AppClient);