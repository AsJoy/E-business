import React, { Component } from 'react';
import styles from '../../css/chatlist_.css';
export default class ChatItem extends Component {
  getDate(date){
    if (typeof date) {
      date = new Date(date)
    }
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getMonth()+1}-${date.getDate()}`
  }
  render() {
    const {data} = this.props;

    var chatStyle = styles[data.type] + ' ' + styles.chat;
    var html = '';
    if (data.type === "me") {
      html = <p className={styles.title}><span className={styles['text-red']}>{this.getDate(data.createDate)}</span>/{data.username}</p>
    } else {
      html = <p className={styles.title}>{data.username}/<span className={styles['text-red']}>{this.getDate(data.createDate)}</span></p>
    }
    return (
      <div className={chatStyle}>
      {html}
        <div className={styles.content}>
          {data.content}
        </div>
      </div>
    );
  }
}

ChatItem.propTypes = {
  data: React.PropTypes.object
}