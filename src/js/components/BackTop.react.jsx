import React, { Component } from 'react';
import topStyle from '../../css/backtop_.css';
import AnimationTimer from '../lib/AnimationTimer';
export default class BackTop extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
        show:false
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  handleScroll() {
    if(window.scrollY > document.documentElement.clientHeight * 2){
        this.setState({
            show:true
        })
    }
    else{
        this.setState({
            show:false
        })
    }
  }
  handlerClick() {
    const setWinScroll = () => {
        if (!this.AnimationTimer.isOver()) {
            let elapsed = this.AnimationTimer.getElapsedTime();
            // update this animation, base on the elapsed time
            if (!isNaN(elapsed)) {
                window.scrollTo(0,scrollY*(1 - Math.min(elapsed/400,1)));
            }
            requestAnimFrame(setWinScroll);
        } else {
            this.AnimationTimer.stop();
            this.AnimationTimer = null;
        }
    }
    const requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
            function(callback) {
                let self = this,
                    start,
                    finish;
                window.setTimeout(function() {
                    start = +new Date();
                    callback(start);
                    finish = +new Date();
                    self.timeout = 1000 / 60 - (finish - start);
                }, self.timeout);
            };
    })();
    const scrollY = window.scrollY;
    // 回到顶部动画实例
    this.AnimationTimer = new AnimationTimer(400);
    this.AnimationTimer.start();
    requestAnimFrame(setWinScroll);
  }
  render() {
    let style = null;
    if (this.state.show === true) {
      style = {
        visibility: 'visible'
      };
    } else {
      style = {
        visibility: 'hidden'
      };
    }
    return (
      <div className={topStyle.backtop} style={style} onClick={this.handlerClick.bind(this)}>
        <i className={`iconfont icon-less less ${topStyle.carticon}`}></i>
      </div>
    );
  }
}

BackTop.propTypes = {
  prop: React.PropTypes.object
}