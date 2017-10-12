import {  ADDRESS_ADD } from '../../constants/shopcart'
const initialState = {
  message: ''
};
export default function (state = initialState, action) {
  switch (action.type) {
    case ADDRESS_ADD:
      return {
        ...action.param
      }
    default:
      return state
  }
}
