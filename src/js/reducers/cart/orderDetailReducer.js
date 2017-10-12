import {  ORDER_INFO } from '../../constants/cart'
import Img from '../../lib/img.js';
const initialState = {
  data: {}
};
export default function (state = initialState, action) {
  let key = null;
  switch (action.type) {
    case ORDER_INFO:
      let rs1 = formatData(action.param)
      console.log(rs1)
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
	
function formatData(dt) {
  let total = 0;
  let data = dt.entry.data.map((item, index) => {
    if (!item.count) return
    total += item.count * item.price
    return {
        count: item.count,
        price: item.price,
        name: item.pname,
        picSrc: item.ppicSrc,
        intro: item.pintro,
        id:item.product_id,
        saler_id: item.saler_id
      }
  })
  let address = dt.address
  return {
    data,
    total,
    address
  };
}