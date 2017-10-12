// import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from '../containers/Shop'
import '../../css/reset.css'
import configureStore from '../store/shopconfigStore'
// import vconsole from 'vconsole';
require('../lib/fastclick.js');

window.FastClick(document.body);
const store = configureStore();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
