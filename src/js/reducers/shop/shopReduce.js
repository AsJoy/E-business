import { combineReducers } from 'redux'
import toastReducers from '../toastReducers.js';
import shopReduce from '../shopCartReduces.js';
import indexReduce from './indexReducer.js';

const rootReducer = combineReducers({
  toastReducers,
  shopReduce,
  indexReduce
})

export default rootReducer
