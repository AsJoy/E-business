import Util from './util.js'
/*
* 实现jsonp
* */
class Jsonp {

  date() {
    return new Date().getTime();
  }

  jsonp(url, data, fnc) {
    var script = document.createElement('script');
    var name = 'jsonp' + this.date();
    console.log(Util.serializeObject(data));
    if (url.indexOf('#')) {
      var i = url.indexOf('#');
      url = url.replace('#', '');
      console.log(url);
    }
    if (Util.serializeObject(data)) {
      console.log(data);
      if (url.indexOf('?') > -1) {
        url = url + '&' + Util.serializeObject(data)
      } else {
        url = url + '?' + Util.serializeObject(data)
      }
    }
    if (!/callback=([^&]+)/.test(url)) {
      if (url.indexOf('?') > -1) {
        url += '&callback=' + name;
      } else {
        url += '?callback=' + name;
      }
    } else {
      name = RegExp['$1'];
    }
    script.src = url;
    script.type = 'text/javascript'
    script.id = name;

    window[name] = function (json) {
      var oAim = document.getElementById(name);
      oAim.parentNode.removeChild(oAim);
      window[name] = undefined;
      fnc(json);
    }
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(script);
  }
}

export default new Jsonp();
