/**
 * Created by Administrator on 2017/3/21.
 */
import { INDEX_DATA } from '../constants/detail'
import { UPDATE_TOAST } from '../constants/ToastActionTypes'

// 首页
export function loadDetail(tpid = '') {
  return function (dispatch) {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch('/product/detail', {
      method: 'POST',
      body:JSON.stringify({ tpid }),
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


export const actions =  function (types, param) {
  return { type: types, param }
}
