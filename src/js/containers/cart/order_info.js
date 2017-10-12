import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Toast from '../../components/Toast.react'
import * as appActions from '../../actions/cartAction';
import OrderInfo from './../../components/cart/OrderInfo'
import { hashHistory } from 'react-router'
import '../../../css/app.css'
class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const { actions } = this.props;
    actions.loadOrder(this.props.params.orderId);
  }
  render() {
    const { toastReducers, actions,shopReduce, orderDetailReducer } = this.props;
    window.a = hashHistory
    return (
      <div>
        <header className="order_header">
          <a href={this.props.location.query.back? decodeURIComponent(this.props.location.query.back) : "javascript: history.go(-1)"}><i className="iconfont icon-zuojiantou"></i></a>
          <span>订单详情</span>
        </header>
        <OrderInfo {...this.props} />
        <Toast data={toastReducers.toastObj} doAction={actions.actions} />
      </div>
    )
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  toastReducers: PropTypes.object,
  shopReduce: PropTypes.object,
  orderDetailReducer: PropTypes.object
};
function mapStateToProps(state) {
  return {
    toastReducers: state.toastReducers,
    shopReduce: state.shopReduce,
    orderDetailReducer: state.orderDetailReducer
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
