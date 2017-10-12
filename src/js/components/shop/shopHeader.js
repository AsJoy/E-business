/**
 * Created by Administrator on 2017/2/27.
 */
import React, { Component, PropTypes } from 'react';
import * as types from '../../constants/shopActionType'
import styles from '../../../css/shop/shopheader.pcss';
export default class ShopHeader extends Component {
    constructor(props) {
        super(props)
    }
    static propTypes = {
        data: React.PropTypes.object
    }
    render() {
        const { data } = this.props;
        return (
            <header className={styles.header}>
                <img src={data.picSrc} className={styles.pic} alt=""/>
                <div className={styles.content}>
                    <img src={data.logoStr} className={styles.logo} alt=""/>
                    <div className={styles.right}>
                        <div className={styles.name}>{data.name}</div>
                        <div className={styles.intro}>{data.intro}</div>
                        <div className={data.type && styles.type}>{data.type}</div>
                    </div>
                </div>
            </header>
        );
    }
}
