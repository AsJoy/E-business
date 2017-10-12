import { SHOP_LIST } from '../../constants/shopActionType'
import { shop } from '../../lib/format.js';
import assign from 'object-assign';
import Img from '../../lib/img.js';
const initialState = {
  shop: {},
  main: [],
  title: '微店换购光环节'
}
export default function todos(state = initialState, action) {
  const param = action.param;
  switch (action.type) {
    case SHOP_LIST:
      return shop.getDate(param);
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
	