import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App1 from './containers/App1'
import configureStore from './store/chatconfigureStore.js'
const store = configureStore();
render(
  <Provider store={store}>
    <App1 />
  </Provider>,
  document.getElementById('root')
)
