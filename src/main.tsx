/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { createRoot } from 'react-dom/client';
import Provider from 'react-redux/es/components/Provider';

import Loader from '@/components/loader';
import Toastr from '@/components/toastr';
import store from '@/store';

import App from './App';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Loader />
      <Toastr />
    </Provider>
  </React.StrictMode>
);
