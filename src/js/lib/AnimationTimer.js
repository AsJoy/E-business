var Stopwatch = require('../lib/Stopwatch');

var AnimationTimer = function (duration, timeWarp) {
    // this.timeWarp = timeWarp || this.makeEaseOut(2);
  this.timeWarp = timeWarp || this.easing.easeOutCubic;
  if (duration !== undefined) this.duration = duration;
  this.stopwatch = new Stopwatch();
};

AnimationTimer.prototype = {
  start() {
    this.stopwatch.start();
  },
  stop() {
    this.stopwatch.stop();
  },
  getElapsedTime() {
    var elapsedTime = this.stopwatch.getElapsedTime();
    var percentComplete = elapsedTime / this.duration;
    if (!this.stopwatch.running) {
      return undefined;
    }
    if (this.timeWarp == undefined) {
      return elapsedTime;
    }

    return elapsedTime * (this.timeWarp(percentComplete) / percentComplete);
  },
  isRunning() {
    return this.stopwatch.isRunning();
  },
  isOver() {
    return this.stopwatch.getElapsedTime() > this.duration;
  },
  makeEaseInOut(percentComplete) {
    return percentComplete - Math.sin(percentComplete * 2 * Math.PI) / (2 * Math.PI)
  },
  makeEaseOut(strength) {
    return function (percentComplete) {
      return 1 - Math.pow(1 - percentComplete, strength * 2);
    }
  },
  easing: {

    linear(t) {
      return t;
    },

    easeInQuad(t) {
      return Math.pow(t, 2);
    },

    easeOutQuad(t) {
      return t * (2 - t);
    },

    easeInOutQuad(t) {
      return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },

    easeInCubic(t) {
      return t * t * t;
    },

    easeOutCubic(t) {
      return (--t) * t * t + 1;
    },

    easeInOutCubic(t) {
      return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

  }
}

module.exports = AnimationTimer;
