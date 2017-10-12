import React, { Component } from 'react';
import linkStyle from '../../../css/link.css';
export default class link extends Component {
  render() {
    const { src, href, classNe, style } = this.props;
    let imgCls = 'img';
    const defaultSrc = '/assets/img/box-bg.png';
    // console.log(classNe);
    if (classNe) {
      imgCls = `${classNe} img`
    }
    if (href) {
      return (
        <a href={href} className={imgCls} style={style}>
          <img className={'lazyload-img'}  data-cdn="no" data-src={src} src={defaultSrc} alt="imgContent" />
        </a>
      );
    } else {
      return (
        <div className={imgCls} style={style}>
          <img className={'lazyload-img'} data-cdn="no" data-src={src} src={defaultSrc} alt="imgContent" />
        </div>
      );
    }
    
  }
}

link.propTypes = {
  src: React.PropTypes.string.isRequired,
  href: React.PropTypes.string,
  classNe: React.PropTypes.string,
  style: React.PropTypes.object
}
