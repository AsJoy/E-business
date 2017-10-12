/**
 * Created by Administrator on 2017/2/27.
 */
import React, { Component, PropTypes } from 'react';
import styles from '../../../css/cart/index.pcss';
export default class ShopNav extends Component {
  constructor(props) {
    super(props)
  }
  renderProducts() {
    const { toastReducers, actions, orderDetailReducer, params  } = this.props
    return orderDetailReducer.data && orderDetailReducer.data.data && orderDetailReducer.data.data.map((item, index) => {
      console.log(item)
        return <div className={styles.product} key={index}>
          <div className={styles.clear}>
            <div className={styles.img}>
              <img className={'lazyload-img'}  data-cdn="no" src="/assets/img/box-bg.png" data-src={item.picSrc} alt="imgContent" />
            </div>
            <div className={styles.info}>
              <div className={styles.wrapper}>
                <p className={styles.name}>{item.name} <span className={styles.flr}>¥ {item.price.toFixed(2)}</span></p>
                <p className={styles.name}>{item.intro} <span className={styles.flr}>X {item.count}</span></p>
              </div>
            </div>
          </div>
          <div className={styles.connect}><a href={'tel:' + item.telephone}>联系商家</a></div>
        </div>
    })
  }
  render() {
    const { toastReducers, actions, orderDetailReducer, params  } = this.props
    return (
      <div className={styles.order}>
        <div className={styles.item}>
          <div className={styles.title}>订单信息</div>
          <div className={styles.content}>
            <p className={styles.common}><span className={ styles.fl}>订单编号</span><span className={styles.fr}>{params.orderId}</span></p>
            <p className={styles.common}><span className={ styles.fl}>付款方式</span><span className={ styles.fr}>货到付款</span></p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.title}>配送地址</div>
          <div className={styles.content}>
            <p className={styles.common}>
              <span className={styles.black}>{orderDetailReducer.data && orderDetailReducer.data.address && orderDetailReducer.data.address.name}</span>
              <span className={styles.black}>{orderDetailReducer.data && orderDetailReducer.data.address && orderDetailReducer.data.address.telephone}</span></p>
            <p className={styles.common}><span className={styles.light}>{orderDetailReducer.data && orderDetailReducer.data.address && orderDetailReducer.data.address.address}</span></p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.title}>商品信息</div>
          <div className={styles.content}>
            <p className={styles.title}>商品列表</p>
            <div className={styles.products}>
              {this.renderProducts()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
/**
 * Created by yuanqiangniu on 2017/4/9.
 */
