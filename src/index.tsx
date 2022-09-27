import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { App } from './App';
import './global.scss';
import { apiSlice } from './features/api-questions-slice';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
  </BrowserRouter>
);


