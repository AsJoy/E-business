/**
 * Created by Administrator on 2017/3/18.
 */
import { combineReducers } from 'redux'
import toastReducers from '../toastReducers.js';
import shopReduce from '../shopCartReduces.js';
import indexReduce from './indexReducer.js';
import searchReducer from './searchReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  toastReducers,
  indexReduce,
  shopReduce,
  searchReducer,
  routing: routerReducer
})

export default rootReducer
