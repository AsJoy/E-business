/**
 * Created by Administrator on 2017/3/19.
 */
/**
 * Created by Administrator on 2017/3/18.
 */
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/register/registerReduce'
import reduxThunk from 'redux-thunk'
const enhancer = reduxThunk

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, applyMiddleware(enhancer))

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/register/registerReduce', () => {
            const nextReducer = require('../reducers/register/registerReduce').default
            store.replaceReducer(nextReducer)
        })
    }

    return store
}