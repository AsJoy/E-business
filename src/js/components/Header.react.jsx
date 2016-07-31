import React, { Component, PropTypes } from 'react';
import * as types from '../constants/ActionTypes'
import styles from '../../css/header_.css';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "style": {
        visibility: 'hidden'
      }
    };
  }
  handerClick() {
    this.setState({
      "style": {
        visibility: this.state.style.visibility ==='hidden'? 'visible': 'hidden'
      }
    })
  }
  render() {
    const { data } = this.props;
    return (
      <header id="header" className={styles['drop-down']}>
        <div className={styles.title} ><i className={"icon icon-ico " + styles.fl}></i> 
          {data.name}
          <span className={"iconfont icon-category " + styles.fr +" " + styles['drop-item']} onClick={this.handerClick.bind(this)}></span>
        </div>
        <ul className={styles['drop-list']} style={this.state.style} >
          <li><a href="http://localhost:8080/weishop/user/login">自己开店</a></li><li><a href="/?shopId=24">随便逛逛</a></li><li><a href="/chat">聊天</a></li>
        </ul>
      </header>
    );
  }
}
Header.propTypes = {
  data: React.PropTypes.object
}
