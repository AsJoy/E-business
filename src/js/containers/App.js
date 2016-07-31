import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header.react'
import ShopMain from '../components/ProductList.react'
import ShopCart from '../components/ShopCart.react'
import BackTop from '../components/BackTop.react'
import Banner from '../components/Banner.react'
import Toast from '../components/Toast.react'
import appActions from '../actions'
import reset from '../../css/reset.css'
import appStyle from '../../css/app.css'
import Jsonp from '../lib/jsonp.js';
import Util from '../lib/util.js';
import { UPDATE_INDEX, UPDATE_MAIN } from '../constants/ActionTypes';
class App extends Component {
  constructor(props) {
    super(props);
    this._pagerCurrent = 1;
    this.getData('init');
  }
  handlerScroll() {
    const { IndexReducer } = this.props;
    var timerout = null;
    window.addEventListener('scroll', (e) => {
      if (window.scrollY + window.innerHeight > document.body.scrollHeight - 100) {
        if (timerout) clearTimeout(timerout);
        timerout = setTimeout(() => {
          if (this._pagerCurrent < IndexReducer.totalPages) {
            this._pagerCurrent ++;
            this.getData();
          }
        }, 500);
      }
    }, false);
  }
  getData(type) {
    const pm = Util.getParam('shopId');
    const url = `${Util.getUrl()}/api/pager/${pm}`;
    const { actions, IndexReducer } = this.props;
    Jsonp.jsonp(url,
      {
        startPager: this._pagerCurrent
      },
      function (data) {
        if (type === 'init') {
          actions(UPDATE_INDEX, data);
        } else {
          actions(UPDATE_MAIN, data);
        }
      }
    );
  }
  render() {
    this.handlerScroll();
    const { shopReduce, actions, IndexReducer, toastReducers } = this.props;
    window.document.title = IndexReducer.title;
    window.document.body.style.background = IndexReducer.background;
    console.log(IndexReducer);
    return (
      <div>
        <Header data={IndexReducer.shop} />
        <Banner shop={IndexReducer.shop} />
        <ShopMain shopReduce={shopReduce} dataList={IndexReducer.main} actions={actions} toastReducers={toastReducers} />
        <BackTop IndexReducer={IndexReducer.main} />
        <ShopCart shopReduce={shopReduce} actions={actions} />
        <Toast data={toastReducers.toastObj} doAction={actions} />
      </div>
    )
  }
}

App.propTypes = {
  actions: PropTypes.func.isRequired,
  shopReduce: PropTypes.object.isRequired,
  IndexReducer: PropTypes.object.isRequired,
  toastReducers: PropTypes.object
}

function mapStateToProps(state) {
  return {
    shopReduce: state.shopReduce,
    IndexReducer: state.IndexReducer,
    toastReducers: state.toastReducers
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
