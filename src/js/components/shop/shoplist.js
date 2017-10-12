/**
 * Created by Administrator on 2017/2/27.
 */
/**
 * Created by Administrator on 2017/2/27.
 */
/**
 * Created by Administrator on 2017/2/27.
 */
import React, { Component, PropTypes } from 'react';
import ShopItem from './shopItem'
import qs from 'querystring';
import styles from '../../../css/shop/shoplist.pcss';
export default class ShopList extends Component {
    constructor(props) {
        super(props)
    }
    static propTypes = {
        data: React.PropTypes.object
    }
    renderScales() {
        const { data, actions, shopReduce } = this.props;
        const param = qs.parse(location.search.substring(1));
        console.log(param)
        const rs =  data.main && data.main.map((v, key) => {
            return <section key={v.id} id={'ps' + v.id}>
                <div className={styles.title}>{v.name} <a href={`/demo/scalelist.html?shopId=${param.shopId}&scaleId=${v.id}` } className={styles.more}>
                    <i className="iconfont icon-less"></i></a>
                </div>
                <div className={styles.lsit}>
                    {v.products.length > 0 ?  v.products.map((v, k) => {
                        return <ShopItem data={v} key={v.id} actions={actions} shopReduce={shopReduce} />
                    }) : ''}
                </div>
            </section>
        })

        console.log(rs);
        return rs;
    }
    render() {
        const { data } = this.props;
        return (
            <article className={styles.article}>
                {this.renderScales()}
                <div className={styles.loading} >end......</div>
            </article>
        );
    }
}
