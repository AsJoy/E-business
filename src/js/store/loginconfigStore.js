/**
 * Created by Administrator on 2017/3/18.
 */
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/login/loginReduce'
import reduxThunk from 'redux-thunk'
const enhancer = reduxThunk

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, applyMiddleware(enhancer))

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/login/loginReduce', () => {
            const nextReducer = require('../reducers/login/loginReduce').default
            store.replaceReducer(nextReducer)
        })
    }

    return store
}