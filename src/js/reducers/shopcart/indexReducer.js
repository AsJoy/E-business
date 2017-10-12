import {  LOAD_PRODUCT, CHANGE_EDITOR, CHANGE_SELECT, CHANGE_SELECT_ALL } from '../../constants/shopcart'
import shopcart from '../../util/shopcart'
import Img from '../../lib/img.js';
const initialState = {
  editor: false
};
export default function (state = initialState, action) {
  let param1 = null;
  let key = null;
  switch (action.type) {
    case LOAD_PRODUCT:
      const param = action.data;
      return {
        ...state,
       data: formatData(param)
      };
    case CHANGE_EDITOR:
      param1 = action.param
      return Object.assign({}, state, {
        editor: param1.editor
      })
    case CHANGE_SELECT:
      param1 = action.param;
      if (state.editor) {
        key = 'shouldDelete'
      } else {
        key = 'selected'
      }
      return Object.assign({}, state, {
        data: {
          ...state.data,
          [param1.key]: {
            ...state.data[param1.key],
            [key]: param1.selected
          }
        }
      })
    case CHANGE_SELECT_ALL:
      param1 = action.param;
      let rs1 = {};
      if (state.editor) {
        key = 'shouldDelete'
      } else {
        key = 'selected'
      }
      Object.keys(state.data).forEach(function (item) {
        rs1[item] = Object.assign({}, state.data[item], {
          [key]: param1.selected
        })
      })
      setTimeout(function () { img.fireLazyload(); }, 400);
      return Object.assign({}, state, {
        data: rs1
      })
    default:
      var img = new Img({
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
  data.entry.forEach(function (item) {
    let id = item.id
    let dt = shopcart.getItem(id + '')
    rs[`${id}`] = Object.assign({}, dt, {
      item: item,
      selected: true,
      shouldDelete: false
    })
  })
  return rs;
}