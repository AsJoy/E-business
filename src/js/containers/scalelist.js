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
import List from '../components/scale/productlist'
import { SCALE_LIST, SCALE_UPDATE } from '../constants/scalelistActionType';

const TYPE_INIT = 'init'
class App extends Component {
  constructor(props) {
    super(props);
    this._pagerCurrent = 1;
    this.getData(TYPE_INIT);
  }
  handlerScroll() {
      const { indexReduce } = this.props;
      var timerout = null;
      window.addEventListener('scroll', (e) => {
          if (window.scrollY + window.innerHeight > document.body.scrollHeight - 100) {
              if (timerout) clearTimeout(timerout);
              timerout = setTimeout(() => {
                  if (this._pagerCurrent < indexReduce.pager.totalPages) {
                      this._pagerCurrent ++;
                      this.getData();
                  }
              }, 500);
          }
      }, false);
  }
  getData(type) {
    const pm = Util.getParam('shopId');
    const shopId = Util.getParam('shopId');
    const scaleId = Util.getParam('scaleId');
    const url = `${Util.getUrl()}/api/scale/${shopId}/detail/${scaleId}`;
    const { actions } = this.props;
    Jsonp.jsonp(url,
      {
        startPager: this._pagerCurrent
      }, (data) => {
          if (type === TYPE_INIT) {
              actions(SCALE_LIST, data);
              console.log(123123)
              this.handlerScroll();
          } else {
              actions(SCALE_UPDATE, data);
          }
      }
    );
  }
  render() {
    const { toastReducers,shopReduce, actions,indexReduce } = this.props;
    return (
      <div>
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
