import { REGISTER_ADD } from '../../constants/registerActionType'
const initialState = {
    message: ''
}
export default function (state = initialState, action) {
  const param = action.message;
  switch (action.type) {
    case REGISTER_ADD:
      return Object.assign({}, {message: param});
    default:
      return state
  }
}
	