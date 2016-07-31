import { createStore } from 'redux'
import rootReducer from '../reducers/chatReduces.js'

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/chatReduces.js', () => {
      const nextReducer = require('../reducers/chatReduces.js').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
