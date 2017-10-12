import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import BackTop from '../components/BackTop.react'
import ShopCart from '../components/ShopCart.react'
import Toast from '../components/Toast.react'
import appActions from '../actions'
import '../../css/app.css'
import Jsonp from '../lib/jsonp.js';
import Util from '../lib/util.js';
import Header from '../components/shop/shopHeader'
import Nav from  '../components/shop/shopNav'
import List from '../components/shop/shoplist'
import { SHOP_LIST } from '../constants/shopActionType';
class App extends Component {
  constructor(props) {
    super(props);
    this._pagerCurrent = 1;
    this.getData();
  }
  getData(type) {
    const pm = Util.getParam('shopId');
    const url = `${Util.getUrl()}/api/shop/${pm}`;
    const { actions } = this.props;
    Jsonp.jsonp(url,
      {
        startPager: this._pagerCurrent
      },
      function (data) {
        actions(SHOP_LIST, data);
      }
    );
  }
  render() {
    const { toastReducers,shopReduce, actions,indexReduce } = this.props;
    return (
      <div>
        <Header data={indexReduce.shop}/>
        <Nav {...this.props}/>
        <List data = {indexReduce} actions={actions} shopReduce={shopReduce}/>
        <BackTop />
        <ShopCart shopReduce={shopReduce} actions={actions} />
        <Toast data={toastReducers.toastObj} doAction={actions} />
      </div>
    )
  }
}

App.propTypes = {
  actions: PropTypes.func.isRequired,
  toastReducers: PropTypes.object
}

function mapStateToProps(state) {
  return {
    toastReducers: state.toastReducers,
    shopReduce: state.shopReduce,
    indexReduce: state.indexReduce
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
