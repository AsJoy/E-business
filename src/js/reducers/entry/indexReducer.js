import {  INDEX_DATA } from '../../constants/entry'
import Img from '../../lib/img.js';

const initialState = {
  history: localStorage.getItem('shistory') ? JSON.parse(localStorage.getItem('shistory')): {},
  data: {}
};
export default function (state = initialState, action) {
  let key = null;
  switch (action.type) {
    case INDEX_DATA:
      let rs1 = formatData(action.param)
      setTimeout(function () { img.fireLazyload(); }, 200)
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
  rs = data
  console.log(rs)
  return rs;
}