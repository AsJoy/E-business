/**
 * Created by Administrator on 2017/3/21.
 */
function Address() {
  this.id = 0;
  this.telephone = '';
  this.sex = '';
  this.name = '';
  this.address = ''
  this.user_id = ''
}
Address.prototype.setUser = function (obj) {
  for (let key in this) {
    if (this.hasOwnProperty(key)) {
      this[key] = obj[key] ? obj[key]: this[key];
    }
  }
};
module.exports = Address