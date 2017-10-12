/**
 * Created by Administrator on 2017/3/19.
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from '../containers/shopcart/index'
import Address from '../containers/shopcart/address'
import AddressADD from '../containers/shopcart/addressadd'
import '../../css/reset.css'
import configureStore, { history } from '../store/shopcartconfigStore'
import { Router, Route, IndexRoute } from 'react-router'
require('../lib/fastclick.js');
require('whatwg-fetch');

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = require('object-assign');

window.FastClick(document.body);
const store = configureStore();
render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} extra={true}/>
      <Route path="view" component={Address} />
      <Route path="/address/add" component={AddressADD} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
