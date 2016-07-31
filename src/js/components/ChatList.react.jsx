import React, { Component } from 'react';
import ChatItem from './ChatItem.react';
export default class ChatList extends Component {
  render() {
    const { chatReducers } = this.props;
    const content = chatReducers.map(function (item, index) {
      return <ChatItem key={index} data={item}></ChatItem>
    })
    return (
      <div className="list" >{content}</div>
    );
  }
}
ChatList.propTypes = {
  chatReducers: React.PropTypes.array
}
