import React, { Component } from 'react';
import cartStyle from '../../css/shopcart_.css';
export default class ShopCart extends Component {
  gohref() {
    location.href = '/demo/shopcart.html'
  }
  render() {
    let boxClass = 'shopcart';
    const { shopReduce, actions, cart } = this.props;
    const num = shopReduce.cartColumn;
    let style = null;
    
    if (num > 0) {
      style = {
        visibility: 'visible'
      };
    } else {
      style = {
        visibility: 'hidden'
      };
    }
    return (
      <div className={cartStyle['show-cart'] + ' cartto ' + cart} onClick={this.gohref.bind(this)}>
        <i className={`iconfont icon-cart ${cartStyle.carticon}`}></i>
        <div className={cartStyle['cart-num'] + ' cartnum'} style={style}>{num}</div>
      </div>
    );
  }
}
ShopCart.propTypes = {
  shopReduce: React.PropTypes.object,
  actions: React.PropTypes.func
}