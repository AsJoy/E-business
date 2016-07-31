import { combineReducers } from 'redux'
import IndexReducer from './indexReduces.js';
import shopReduce from './shopCartReduces.js';
import toastReducers from './toastReducers.js';

const rootReducer = combineReducers({
  IndexReducer,
  shopReduce,
  toastReducers
})

export default rootReducer
