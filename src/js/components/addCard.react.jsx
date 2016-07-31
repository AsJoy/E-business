import styles from '../../css/addcart_.css';
import * as shopActionType from './../constants/shopCartActionType.js';
import { UPDATE_ALERT, UPDATE_TOAST } from './../constants/ToastActionTypes.js';
import React, { Component } from 'react';

function updateUI(evtTarget) {
  const container = document.querySelector('.cartto'),
    numNode = container.querySelector('.cartnum'),
    animNode = document.createElement('div'),
    positionObj = {
      x: evtTarget.getBoundingClientRect().left + evtTarget.getBoundingClientRect().width / 2,
      y: evtTarget.getBoundingClientRect().top
    },
    l = numNode.getBoundingClientRect().left - positionObj.x || 0,
    t = numNode.getBoundingClientRect().top - positionObj.y || 0,
    newNode = document.createElement('span');
  animNode.style.cssText = `position: fixed;z-index: 105;left:${positionObj.x}px;top:${positionObj.y}px;`;
  newNode.style.cssText = 'position: absolute;left: 0;top: -0.56rem;background-color: #fa4100;color: #fff;text-align: center;width: 0.4rem;height: 0.4rem;line-height: 0.4rem;border-radius: 100%;-webkit-transition: 0.7s left linear, .7s top ease-in; z-index: 114;font-size: 0.293rem;-webkit-transform: translate3d(0, 0, 0);';
  newNode.textContent = 1;
  animNode.appendChild(newNode);
  document.body.appendChild(animNode);
  setTimeout(() => {
    newNode.style.left = `${l}px`;
    newNode.style.top = `${t}px`;
    setTimeout(() => {
      document.body.removeChild(animNode);
    }, 700);
  }, 16);
}
export default class addCart extends Component {

  handlerClickAddCart(item, e) {
    e.preventDefault();
    e.stopPropagation();

    const { data, actions, shopReduce } = this.props,
      cartSelected = shopReduce[`${data.id}`]
    if (cartSelected && cartSelected.count > 0) {
      if (cartSelected.count >= data.leftAmount) {
        actions(UPDATE_TOAST, {
          title: 'w•S 提示',
          text: '你已全部加入购物车啦',
          callback: undefined
        })
      } else {
         actions(shopActionType.SHOP_UPDATE, {
          id: data.id,
          shopId: data.shop_id,
          count: (cartSelected.count + 1)
        })
        updateUI(e.target);
      }
    } else {
      actions(shopActionType.SHOP_UPDATE, {
        id: data.id,
        shopId: data.shop_id,
        count: 1
      })
      updateUI(e.target);
    }
    
  }
  handlerClickReduceCart(item, e) {
    e.preventDefault();
    e.stopPropagation();
    const { data, actions, shopReduce } = this.props,
      cartSelected = shopReduce[`${data.id}`]
    actions(shopActionType.SHOP_UPDATE, {
      id: data.id,
      shopId: data.shop_id,
      count: (cartSelected.count - 1 )
    })
  }
  preventDefaut(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  render() {
    const { data, shopReduce } = this.props,
      cartSelected = shopReduce[`${data.id}`];
    let statusClass = '',
      text = '';
    if (cartSelected && cartSelected.count > 0) {
      statusClass = `${styles.action_addcart} ${styles.open_addcart}`;
    } else {
      statusClass = `${styles.action_addcart} ${styles.default_addcart}`;
    }
    const count = (shopReduce[`${data.id}`] && shopReduce[`${data.id}`].count) || 0;
    data.tipsClassName = styles.someTips;
    return (
      <div className={statusClass}>
        <div
          className={styles.reduce}
          onClick={this.handlerClickReduceCart.bind(this, data)}
        > </div>
        <div className={styles.num} onClick={this.preventDefaut}>{count}</div>
        <div
          className={styles.add}
          onClick={this.handlerClickAddCart.bind(this, data)}
        >
        </div>
        {text}
      </div>
    );
  }
}

addCart.propTypes = {
  data: React.PropTypes.object.isRequired,
  shopReduce: React.PropTypes.object,
  actions: React.PropTypes.func
};
