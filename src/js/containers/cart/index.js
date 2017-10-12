import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Toast from '../../components/Toast.react'
import * as appActions from '../../actions/cartAction';
import '../../../css/app.css'
import { Link } from 'react-router'
import OrderList from './../../components/cart/Order_list'
import styles from '../../../css/shopcart/address.pcss';
class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const { actions } = this.props;
    actions.loadOrders();
  }
  render() {
    const { toastReducers, actions,indexReduce } = this.props;
    console.log(indexReduce)
    return (
      <div>
        <header className={`order_header  ${styles.cartWrapper}`}>
          <a href="javascript: history.go(-1)"><i className="iconfont icon-zuojiantou"></i></a>
          <span>订单列表</span>
        </header>
        <OrderList {...this.props}/>
        <Toast data={toastReducers.toastObj} doAction={actions.actions} />
      </div>
    )
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  toastReducers: PropTypes.object,
  shopReduce: PropTypes.object,
  indexReduce: PropTypes.object
};
function mapStateToProps(state) {
  return {
    toastReducers: state.toastReducers,
    indexReduce: state.indexReduce,
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
