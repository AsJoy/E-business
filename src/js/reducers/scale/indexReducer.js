import { SCALE_LIST, SCALE_UPDATE } from '../../constants/scalelistActionType'
import Img from '../../lib/img.js';
import assign from 'object-assign';
const initialState = {
  pager: {}
}
export default function todos(state = initialState, action) {
  const param = action.param;
  switch (action.type) {
    case SCALE_LIST:
      return param;
    case SCALE_UPDATE:
      const uprs = assign({}, state,
          {
            pager: assign({}, state.pager, {
              data: [...state.pager.data, ...param.pager.data]
            })
          }
          )
      return uprs;
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
	