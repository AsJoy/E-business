import {  ORDER_LIST } from '../../constants/cart'
import Img from '../../lib/img.js';
const initialState = {
  data: {}
};
export default function (state = initialState, action) {
  let key = null;
  switch (action.type) {
    case ORDER_LIST:
      let rs1 = formatData(action.param)
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
  data.entry.forEach(function (item, i) {
    if (!item.count) return
    if (!rs[item.combine_id]) {
      rs[item.combine_id] = {
        id: item.combine_id,
        name: item.name,
        picSrc: item.picSrc,
        intro: item.intro,
        user_id: item.user_id,
        count: item.count,
        price: item.price * item.count
      }

    } else {
      rs[item.combine_id].count += item.count
      rs[item.combine_id].price += item.price * item.count
    }
  })
  console.log(rs)
  return rs;
}