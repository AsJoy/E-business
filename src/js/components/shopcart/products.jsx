import React, { Component } from 'react';
import Link from '../common/link.react';
import AddCart from '../addCard.react';
import styles from '../../../css/shopcart/products.pcss';
export default class ProductItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false
    }
  }
  selectOne(key) {
    const { indexReduce, actions, shopReduce } = this.props;
    var item = indexReduce.data[key]
    if (indexReduce.editor) {
      actions.changeSelect(key, !item.shouldDelete)
    } else {
      actions.changeSelect(key, !item.selected)
    }
  }
  renderProducts() {
    const { indexReduce, actions, shopReduce } = this.props;
    let sty = {};
    if (indexReduce.selected === true) {
      sty.visibility = 'visible'
    }
    return indexReduce.data && Object.keys(indexReduce.data).map((item) => {
      let data = indexReduce.data[item]
      if (!shopReduce[item] || !shopReduce[item].count){
        return ''
      }
      let checkedProperty = false;
      if (indexReduce.editor) {
        checkedProperty = 'shouldDelete';
      } else {
        checkedProperty = 'selected';
      }

      return <div className={styles.item} key={data.item.id}>
        <label className={styles.radioSimo} htmlFor={data.item.id} style={sty}>
          <input type="radio" id={data.item.id} checked={data[checkedProperty]} onChange={this.selectOne.bind(this, item)}/>
          <span></span>
        </label>
        <div className={styles.img}>
          <img className={'lazyload-img'}  data-cdn="no" src="/assets/img/box-bg.png" data-src={data.item.picSrc} alt="imgContent" />
        </div>
        <div className={styles.detail}>
          <div className={styles.name}>{data.item.name}</div>
          <div className={styles.intro}>{data.item.intro}</div>
          <div className={styles.price}>￥ {data.item.price}</div>
          <div className={styles['add-cart-wrapper']}>
            <AddCart data={data.item} shopReduce={shopReduce} actions={actions.actions} />
          </div>
        </div>
      </div>
    })
  }
  selectAll({ indexReduce, actions }) {
    if (indexReduce.editor) {
      return indexReduce.data&&Object.keys(indexReduce.data).every(function (item, index) {
        return indexReduce.data[item].shouldDelete
      })
    } else {
      return indexReduce.data&&Object.keys(indexReduce.data).every(function (item, index) {
        return indexReduce.data[item].selected
      })
    }
  }
  handlerChange() {
    const { actions } = this.props;
    actions.changeSelectAll(!this.state.checked);
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.selectAll(nextProps))
    this.setState({
      checked: this.selectAll(nextProps)
    })
  }
  render() {
    const { indexReduce, actions } = this.props;
    return (
      <div className={styles.products}>
          <header className={styles.header}>
            <label className={styles.radioSimo} htmlFor="id">
              <input type="radio" id="id" checked={this.state.checked} ref="selectedAll" onChange={this.handlerChange.bind(this)}/>
              <span></span>
            </label>
            购物车列表
          </header>
          {this.renderProducts()}
      </div>
    );
  }
}

