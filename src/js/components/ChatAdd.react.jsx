import React, { Component } from 'react';
import styles from '../../css/chatadd_.css';
import { CHAT_ADD } from '../constants/ChatActionTypes.js';
export default class ChatAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  handlerChange(e) {
    var target = e.target;
    this.setState((state, props) => {
      state.value=target.value;
    });
  }
  handleSave(text) {
    if (text.length !== 0) {
      this.props.actions(CHAT_ADD, {
        type: 'me',
        content: text,
        createDate: new Date()
      })
    }
  }
  handleSubmit(e) {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.handleSave.bind(this)(text);
      this.setState({ value: '' })
    }
  }
  handerClick(e) {
    this.handleSave(this.state.value);
    this.setState({ value: '' })
  }
  render() {
    return (
      <div className={styles.add} onS>
        <input type="text" 
          onChange={this.handlerChange.bind(this)}  
          className={styles.input}
          onKeyDown={this.handleSubmit.bind(this)} 
          value={this.state.value}
          />
          <button className={styles.send} onClick={this.handerClick.bind(this)}>发送</button>
      </div>
    );
  }
}

ChatAdd.propTypes = {
  actions: React.PropTypes.func
}
