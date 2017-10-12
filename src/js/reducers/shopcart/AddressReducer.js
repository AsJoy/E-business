import {  LIST_ADD } from '../../constants/shopcart'
const initialState = {
  active: null
};
export default function (state = initialState, action) {
  let param = null;
  let key = null;
  switch (action.type) {
    case LIST_ADD:
      param = action.param;
      return Object.assign({}, state, param)
    default:
      return state
  }
}
