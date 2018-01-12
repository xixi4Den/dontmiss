import 'babel-polyfill';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store.js';
import App from './components/app.js';

import '../styles/styles.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);