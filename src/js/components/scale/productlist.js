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
import ShopItem from '../shop/shopItem'
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
        const rs =  data.pager.data && data.pager.data.map((v, k) => {
                            return <ShopItem data={v} key={v.id} actions={actions} shopReduce={shopReduce} />
                        })
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
