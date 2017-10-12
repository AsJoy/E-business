/**
 * Created by Administrator on 2017/3/18.
 */
import React, { Component } from 'react';
import styles from '../../../css/login/login.pcss';
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state={};
    }
    handlerClick() {
      const user = {};
      const { indexReduce, addUser } = this.props;
      user.telephone = this.refs.telephone.value;
      user.password = this.refs.password.value;
      user.email = this.refs.email.value;
      user.passwordConfirm = this.refs.passwordConfirm.value;
      addUser(user)
    }

    render() {
        const { indexReduce } = this.props;
        return <div className={styles['login-wrapper']}>
            <header className={styles.header}>WeiShop注册</header>
            <from>
                <div className={styles.title}>WeiShop</div>
                <div className={styles["from-control"]}><label htmlFor="email">电子邮箱</label><input type="email" ref="email" placeholder="电子邮箱" className="email"
                                                                                                  id="email"/></div>
                <div className={styles["from-control"]}><label htmlFor="telphone">账号</label><input type="text" id="telphone" ref="telephone" className="telphone"
                                                                                         placeholder="手机号"/></div>
                <div className={styles["from-control"]}><label htmlFor="password">登录密码</label><input type="password" ref="password" className="password"
                                                                                           id="password"/></div>
                <div className={styles["from-control"]}><label htmlFor="passwordConfirm">确认密码</label><input type="password" ref="passwordConfirm" className="password"
                                                                                                     id="passwordConfirm"/></div>
                <div className={styles.error}>{indexReduce.message}</div>
                <div className={styles["from-submit"]}>
                    <button className={styles.login} onClick={this.handlerClick.bind(this)}>注册</button>
                </div>
            </from>
        </div>
    }
}
