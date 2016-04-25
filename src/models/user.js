/**
 * Created by chenchunyong on 4/19/16.
 */


import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const crypto = require('crypto');


const UserSchema = new Schema({
  userName: {type: String, required: true},
  hashedPassword: {type: String, default: ''},   // 加密后的密码
  salt: {type: String, default: ''},    //  用于加密的salt
  deviceId: {type: String, default: ''},    //  注册设备Id
  deviceType: {type: String, default: ''},    // 设备类型,包括android或者ios
  deviceName: {type: String, default: ''},    // 设备名称 如 iPhone 6
  registerChannel: {type: String, default: ''},    // 注册渠道,包括mobile android ios, pc
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}
});

/**
 * Virtuals
 */

UserSchema
  .virtual('password')
  .set(password=> {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashedPassword = this.encryptPassword(password);
  })
  .get(()=>this._password);


/**
 * Validations
 */
UserSchema.path('userName')
  .validate(userName=>userName.length, 'userName can not be empty');

UserSchema.path('hashedPassword')
  .validate(password=>password.length, 'Password can not be empty');

/**
 * Methods
 */

UserSchema.methods = {
  /**
   * Make salt
   * @returns {string} salt
   */
  makeSalt() {
    return (Math.round(new Date().valueOf() * Math.random())).toString();
  },
  /**
   * Encrypt password
   *
   * @param {String} password
   * @return {String} encryptedPassword
   */
  encryptPassword(password) {
    if (!password) return '';
    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');
    } catch (err) {
      return '';
    }
  }
};

export default mongoose.model('User', UserSchema);
