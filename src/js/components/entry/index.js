/**
 * Created by yuanqiangniu on 2017/4/9.
 */
import React, { Component, PropTypes } from 'react';
import ReactSwipe from 'react-swipe';
import ShopItem from '../shop/shopItem'
import ShopCart from '../../components/ShopCart.react'
import { Link } from 'react-router';
import styles from '../../../css/entry/index.pcss';
export default class ShopNav extends Component {
  constructor(props) {
    super(props)
  }

  renderProduct() {
    const { actions,  indexReduce, shopReduce  } = this.props
    return indexReduce.data.entry && indexReduce.data.entry.data.map((v,index) => {
        return <ShopItem data={v} key={index} actions={actions.actions} shopReduce={shopReduce} />
      })
  }

  render() {
    const { actions, shopReduce } = this.props
    return (
      <div className={styles.wrapper}>
        <header className={styles.headerWrapper}>
          <div>
            <span className={styles.logo}>淘</span>

            <Link className={styles.inputWrapper} to="/search">
              <i className="iconfont icon-sou"></i>
            </Link>
          </div>
        </header>
        <div className={styles.adds}>
          <ReactSwipe className={styles.carousel} swipeOptions={{startSlide: 2,
            speed: 500,
            auto: 5000,
            continuous: true,
            disableScroll: false,
            stopPropagation: false}}>
            <div className={styles.pic}><a href="/demo/shop.html?shopId=24"><img src={'http://localhost:8989/resources/0dd8f9d6-e6f2-4572-8350-6475862b58f78.jpeg'} alt=""/></a></div>
            <div className={styles.pic}><a href="/demo/shop.html?shopId=36"><img src={'http://localhost:8989/resources/a4d88145-a7d6-4bc5-a0b3-8dcf4a4965c4timg (1).jpg'} alt=""/></a></div>
            <div className={styles.pic}><a href="/demo/shop.html?shopId=24"><img src={'http://localhost:8989/resources/0dd8f9d6-e6f2-4572-8350-6475862b58f78.jpeg'} alt=""/></a></div>
          </ReactSwipe>
        </div>
        <article>
          <div className={styles.sub}>
            <p className={styles.title}>推荐商品</p>
            <div>
              { this.renderProduct() }
            </div>
          </div>
        </article>
        <div id={styles.shopcartWrapper}>
          <ShopCart shopReduce={shopReduce} actions={actions.actions} />
        </div>
        <footer className={styles.footer}>
          <nav>
            <a href="/demo/entry.html" className={styles.active}><i className="iconfont icon-home7"></i><div>首页</div></a>
            <a href="/demo/shopcart.html"><i className="iconfont icon-gouwuche"></i><div>购物车</div></a>
            <a href="/demo/self.html"><i className="iconfont icon-wode5"></i><div>个人</div></a>
          </nav>
        </footer>
      </div>
    );
  }
}
/**
 * Created by yuanqiangniu on 2017/4/9.
 */
