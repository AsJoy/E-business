/**
 * Created by Administrator on 2017/2/27.
 */
import { createStore } from 'redux'
import rootReducer from '../reducers/scale/scalelist'

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState)

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/scale/scalelist', () => {
            const nextReducer = require('../reducers/scale/scalelist').default
            store.replaceReducer(nextReducer)
        })
    }

    return store
}
