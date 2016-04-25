/**
 * Created by chenchunyong on 4/20/16.
 */

import ErrorResult, {ErrorOption} from '../utils/errorResult';

/**
 * 根据条件查询账户信息
 * @param models 查询的对象
 * @param options object类型 查询用户条件
 * @returns {*}
 */
export async function getUsers(models, options) {
  return await models.User.find(options);
}

/**
 *  根据用户Id获取某个用户
 * @param models 查询对象
 * @param userId 用户id
 * @returns {*}
 */
export async function getUserById(models, userId) {
  return await models.User.findById(userId);
}

/**
 * 用户注册
 * @param models
 * @param userData 用户注册数据
 * @returns {*}
 */
export async function register(models, userData) {
  if (!userData.hasOwnProperty('userName')) {
    const errorOptions = [new ErrorOption('account', 'userName', 'missing_field')];
    throw new ErrorResult('缺少userName字段', 422, errorOptions);
  }
  if (!userData.hasOwnProperty('password')) {
    const errorOptions = [new ErrorOption('account', 'password', 'missing_field')];
    throw new ErrorResult('缺少密码字段', 422, errorOptions);
  }
  const user = new models.User({userData});
  return await user.save();
}

/**
 * 删除某个用户
 * @param models
 * @param userId 用户Id
 * @returns {Query}
 */
export async function deleteUser(models, userId) {
  return await models.User.findByIdAndRemove(userId);
}
