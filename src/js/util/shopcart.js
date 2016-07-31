!(function (name, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = window[name] = factory();
  } else {
    if (window[name]) {
      console.warn(`${name}命名空间已经存在`);
    }
    window[name] = factory();
  }
})('shopcart', function () {
  let shopCart = null;

  let _cart = {
    cartColumn: 0
  }
  const localName = 'globalCart';

  function getShopCart() {
    return _cart || {
      cartColumn: 0
    };
  }

  function setItem(itemId, shopId, count) {
    let num = 0;
    if (_cart[itemId]) {
      num = _cart[itemId].count || 0;
    }
    if (count === 0 && _cart[itemId]) {
      delete _cart[itemId];
      _setLocal();
      _cart.cartColumn --;
      return _cart;
    }

    _cart[itemId] = {
      shopId,
      count
    }
    _cart.cartColumn -= num;
    _cart.cartColumn += count;
    _setLocal();
    return _cart;
  }

  function addItem(itemId, shopId) {
    if (_cart[itemId]) {
      _cart[itemId] = {
        count: 1,
        shopId
      }
    } else {
      _cart[itemId].count ++;
    }
    _setLocal();
  }

  function reduceItem(itemId) {
    if (_cart[itemId]) return;
    if (_cart[itemId].count <= 0) {
      _cart[itemId].count = 0;
    } else {
      _cart[itemId].count --;
    }
    _setLocal();
  }

  function getItem(itemId) {
    let item = _cart[itemId];
    if (item === undefined) {
      console.warn('改商品购物车不存在');
      item = null;
    }
    item.itemId = itemId;
    return item;
  }

  function _setLocal() {
    window.localStorage.setItem(localName, JSON.stringify(_cart));
  }

  function clearCart() {
    _cart = {
      cartColumn: 0
    };
    _setLocal();
  }

  function _getLocal() {
    const cart = window.localStorage.getItem(localName);
    if (!cart || cart === 'undefined') {
      _cart = {
        cartColumn: 0
      }
      return;
    }
    _cart = JSON.parse(cart);
  }

  _getLocal();

  shopCart = {
    setItem,
    getItem,
    getShopCart,
    clearCart,
    addItem,
    reduceItem
  }

  return shopCart;
})
