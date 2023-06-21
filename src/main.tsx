import React from 'react';
import { createRoot } from 'react-dom/client';
import Provider from 'react-redux/es/components/Provider';
import { ToastContainer } from 'react-toastify';

import Loader from '@/components/loader';
import store from '@/store';

import App from './App';

import 'react-toastify/dist/ReactToastify.min.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Loader />
      <ToastContainer className="rounded" closeButton={false} hideProgressBar />
    </Provider>
  </React.StrictMode>
);
