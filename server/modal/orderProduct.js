/**
 * Created by Administrator on 2017/3/21.
 */
function Order() {
  this.id = 0;
  this.count = '';
  this.address_id = 0;
  this.product_id = 0
  this.shop_id = 0
  this.user_id = '';
}
Order.prototype.setUser = function (obj) {
  for (let key in this) {
    if (this.hasOwnProperty(key)) {
      this[key] = obj[key] ? obj[key]: this[key];
    }
  }
};
module.exports = Order