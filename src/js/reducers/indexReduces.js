import { UPDATE_INDEX, UPDATE_MAIN } from '../constants/ActionTypes'
import { index } from '../lib/format.js';
import assign from 'object-assign';
import Img from '../lib/img.js';
const initialState = {
  shop: {},
  main: [],
  currentPage: 1,
  totalPages: 1,
  title: '微店换购光环节',
  background: 'white'
}
export default function todos(state = initialState, action) {
  const param = action.param;
  switch (action.type) {
    case UPDATE_INDEX:
      return index.getDate(param);
    case UPDATE_MAIN:
      var dataList = param.pager.data;
      var mian = {
        main: state.main.concat(Array.prototype.slice.call(dataList, 0)),
        currentPage: param.pager.currentPage,
        totalPages: param.pager.totalPages
      };
      return assign({}, state, mian);
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
