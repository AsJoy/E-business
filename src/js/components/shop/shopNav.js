/**
 * Created by Administrator on 2017/2/27.
 */
/**
 * Created by Administrator on 2017/2/27.
 */
import React, { Component, PropTypes } from 'react';
import styles from '../../../css/shop/shopnav.pcss';
export default class ShopNav extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        const { indexReduce } = this.props;
        let showMore = false;
        let width = (indexReduce.main.length * 1.8 + 0.2)
        if (indexReduce.main.length * 1.8 > 7.5) {
            showMore = true;
            width += 0.9 ;
        }
        width += 'rem';
        return (
            <nav className={styles.shop_nav} >
                <div className={styles.inner}>

                    <ul style={{width}}>
                    {indexReduce.main && indexReduce.main.map((v, k) => {
                        return<li key={k}><a href={'#ps'+v.id}>{v.name}</a></li>
                    })}
                    </ul>
                </div>
                {showMore? <span className={styles.more}><i className="iconfont icon-less"></i></span>: ''}
            </nav>
        );
    }
}
