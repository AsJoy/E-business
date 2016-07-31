

import { UPDATE_ALERT, UPDATE_TOAST } from '../constants/ToastActionTypes.js';
import assign from 'object-assign';
const
  initialState = {
    errorText: '',
    alertObj: {
      title: '微店提示',
      text: '',
      callback: undefined
    },
    confirmObj: {
      title: '微店提示',
      text: ''
    },
    toastObj: {
      text: ''
    }
  };

export default function (state = initialState, action) {
  const
    type = action.type,
    param = action.param;

  switch (type) {
    case UPDATE_TOAST:
      return assign({}, state, {
        toastObj: {
          text: param.text || '',
          time: state.toastObj.time
        }
      });
    case UPDATE_ALERT:
      return assign({}, state, {
        alertObj: {
          title: param.title,
          text: param.text,
          callback: param.callback
        }
      });

    default:
      return state;
  }
}
