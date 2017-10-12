/**
 * Created by Administrator on 2017/3/20.
 */
import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import reduxThunk from 'redux-thunk'
import createLogger from 'redux-logger'
const enhancer = reduxThunk
import rootReducer from '../reducers/detail/detailReduce'

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(enhancer, createLogger()))

  if (module.hot) {
    module.hot.accept('../reducers/detail/detailReduce', () => {
      const nextRootReducer = require('../reducers/detail/detailReduce').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store
}

