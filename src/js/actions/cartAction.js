/**
 * Created by Administrator on 2017/3/21.
 */
import { ORDER_INFO, ORDER_LIST } from '../constants/cart'
import { UPDATE_TOAST } from '../constants/ToastActionTypes'

// 订单列表
export function loadOrders() {
  return function (dispatch) {
    if (!sessionStorage.getItem('user')) {
      return dispatch(actions(UPDATE_TOAST, {text: '请先登录'}));
    }

    const user = JSON.parse(sessionStorage.getItem('user'))

    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch('/order/orders', {
      method: 'POST',
      body:JSON.stringify({user_id: user.telephone}),
      headers: myHeaders
    }).then(function (resp) {
      return resp.json()
    }).then(function (data) {
      console.log(data)
      if (data.code === '500') {
        dispatch(actions(UPDATE_TOAST, {text: '服务器端错误'}));
      }
      dispatch({
        type: ORDER_LIST,
        param: data
      })
    })
  }
}

export function loadOrder(orderId) {
  return function (dispatch) {
    if (!sessionStorage.getItem('user')) {
      return dispatch(actions(UPDATE_TOAST, {text: '请先登录'}));
    }

    const user = JSON.parse(sessionStorage.getItem('user'))

    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch('/order/orderInfo', {
      method: 'POST',
      body:JSON.stringify({user_id: user.telephone, id: orderId}),
      headers: myHeaders
    }).then(function (resp) {
      return resp.json()
    }).then(function (data) {
      console.log(data)
      if (data.code === '500') {
        dispatch(actions(UPDATE_TOAST, {text: '服务器端错误'}));
      }
      dispatch({
        type: ORDER_INFO,
        param: data
      })
    })
  }
}

export const actions =  function (types, param) {
  return { type: types, param }
}
