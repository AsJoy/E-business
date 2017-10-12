import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Toast from '../../components/Toast.react'
import * as appActions from '../../actions/shopcartAction';
import Products from '../../components/shopcart/products'
import Footer from '../../components/shopcart/footer'
import '../../../css/app.css'
import { Link } from 'react-router'
import styles from '../../../css/shopcart/address.pcss';
class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const { actions } = this.props;
    actions.loadproducts();
  }
  handleEditorClick() {
    const {  actions,indexReduce } = this.props;
    actions.changeEditor(!indexReduce.editor)
  }
  render() {
    const { toastReducers, actions,indexReduce,shopReduce } = this.props;
    let item = sessionStorage.getItem('address');
    let hasAddress = true;
    if (!item) {
      hasAddress = false;
    } else {
      item = JSON.parse(item);
    }
    return (
      <div>
        <header className={`order_header  ${styles.cartWrapper}`}>
          <a href="/demo/entry.html"><i className="iconfont icon-zuojiantou"></i></a>
          <span>购物车</span>
          {
            indexReduce.editor? <span className="editor" onClick={this.handleEditorClick.bind(this)}>完成</span>:<span className="editor" onClick={this.handleEditorClick.bind(this)}>编辑</span>
          }
        </header>
        <div className={styles.item}>
          {hasAddress? <div><div className={styles.address}>{item.address}</div>
            <div className={styles.footer}>
            <span>{item.name}</span>
            <span>{item.telephone}</span>
              <Link to="/view">
                <i className={`iconfont icon-youjiantou  ${styles.fr}`}></i>
              </Link>
            </div></div>:<div className={styles.noneAdd}><Link to="/view">选择地址</Link></div>}
        </div>
        {/*<div className="add-wrapper">*/}
          {/*<Address />*/}
        {/*</div>*/}
        <Products actions={actions} indexReduce={indexReduce} shopReduce={shopReduce}/>
        <Footer {...this.props}/>
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
