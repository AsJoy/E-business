import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Toast from '../../components/Toast.react'
import * as appActions from '../../actions/shopcartAction';
import AddressList from './../../components/shopcart/addressList'
import '../../../css/app.css'
class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const { toastReducers, actions,shopReduce } = this.props;
    actions.listAdd();
  }
  render() {
    const { toastReducers, actions,shopReduce, addressReduce } = this.props;
    console.log(addressReduce)
    return (
      <div>
        <header className="order_header">
          <a href="javascript: history.go(-1)"><i className="iconfont icon-zuojiantou"></i></a>
          <span>选择地址</span>
        </header>
        <div>
          <AddressList {...this.props}/>
        </div>
        <Toast data={toastReducers.toastObj} doAction={actions.actions} />
      </div>
    )
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  toastReducers: PropTypes.object,
  shopReduce: PropTypes.object,
  addressReduce: PropTypes.object
};
function mapStateToProps(state) {
  return {
    toastReducers: state.toastReducers,
    shopReduce: state.shopReduce,
    addressReduce: state.addressReduce
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
