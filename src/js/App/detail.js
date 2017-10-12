/**
 * Created by Administrator on 2017/3/19.
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from '../containers/detail/index'
import '../../css/reset.css'
import configureStore from '../store/detailconfigStore'
require('whatwg-fetch');

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = require('object-assign');

const store = configureStore();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
