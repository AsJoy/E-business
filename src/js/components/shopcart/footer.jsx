import React, { Component } from 'react';
import * as shopActionType from './../../constants/shopCartActionType.js';
import styles from '../../../css/shopcart/footer.pcss';
export default class ProductItem extends Component {
  delete(){
    const { indexReduce, actions, shopReduce } = this.props;
    Object.keys(shopReduce).map(function (item) {
      if (item === 'cartColumn') return
      if (!indexReduce.data[item].shouldDelete) {
        return
      }
      const arr = [];
      arr.push({
        id: indexReduce.data[item].item.id,
        shopId: indexReduce.data[item].item.shop_id,
        count: 0
      })
      actions.actions(shopActionType.SHOP_UPDATE_ALL, arr)
    })
  }
  addOrder() {
    const { indexReduce, actions, shopReduce } = this.props;
    actions.addOrder(indexReduce, shopReduce)
  }
  render() {
    const { indexReduce, actions, shopReduce } = this.props;
    let price = 0;
    console.log(shopReduce)
    indexReduce.data && shopReduce&&Object.keys(shopReduce).forEach(function (item) {
      if (item === 'cartColumn') {
        return;
      }
      if (indexReduce.data[item].selected) {
        price += indexReduce.data[item].count*indexReduce.data[item].item.price;
      }
    })
    return (
      <div className={styles.footer}>
        <div className={styles.fl}>
          {!indexReduce.editor? <div><span>合计：</span><span>￥ {price}</span></div>: ''}
        </div>
        {!indexReduce.editor? <div className={styles.fr} onClick={this.addOrder.bind(this)}>结算</div>: <div className={styles.fr} onClick={this.delete.bind(this)}>删除</div>}
      </div>
    );
  }
}

