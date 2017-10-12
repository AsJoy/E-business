/**
 * Created by Administrator on 2017/3/19.
 */
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/self/selfReduce'
import reduxThunk from 'redux-thunk'
const enhancer = reduxThunk

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(enhancer))

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/self/selfReduce', () => {
      const nextReducer = require('../reducers/self/selfReduce').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}