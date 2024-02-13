import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from '@containers/Router';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './tailwind.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);

reportWebVitals();
