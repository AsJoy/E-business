import { LOGIN_ERROR } from '../../constants/loginActionType'
const initialState = {
    message: ''
}
export default function todos(state = initialState, action) {
  const param = action.params;
  switch (action.type) {
    case LOGIN_ERROR:
      console.log(123123)
      return Object.assign({},param);
    default:
      return state
  }
}
	