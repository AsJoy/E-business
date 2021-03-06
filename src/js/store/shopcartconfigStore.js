/**
 * Created by Administrator on 2017/3/20.
 */
import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router'
import reduxThunk from 'redux-thunk'
import createLogger from 'redux-logger'
const enhancer = reduxThunk
import rootReducer from '../reducers/shopcart/shopcartReduce'

const store = createStore(rootReducer, applyMiddleware(enhancer, createLogger()))



export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(enhancer))

  if (module.hot) {
    module.hot.accept('../reducers/shopcart/shopcartReduce', () => {
      const nextRootReducer = require('../reducers/shopcart/shopcartReduce').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store
}

// 存储hashHistory
export const history = syncHistoryWithStore(hashHistory, store);