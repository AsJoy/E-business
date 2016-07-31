import React, { Component } from 'react';
import style from '../../css/banner_.css';
export default class Banner extends Component {
  render() {
    const { shop } = this.props;

    return (
      <div className={style['banner-wrapper']}>
        <img src={shop.picSrc} className={style.banner} alt="商店banner" />
        <div className={style.bg}>
          <h4 className={style['shop-intro']}>{shop.intro}</h4>
        </div>
      </div>
    );
  }
}

Banner.propTypes = {
  shop: React.PropTypes.object
}
