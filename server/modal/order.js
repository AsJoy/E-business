/**
 * Created by Administrator on 2017/3/21.
 */
function Order() {
  this.id = 0;
  this.count = 0;
  this.order_id = '';
  this.product_id = '';
  this.shop_id = ''
  this.user_id = ''
  this.address_id = ''
  this.status = ''
}
Order.prototype.setOrder = function (obj) {
  for (let key in this) {
    if (this.hasOwnProperty(key)) {
      this[key] = obj[key] ? obj[key]: this[key];
    }
  }
};
module.exports = Order