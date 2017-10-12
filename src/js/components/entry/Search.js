/**
 * Created by yuanqiangniu on 2017/4/9.
 */
import React, { Component, PropTypes } from 'react';
import ShopItem from '../shop/shopItem'
import ShopCart from '../../components/ShopCart.react'
import styles from '../../../css/entry/index.pcss';
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.timer = 0
    this._pagerCurrent = 1;
    this.orderBy = '';
    this.orderByOrder = true

    this.event = null;
  }
  handlerSearch() {
    const val = this.refs.data.value;
    this._pagerCurrent = 1;
    const {  actions  } = this.props
    this.orderBy = '';
    this.orderByOrder = true
    actions.loadSearch(val);
  }
  handlerFocus() {
    if (this.timer) return
    this.timer = setTimeout(() => {
      const val = this.refs.data.value;
      const { actions } = this.props
      if (val) {
        actions.loadSearch(val)
      } else {
        actions.updateFocus(true)
      }
      this.timer = 0;
    }, 500)
  }
  historySearch(val) {
    // const {  actions  } = this.props
    // actions.loadSearch(val);
    this.refs.data.value = val
    this.handlerFocus()
  }
  componentDidMount() {
    const { actions  } = this.props
    let timerout = null;
    if (!this.event ) {
      this.event = (e) => {
        const { searchReducer } = this.props;
        if (!searchReducer.focus) {
          if (window.scrollY + window.innerHeight > document.body.scrollHeight - 100) {
            if (timerout) clearTimeout(timerout);
            timerout = setTimeout(() => {
              console.log(searchReducer.data.entry , this._pagerCurrent ,  searchReducer.data.entry.totalPages)
              if (searchReducer.data.entry && this._pagerCurrent <=  searchReducer.data.entry.totalPages) {
                this._pagerCurrent ++;
                const val = this.refs.data.value;
                actions.pagerSearch(val, this._pagerCurrent, this.orderBy, this.orderByOrder)
              }
            }, 1000);
          }
        }
      }
      window.addEventListener('scroll', this.event, false);
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.event, false);
  }

  renderHistory() {
    const { searchReducer  } = this.props
    return Object.keys(searchReducer.history).map((item, i) => {
      return <div key={i} onClick={this.historySearch.bind(this, item)}>
        {item}
      </div>
    })
  }
  renderProduct() {
    const { actions,  searchReducer, shopReduce  } = this.props
    return searchReducer.data.entry && searchReducer.data.entry.data.map((v,index) => {
      return <ShopItem data={v} key={index} actions={actions.actions} shopReduce={shopReduce} />
    })
  }
  handlerDelete() {
    const { actions } = this.props
    actions.deleteHistory()
  }
  handlerOrder(orderBy) {
    const { actions  } = this.props
    const val = this.refs.data.value;
    this._pagerCurrent = 1
    if (this.orderBy === orderBy) {
      this.orderByOrder = !this.orderByOrder
    } else {
      this.orderBy = orderBy
      this.orderByOrder = true
    }
    actions.loadSearch(val, this._pagerCurrent, this.orderBy, this.orderByOrder)
  }
  render() {
    const { actions, searchReducer, shopReduce  } = this.props
    return (
      <div className={styles.searchwrapper}>
        <header className={styles.order_header}>
          <a href="javascript: history.go(-1)"><i className="iconfont icon-zuojiantou"></i></a>
          <div className={styles.inputWrapper}>
            <form action="javascript:void(0)" onSubmit={this.handlerSearch.bind(this)}>
              <input type="text" ref="data" onChange={this.handlerFocus.bind(this)}/>
            </form>
            <button type="submit" ref="clickEle"><i className="iconfont icon-sou" onClick={this.handlerSearch.bind(this)}></i></button>
          </div>
        </header>
        <article className={styles.searchCon}>
          {
            searchReducer.focus? <div className={styles.history}>
              <div className={styles.searchOperate}><button className={styles.deleteHistory} onClick={this.handlerDelete.bind(this)}>删除</button></div>
              <div className={styles.his}>{this.renderHistory()}</div>
            </div> : <div className={styles.products}>
              <div className={styles.orderBy}>
                <span className={styles.active} onClick={this.handlerOrder.bind(this)}>默认</span>
                <span onClick={this.handlerOrder.bind(this, 'price')}>价格</span>
                <span onClick={this.handlerOrder.bind(this, 'name')}>日期</span>
              </div>
              <div className={styles.pts}>
                {this.renderProduct()}
              </div>
              <ShopCart shopReduce={shopReduce} actions={actions.actions} />
            </div>
          }

        </article>
      </div>
    );
  }
}