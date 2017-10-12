import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Toast from '../../components/Toast.react'
import * as appActions from '../../actions/shopcartAction';
import AddressAdd from './../../components/shopcart/addressAdd'
import '../../../css/app.css'
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { toastReducers, actions, addressReduce } = this.props;
    return (
      <div>
        <header className="order_header">
          <a href="javascript: history.go(-1)"><i className="iconfont icon-zuojiantou"></i></a>
          <span>添加地址</span>
          <div style={{'clear': 'both'}}></div>
        </header>
        <div>
          <AddressAdd {...this.props}/>
        </div>

        <Toast data={toastReducers.toastObj} doAction={actions.actions} />
      </div>
    )
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  toastReducers: PropTypes.object,
  shopReduce: PropTypes.object
};
function mapStateToProps(state) {
  return {
    toastReducers: state.toastReducers,
    shopReduce: state.shopReduce
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch)
  }
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
