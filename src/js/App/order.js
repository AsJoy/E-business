/**
 * Created by Administrator on 2017/3/19.
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from '../containers/cart/index'
import CartInfo from '../containers/cart/order_info'
import '../../css/reset.css'
import configureStore, { history } from '../store/cartconfigStore'
import { Router, Route, IndexRoute } from 'react-router'
require('whatwg-fetch');

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = require('object-assign');

const store = configureStore();
render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} extra={true}/>
      <Route path="/view/:orderId" component={CartInfo} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
