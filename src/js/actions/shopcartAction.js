/**
 * Created by Administrator on 2017/3/21.
 */
import { LOAD_PRODUCT, CHANGE_EDITOR, CHANGE_SELECT, CHANGE_SELECT_ALL, LIST_ADD, ADDRESS_ADD} from '../constants/shopcart'
import { UPDATE_ALERT, UPDATE_TOAST } from '../constants/ToastActionTypes'
import shopcart from '../util/shopcart'
import { hashHistory } from 'react-router'
// 订单列表
export function loadproducts() {
  return function (dispatch) {
    const cart = shopcart.getShopCart()
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch('/product/shopcart', {
      method: 'POST',
      body:JSON.stringify(cart),
      headers: myHeaders
    }).then(function (resp) {
      return resp.json()
    }).then(function (data) {
      if (data.code === '500') {
        dispatch(actions(UPDATE_TOAST, {text: '服务器端错误'}));
      }
      dispatch({
        type: LOAD_PRODUCT,
        data: data
      })
    })
  }
}
// 添加订单
export function addOrder(indexReduce, shopReduce) {

  return function (dispatch) {

    let data = {};
    let message = ''
    // 判断登录
    if (!window.sessionStorage.getItem('user')) {
      message = '请先登录';
    }

    if (!sessionStorage.getItem('address')) {
      message = '请先选择地址'
    }

    if (message !== '') {
      dispatch({
        type: UPDATE_TOAST,
        param: {
          text: message
        }
      })
      return
    }
    let user = JSON.parse(window.sessionStorage.getItem('user'));
    let address = JSON.parse(window.sessionStorage.getItem('address'));
    Object.keys(shopReduce).forEach(function (item) {
      if (item === 'cartColumn') return;
      data[item] = {
        user_id: user.telephone,
        shopId: indexReduce.data[item].item.shop_id,
        addressId: address.id,
        count: shopReduce[item].count
      }
    })

    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');


    fetch('/product/insert/order', {
      method: 'POST',
      body:JSON.stringify(data),
      headers: myHeaders
    })
      .then(function (resp) {
        return resp.json()
      })
      .then(function (data) {
        console.log(data);
        if (data.code === '500') {
          dispatch({
            type: UPDATE_TOAST,
            param: {
              text: data.msg
            }
          })
        }
        if (data.code === 200) {
          dispatch({
            type: UPDATE_TOAST,
            param: {
              text: '添加成功'
            }
          })

          setTimeout(function () {
            shopcart.clearCart();
            location.href="/demo/order.html#/view/"+ data.entry.id + '?back=' + encodeURIComponent('/demo/entry.html')
          }, 2100)
        }
      }).catch(function (e) {
        dispatch({
          type: UPDATE_TOAST,
          param: {
            text: e.message
          }
        })
      })
    }
}

// 地址列表
export const listAdd = function () {
  return function (dispatch) {
    // 判断登录
    if (!window.sessionStorage.getItem('user')) {
      dispatch({
        type: UPDATE_TOAST,
        param: {
          text: '请先登录'
        }
      })
      return
    }
    let user = JSON.parse(window.sessionStorage.getItem('user'))
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    fetch('/product/list/add', {
        method: 'POST',
        body:JSON.stringify({
          telephone: user.telephone
        }),
        headers: myHeaders
      })
      .then(function (resp) {
        return resp.json()
      })
      .then(function (data) {
        if (data.code === '500') {
          dispatch({
            type: UPDATE_TOAST,
            param: {
              text: data.msg
            }
          })
          return;
        }
        if (data.code === 200) {
          dispatch({
            type: LIST_ADD,
            param: {
              data: data.entry
            }
          })
        }
      })
      .catch(function (e) {
        dispatch({
          type: UPDATE_TOAST,
          param: {
            text: e.message
          }
        })
      })
  }
}

// 添加地址
export const addressAdd = function (data) {
  return function (dispatch) {
    // 判断登录
    if (!window.sessionStorage.getItem('user')) {
      dispatch({
        type: UPDATE_TOAST,
        param: {
          text: '请先登录'
        }
      })
      return
    }
    let user = JSON.parse(window.sessionStorage.getItem('user'))
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    fetch('/product/insert/add', {
        method: 'POST',
        body:JSON.stringify(Object.assign({}, {
          user_id: user.telephone
        }, data)),
        headers: myHeaders
      })
      .then(function (resp) {
        return resp.json()
      })
      .then(function (data) {
        if (data.code === '500') {
          dispatch({
            type: UPDATE_TOAST,
            param: {
              text: data.msg
            }
          })
          return;
        }
        if (data.code === 200) {
          hashHistory.push('/view');
        }
      })
      .catch(function (e) {
        dispatch({
          type: UPDATE_TOAST,
          param: {
            text: e.message
          }
        })
      })
  }
}

export const actions =  function (types, param) {
  return { type: types, param }
}
export const changeEditor =  function (editor) {
  return { type: CHANGE_EDITOR ,param: {editor}}
}

export const changeSelect =  function (key, selected) {
  return { type: CHANGE_SELECT, param: {
    key,
    selected
  }}
}

export const addressAddErr = (msg) => {
  return {
    type: ADDRESS_ADD,
    param: {
      message: msg
    }
  }
}

export const changeSelectAll =  function (selected) {
  return { type: CHANGE_SELECT_ALL, param: {
    selected
  }}
}