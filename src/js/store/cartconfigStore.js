/**
 * Created by Administrator on 2017/3/20.
 */
import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router'
import reduxThunk from 'redux-thunk'
import createLogger from 'redux-logger'
const enhancer = reduxThunk
import rootReducer from '../reducers/cart/cartReduce'

const store = createStore(rootReducer, applyMiddleware(enhancer, createLogger()))



export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(enhancer))

  if (module.hot) {
    module.hot.accept('../reducers/cart/cartReduce', () => {
      const nextRootReducer = require('../reducers/cart/cartReduce').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store
}

// 存储hashHistory
export const history = syncHistoryWithStore(hashHistory, store);