import React, { Component } from 'react';
import Link from '../common/link.react';
import AddCart from '../addCard.react';
import itemStyle from '../../../css/shop/shopitem.pcss';
export default class ProductItem extends Component {
    render() {
        const { data } = this.props;
        data.href = '/demo/detail.html?productId=' + data.id;
        const { shopReduce, actions } = this.props;
        return (
            <div className={itemStyle.productItem}>
                <Link src={data.picSrc}  href={data.href} classNe={itemStyle.image} />
                <a href={data.href} className={itemStyle.name}>
                    <strong>{data.name}</strong> <span>{data.intro}</span>
                </a>
                <span className={itemStyle.oldPrice}>价格：{data.oldPrice}</span>
                <span className={itemStyle.price}>¥{data.price}</span>
                <div className={itemStyle['add-cart-wrapper']}>
                    <AddCart data={data} shopReduce={shopReduce} actions={actions} />
                </div>
            </div>
        );
    }
}

ProductItem.propTypes = {
    data: React.PropTypes.object,
    shopReduce: React.PropTypes.object,
    style: React.PropTypes.object,
    actions: React.PropTypes.func
}