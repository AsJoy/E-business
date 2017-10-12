/**
 * Created by Administrator on 2017/3/19.
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from '../containers/entry/index'
import Search from '../containers/entry/search'
import '../../css/reset.css'
import configureStore, { history } from '../store/entryconfigStore'
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
      <Route path="/search" component={Search} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
