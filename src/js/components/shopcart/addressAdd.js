/**
 * Created by Administrator on 2017/3/25.
 */
import React, { Component } from 'react';
import styles from '../../../css/shopcart/address.pcss';
import util from '../../lib/util'
export default class ProductItem extends Component {
  handlerClick() {
    const { toastReducers, actions, addressReduce } = this.props;
    const param = util.serialize(this.refs.addressAdd, true);
    actions.addressAdd(param);
  }
  render() {
    return (
      <form action="javascript:void" className={styles.addressadd} ref="addressAdd">
        <div className={styles.formControl}>
          <div className={styles.formLabel}>收 货 人</div>
          <div className={styles.formContent}>
            <div><input type="text" name="name" placeholder="请输入收货人姓名"/></div>
            <div>
              <label htmlFor="man"><input type="radio" id="man" name="sex" value={'先生'}/> 先生</label>
              <label htmlFor="woman"><input type="radio" id="woman" name="sex" value={'女士'}/> 女士</label>
            </div>
          </div>
        </div>
        <div className={styles.formControl}>
          <div className={styles.formLabel}>手机号码</div>
          <div className={styles.formContent}>
            <div><input type="text" name="telephone" placeholder="请输入收货人的手机号码"/></div>
          </div>
        </div>
        <div className={styles.formControl}>
          <div className={styles.formLabel}>配 送 至</div>
          <div className={styles.formContent}>
            <div><input type="text" name="address" placeholder="请输入收货人详细地址"/></div>
          </div>
        </div>
        {/*<div className={styles.error}>{.message}</div>*/}
        <div className={styles.fix}>
          <button onClick={this.handlerClick.bind(this)}>创建</button>
        </div>
      </form>
    );
  }
}
