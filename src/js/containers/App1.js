import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header.react';
import ChatAction from '../actions';
import ChatList from '../components/ChatList.react.jsx';
import ChatAdd from '../components/ChatAdd.react.jsx';
import reset from '../../css/reset.css';
import socket from '../util/socket.js';
import { CHAT_ADD } from '../constants/ChatActionTypes.js';
class App extends Component {
  constructor(props) {
    super(props);
    const { actions } = props;
    socket.on('chat message', function (msg) {
      console.log(123);
      actions(CHAT_ADD, JSON.parse(msg));
    });

  }
  render() {
    const { actions } = this.props;
    var header = {
      name: '交流反馈'
    }
    const { chatReducers } = this.props;
    return (
      <div>
        <Header data={header} actions={actions} />
        <ChatList chatReducers={chatReducers} />
        <ChatAdd actions={actions} />
      </div>
    )
  }
}

App.propTypes = {
  actions: PropTypes.func.isRequired,
  chatReducers: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    chatReducers: state.chatReducers
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ChatAction, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
