/**
 * Created by Administrator on 2017/3/25.
 */
import React, { Component } from 'react';
import styles from '../../../css/shopcart/address.pcss';
import { hashHistory } from 'react-router'
export default class ProductItem extends Component {
  renderAddress() {
    const { toastReducers, actions,shopReduce, addressReduce } = this.props;
    return addressReduce.data && addressReduce.data.map( (item) => {
      return <div className={styles.item} key={item.id} onClick={this.chooseAddress.bind(this, item)}>
        <div className={styles.address}>{item.address}</div>
        <div className={styles.footer}>
          <span>{item.name}</span>
          <span>{item.telephone}</span>
        </div>
      </div>
    })
  }
  chooseAddress(item) {
    sessionStorage.setItem('address', JSON.stringify(item))
    hashHistory.push('/')
  }
  handlerClick() {
    hashHistory.push('/address/add');
  }
  render() {
    return (
      <div className={styles.list}>
        {this.renderAddress()}
        <div className={styles.fix}>
          <button onClick={this.handlerClick.bind(this)}>添加地址</button>
        </div>
      </div>
    );
  }
}
