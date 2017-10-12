import {  LOAD_DATA, ADD_HISTORY, DELETE_HISTORY, UPDATE_FOCUS, PAGER_DATA } from '../../constants/entry'
import Img from '../../lib/img.js';
const initialState = {
  focus: true,
  data: [],
  history: localStorage.getItem('shistory') ? JSON.parse(localStorage.getItem('shistory')): {}
};
export default function (state = initialState, action) {
  let key = null;
  let rs1;

  switch (action.type) {
    case LOAD_DATA:
      rs1 = formatData(action.param)
      if (action.key) {
        localStorage.setItem('shistory', JSON.stringify({
          ...state.history,
          [action.key]: true
        }))
      }
      state = Object.assign({}, state, {
        focus: false,
        history: {
          ...state.history,
          [action.key]: true
        }
      })
      setTimeout(function () { window.img.fireLazyload(); }, 400);
      return Object.assign({}, state, {
        data: rs1,
      })
    case ADD_HISTORY:
      localStorage.setItem('shistory', JSON.stringify({
        ...state.history,
        [action.param]: true
      }))
      return Object.assign({}, state, {
        history: {
          ...state.history,
          [action.param]: true
        }
      })
    case PAGER_DATA:
      rs1 = formatData(action.param)
      if (action.key) {
        localStorage.setItem('shistory', JSON.stringify({
          ...state.history,
          [action.key]: true
        }))
      }
      state = Object.assign({}, state, {
        history: {
          ...state.history,
          [action.key]: true
        }
      })
      return Object.assign({}, state, {
        data: {
          ...state.data,
          entry: {
            ...state.data.entry,
            data: state.data.entry.data.concat(rs1.entry.data)
          }
        },
      })
    case DELETE_HISTORY:
      localStorage.setItem('shistory', JSON.stringify({}))
      return Object.assign({}, state, {
        history: {}
      })
    case UPDATE_FOCUS:
      return Object.assign({}, state, {
        focus: action.param
      })
    default:
      var img = window.img = new Img({
        class: 'lazyload-img', // img 样式名称
        dataSrc: 'data-src',
        size: '200x200', // cdn尺寸
        sharpen: '100sh', // 锐化参数
        q: '90q', // 图片质量,
        lazyHeight: 0,
        lazyWidth: 0,
        fireEvent: 'scroll'
      });
      setTimeout(function () { img.fireLazyload(); }, 400);
      return state
  }
}
	
function formatData(data) {
  var rs = {};
  rs = data
  console.log(rs)
  return rs;
}