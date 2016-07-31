import React, { Component, PropTypes } from 'react';
import * as types from '../constants/ActionTypes';
import ProductItem from './ProductItem.react';
import styles from '../../css/itemList_.css';
export default class ProductList extends Component {
  constructor(props) {
    super(props);
  
    
  }
  getMin(arr) {
    let index = 0;
    let min = arr.reduce((prev, next, i) => {
      if(prev > next) {
        index = i;
        return next;
      }
      index = i - 1;
      return prev;
    })
    return {
      min,
      index,
    }
  }
  getMax(arr) {
    return arr.reduce((prev, next, i) => {
      if(prev > next) {
        return prev;
      }
      return next;
    })
  }
  render() {
    const { shopReduce, actions, dataList } = this.props;
    const left = [.39, 3.81], top = [0.3, 0.3];
    var iSpace = .12;
    var iCell = 3.3;
    var outerWither = iSpace + iCell;
    var dl = (dataList.map((item, key) => {
      var height = 3.3*item.height/item.width;
      var minInfo = this.getMin(top);
      const min = minInfo.min;
      var newHeight = min + height + iSpace + 1.3;
      let style = {
        left: `${left[minInfo.index]}rem`,
        top: `${top[minInfo.index]}rem`
      }
      top[minInfo.index] = newHeight;
     return <ProductItem data={item} key={key} style={style} shopReduce={shopReduce} actions={actions} />
    }))
    var heigthStyle = {
     height: `${this.getMax(top) + 1.1}rem`
    };
    return (
      <div className={styles.itemList} style={heigthStyle}>
        {
          dl
        }
        <div className={styles.loading} visible={this.state}>end......</div>
      </div>
    );
  }
}

ProductList.propTypes = {
  dataList: React.PropTypes.array,
  shopReduce: React.PropTypes.object,
  actions: React.PropTypes.func
};
