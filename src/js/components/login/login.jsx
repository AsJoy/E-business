/**
 * Created by Administrator on 2017/3/18.
 */
import React, {Component} from 'react';
import styles from '../../../css/login/login.pcss';
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  handlerClick() {
    const {login} = this.props;
    login(this.refs.telephone.value, this.refs.password.value);
  }

  render() {
    const { indexReduce } = this.props;
    return <div className={styles['login-wrapper']}>
      <header className={styles.header}>WeiShop登录</header>
      <from>
        <div className={styles.title}>WeiShop</div>
        <div className={styles["from-control"]}>
          <label htmlFor="telphone">账号</label>
          <input ref="telephone" type="text" id="telphone" className="telphone"  placeholder="手机号"/>
        </div>
        <div className={styles["from-control"]}>
          <label htmlFor="password">登录密码</label>
          <input ref="password" type="password" className="password" id="password"/>
        </div>
        <div className={styles.error}>{indexReduce.message}</div>
        <div className={styles["from-submit"]}>
          <button className={styles.login} onClick={this.handlerClick.bind(this)}>登录</button>
        </div>
        <div className={styles.otherwise}><a href="/demo/register.html">免费注册</a><a href="#" className={styles.fr}>忘记密码</a></div>
      </from>
    </div>
  }
}
