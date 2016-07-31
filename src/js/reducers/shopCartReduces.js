import * as shopActionType from './../constants/shopCartActionType.js';
import shopCart from '../util/shopcart.js';
import assign from 'object-assign';
const initstate = shopCart.getShopCart();

export default function shopReduce(state = initstate, action) {
  const param = action.param;
  let data = null;
  let num = 0;
  let obj = null;
  switch (action.type) {
    case shopActionType.SHOP_SHOW_ALL:
      return state;
    case shopActionType.SHOP_UPDATE:
      data = {};
      data[param.id] = {
        shopId: param.shopId,
        count: param.count
      }
      num = 0;
      if (state[param.id]) {
        num = state[param.id].count;
      }
      state = shopCart.setItem(param.id, param.shopId, param.count);
      obj = Object.assign({}, state, data);
      // obj.cartColumn ++;
      return obj;
    case shopActionType.SHOP_REDUCE:
      data = {};
      data[param.id] = {
        shopId: param.shopId,
        count: param.count
      }
      num = 0;
      if (state[param.id]) {
        num = state[param.id].count;
      }
      shopCart.setItem(param.id, param.shopId, param.count);
      obj = Object.assign({}, state, data);
      // obj.cartColumn --;
      return obj;
    default:
      return state;
  }
}
