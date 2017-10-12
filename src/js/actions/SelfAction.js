/**
 * Created by Administrator on 2017/3/19.
 */
import { LOGOUT_RS } from '../constants/SelfActionType';
import  { UPDATE_TOAST } from '../constants/ToastActionTypes'
export function logout() {
  return function (dispatch) {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch('/api/user/logout',
      {
        method: 'POST',
        headers: myHeaders
      })
      .then(function (resp) {
        return resp.json()
      }).then(function (data) {
      if (data.code === '500') {
        dispatch(updateToast('', {text: '服务器端错误'}))
      } else {
        sessionStorage.removeItem('user')
        dispatch({
          type: LOGOUT_RS
        })
      }
    })
  }
}

export function updateToast(type, {text}) {
  return {
    type: UPDATE_TOAST,
    params: { text }
  }
}