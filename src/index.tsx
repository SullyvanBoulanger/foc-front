import Router from '@containers/Router';
import TokenProvider from '@utils/TokenProvider';
import UserProvider from '@utils/UserProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from '@containers/layout/Layout';
import reportWebVitals from './reportWebVitals';
import './tailwind.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <TokenProvider>
      <UserProvider refreshUrl="/auth/user">
        <Layout>
          <Router />
        </Layout>
      </UserProvider>
    </TokenProvider>
  </React.StrictMode>,
);

reportWebVitals();
