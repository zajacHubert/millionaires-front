import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { App } from './App';
import { apiSlice } from './features/api-questions-slice';
import './global.scss';

const isDev = process.env.NODE_ENV === 'development';
const browser = <BrowserRouter>
  <ApiProvider api={apiSlice}>
    <App />
  </ApiProvider>
</BrowserRouter>;
const hash = <HashRouter>
  <ApiProvider api={apiSlice}>
    <App />
  </ApiProvider>
</HashRouter>;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    {isDev ? browser : hash}
  </>
);


