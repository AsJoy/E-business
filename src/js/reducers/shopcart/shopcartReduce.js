/**
 * Created by Administrator on 2017/3/18.
 */
import { combineReducers } from 'redux'
import toastReducers from '../toastReducers.js';
import shopReduce from '../shopCartReduces.js';
import indexReduce from './indexReducer.js';
import addressReduce from './AddressReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  toastReducers,
  indexReduce,
  shopReduce,
  addressReduce,
  routing: routerReducer
})

export default rootReducer
