/**
 * Created by Administrator on 2017/3/18.
 */
import { LOGIN_ERROR } from '../constants/loginActionType';
import  { UPDATE_TOAST } from '../constants/ToastActionTypes'
export function login(telephone, password) {
    return function (dispatch) {
      if (telephone === '' || password === '') {
        return dispatch({
          type: LOGIN_ERROR,
          params: {
            message: '用户名与密码不能为空'
          }
        })
      }
      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      fetch('/api/user/login',
        {
          method: 'POST',
          body: JSON.stringify({telephone, password}),
          headers: myHeaders
        })
          .then(function (resp) {
              return resp.json()
          }).then(function (data) {
              if (data.code === '500') {
                  dispatch({type: LOGIN_ERROR, params: {
                      message: data.msg
                  }})
              } else {
                window.sessionStorage.setItem('user', JSON.stringify(data.entry[0]))
                location.href = "/demo/self.html"
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