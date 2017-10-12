import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from '../containers/Login'
import '../../css/reset.css'
import configureStore from '../store/loginconfigStore'
require('../lib/fastclick.js');
require('whatwg-fetch');
// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = require('object-assign');

window.FastClick(document.body);
const store = configureStore();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
