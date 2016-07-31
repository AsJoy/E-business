import { CHAT_ADD } from '../constants/ChatActionTypes.js';
import socket from './../util/socket.js';
import { combineReducers } from 'redux';
import assign from 'object-assign';
const username = `user${new Date().getTime()}`;

const initState = [
  {
    type: 'remind',
    content: 'welcome to the family',
    createDate: new Date(),
    username
  }
]
function chatReducers(state = initState, action) {
  switch (action.type) {
    case CHAT_ADD:
      console.log(state);
      if (!action.param.username) action.param.username = username;
      if (action.param.type === 'me') {
        var dt = assign({}, action.param, {
          type: 'other'
        })
        socket.emit('chat message', JSON.stringify(dt));
      }
      if (typeof action.param === 'string') {
        action.param = JSON.parse(action.param);
      }
      return [...state, action.param];
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  chatReducers
})

export default rootReducer

