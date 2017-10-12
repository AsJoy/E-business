/**
 * Created by Administrator on 2017/3/19.
 */
import React, { Component } from 'react';
import styles from '../../../css/self/self.pcss';
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state={};
  }
  handlerClick() {
    const { indexReduce, logout } = this.props;
    console.log('handler click ')
    logout()
  }

  render() {
    const { indexReduce, logout } = this.props;
    return <div className={styles.self}>
      <div className={styles.header}>
        <a href="/demo/entry.html" className={styles.goback}><i className="iconfont icon-zuojiantou"></i></a>
        <div className={styles.img}>{
          indexReduce.picSrc? <img src={indexReduce.picSrc} alt=""/>: <i className="iconfont icon-wode5"></i>
        }</div>
        <div className={styles.username}>{indexReduce.telephone?  indexReduce.userName:'尚未登录' }</div>
        { indexReduce.telephone? '': <div className={styles.login}>
          <a href="/demo/login.html">点击登录</a>
          <a href="/demo/register.html" className={styles.fr}>点击注册</a>
        </div> }
      </div>
      <div className={styles.nav}>
        <a href="/demo/order.html"><i className="iconfont icon-order"></i> 全部订单</a>
        <a href="/demo/entry.html#/search"><i className="iconfont icon-sou"></i> 搜索</a>
        <a href="/demo/shopcart.html"><i className="iconfont icon-tubiao4"></i> 购物车</a>
        <a href=""><i className="iconfont icon-fankui"></i> 意见反馈</a>
      </div>
      {indexReduce.telephone ? <div className={styles.footer}>
        <button onClick={this.handlerClick.bind(this)}>退出账号</button>
      </div>: ''}

    </div>
  }
}
