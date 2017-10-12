import { REGISTER_ADD } from '../constants/registerActionType'
import  { UPDATE_TOAST } from '../constants/ToastActionTypes'
export  function addUser(user) {
  return function (dispatch) {
    if (user.password !== user.passwordConfirm) {
      return dispatch({
        type: REGISTER_ADD,
        message: '两次密码输入不一致'
      })
    }
    if(user.telephone === '' || user.password === '' || user.email === '') {
      return dispatch({
        type: REGISTER_ADD,
        message: '有未填选项'
      })
    }
    delete user.passwordConfirm;
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch('/api/user/add',
      {
        method: 'POST',
        body: JSON.stringify(user),
        headers: myHeaders
      })
      .then(function (resp) {
        return resp.json()
      }).then(function (data) {
        if (data.code === '500') {
          dispatch({
            type: REGISTER_ADD,
            message: data.msg
          })
        } else {
          location.href = '/demo/login.html'
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