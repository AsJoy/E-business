/**
 * Created by Administrator on 2017/2/27.
 */
/**
 * Created by Administrator on 2017/2/27.
 */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from '../../../css/cart/index.pcss';
export default class ShopNav extends Component {
  constructor(props) {
    super(props)
  }
  renderChild() {
    const { toastReducers, actions,indexReduce  } = this.props
    return indexReduce.data && Object.keys(indexReduce.data).map((key, i) => {
      const item = indexReduce.data[key]
      return <div key={key} className={styles.item}>
        <div className={styles.main}>
          <div className={styles.img}>
            <img className={'lazyload-img'}  data-cdn="no" src="/assets/img/box-bg.png" data-src={item.picSrc} alt="imgContent" />
          </div>
          <div className={styles.content}>
            <p>{item.name}<span>{item.intro}</span></p>
            <p className={styles.amount}>共{item.count}件商品</p>
          </div>
          <Link to={'/view/'+key}><i className={`iconfont icon-youjiantou  ${styles.fr}`}></i></Link>
        </div>
        <div className={styles.pay}>实付: <span className={styles.red}>¥ {item.price.toFixed(2)}</span></div>
      </div>
    })
  }
  render() {
    const { toastReducers, actions,indexReduce  } = this.props
    return (
      <div className={styles.orders}>
        {this.renderChild()}
      </div>
    );
  }
}
