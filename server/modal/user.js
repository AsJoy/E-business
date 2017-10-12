/**
 * Created by Administrator on 2017/3/19.
 */
function User() {
    this.telephone = '';
    this.create_date = '';
    this.email = '';
    this.password = '';
    this.userName = '';
    this.picSrc = '';
    this.type = 2;
    this.status = 0;
}
User.prototype.setUser = function (obj) {
    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            this[key] = obj[key] ? obj[key]: this[key];
        }
    }
};
module.exports = User