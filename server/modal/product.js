/**
 * Created by Administrator on 2017/3/21.
 */
function Product() {
  this.id = 0;
  this.amount = 0;
  this.brand = '';
  this.intro = '';
  this.leftAmount = 0;
  this.name = '';
  this.oldPrice = 0;
  this.picSrc = '';
  this.price = 0;
  this.status = 0;
  this.shop_id = 0;

}
Product.prototype.setUser = function (obj) {
  for (let key in this) {
    if (this.hasOwnProperty(key)) {
      this[key] = obj[key] ? obj[key]: this[key];
    }
  }
};
module.exports = Product