import { LOGOUT_RS } from '../../constants/SelfActionType'
const initialState = JSON.parse(sessionStorage.getItem('user')) ?JSON.parse(sessionStorage.getItem('user')) : {}
export default function (state = initialState, action) {
  switch (action.type) {
    case LOGOUT_RS:
      return {}
    default:
      return state
  }
}
	