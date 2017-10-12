/**
 * Created by Administrator on 2017/3/21.
 */
import { INDEX_DATA, LOAD_DATA, DELETE_HISTORY, ADD_HISTORY, UPDATE_FOCUS, PAGER_DATA } from '../constants/entry'
import { UPDATE_TOAST } from '../constants/ToastActionTypes'

// 首页
export function loadIndex(key = '') {
  return function (dispatch) {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch('/order/index', {
      method: 'POST',
      body:JSON.stringify({ key }),
      headers: myHeaders
    }).then(function (resp) {
      return resp.json()
    }).then(function (data) {
      if (data.code === '500') {
        dispatch(actions(UPDATE_TOAST, {text: '服务器端错误'}));
      }
      dispatch({
        type: INDEX_DATA,
        param: data
      })
    })
  }
}

export function loadSearch(key = '', startPager = 1, orderBy = '', orderByOrder = true) {
  return function (dispatch) {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch('/product/pagerSearch', {
      method: 'POST',
      body:JSON.stringify({key: key, startPager, orderBy, orderByOrder}),
      headers: myHeaders
    }).then(function (resp) {
      return resp.json()
    }).then(function (data) {
      console.log(data)
      if (data.code === '500') {
        dispatch(actions(UPDATE_TOAST, {text: '服务器端错误'}));
      }
      dispatch({
        type: LOAD_DATA,
        param: data,
        key: key
      })
    })
  }
}
export function pagerSearch(key = '', startPager = 1, orderBy = '', orderByOrder = true) {
  return function (dispatch) {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch('/product/pagerSearch', {
      method: 'POST',
      body:JSON.stringify({key: key, startPager, orderBy, orderByOrder}),
      headers: myHeaders
    }).then(function (resp) {
      return resp.json()
    }).then(function (data) {
      console.log(data)
      if (data.code === '500') {
        dispatch(actions(UPDATE_TOAST, {text: '服务器端错误'}));
      }
      dispatch({
        type: PAGER_DATA,
        param: data,
        key: key
      })
    })
  }
}
export function deleteHistory() {
  return {
    type: DELETE_HISTORY
  }
}

export function addHis(param) {
  return {
    type: ADD_HISTORY,
    param: param
  }
}

export function updateFocus(param) {
  return {
    type: UPDATE_FOCUS,
    param: param
  }
}

export function delHis() {
  return {
    type: DELETE_HISTORY
  }
}


export const actions =  function (types, param) {
  return { type: types, param }
}
