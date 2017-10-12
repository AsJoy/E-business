import { createStore } from 'redux'
import rootReducer from '../reducers/shop/shopReduce'

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/shop/shopReduce', () => {
      const nextReducer = require('../reducers/shop/shopReduce').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
