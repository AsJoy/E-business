/**
 * Created by Administrator on 2017/3/18.
 */
import { combineReducers } from 'redux'
import toastReducers from '../toastReducers.js';
import shopReduce from '../shopCartReduces.js';
import indexReduce from './indexReducer.js';

const rootReducer = combineReducers({
  toastReducers,
  indexReduce,
  shopReduce,
})

export default rootReducer
