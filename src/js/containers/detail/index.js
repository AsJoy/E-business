import React, { Component, PropTypes } from 'react'
import qs from 'querystring'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Toast from '../../components/Toast.react'
import * as appActions from '../../actions/detailAction';
import '../../../css/app.css'
import AddCart from '../../components/addCard.react';
import ShopCart from '../../components/ShopCart.react'
import styles from '../../../css/detail/detail.pcss';
class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const { actions } = this.props;
    console.log(qs.parse())
    window.qs = qs;
    actions.loadDetail(qs.parse(location.search.substring(1)).productId);
  }
  goShop(id) {
    window.location.href = '/demo/shop.html?shopId=' + id
  }
  render() {
    const { toastReducers, actions, indexReduce, shopReduce } = this.props;
    console.log(indexReduce)
    const data = {}
    let count = null;
    if (indexReduce.data.entry) {
      data.id = indexReduce.data.entry[0].tpid
      data.shop_id = indexReduce.data.entry[0].id
      count = (shopReduce[`${data.id}`] && shopReduce[`${data.id}`].count) || 0;
    }
    return (
      <div className={styles.wrapper}>
        {indexReduce.data.entry? <div>
          <div className={styles.detail}>
            <img className={styles.img} src={ indexReduce.data.entry[0].tppicSrc} alt=""/>
            <div className={styles.intro}>

              <h4>{ indexReduce.data.entry[0].tpname}</h4>
              <div className={styles.introcol}>
                { indexReduce.data.entry[0].tpintro}
              </div>
              <div className={styles.price}>
                <p className={styles.now}><span>¥ </span><span>{  indexReduce.data.entry[0].price.toFixed(2)}</span></p>
                <p className={styles.oldPrice}>{ indexReduce.data.entry[0].oldPrice.toFixed(2)}</p>
              </div>
            </div>
          </div>
          <div className={styles.shop} onClick={this.goShop.bind(this, indexReduce.data.entry[0].id)}>
            <div>
              <img className={styles.img} src={indexReduce.data.entry[0].logoStr} alt=""/>
              <div className={styles.shopInfo}>
                <p className={styles.title}>
                  {indexReduce.data.entry[0].name}
                </p>
                <p className={styles.title}>
                  {indexReduce.data.entry[0].intro}
                </p>
              </div>
            </div>
          </div>
        </div>: <div></div>}
        <footer className={styles.footer}>
         <div className={styles.con}> <AddCart count1={count}  data={data} shopReduce={shopReduce} actions={actions.actions} />  </div> <ShopCart cart={styles.cart} shopReduce={shopReduce} actions={actions.actions} />
        </footer>
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
