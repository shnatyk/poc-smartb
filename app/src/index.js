import React from 'react';
import { render } from 'react-dom';
import App from './App';
import configureStore from './configureStore';

const store = configureStore();
render(
  <App store={store} />,
  document.getElementById('root')
);
