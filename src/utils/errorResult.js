/**
 * Created by chenchunyong on 4/25/16.
 */

/**
 * 返回的错误消息.
 * 参考github v3 api 设计结构:https://developer.github.com/v3/
 * @param message 消息
 * @param status  状态
 * @param errorOptions Array[object] 类型,返回错误消息的可选项
 * @constructor
 */
function ErrorResult(message, status, errorOptions) {
  this.message = message;
  this.status = status;
  this.errors = errorOptions;
}
ErrorResult.prototype = new Error();
ErrorResult.prototype.constructor = ErrorResult;

/**
 * 返回给客户端多选的信息
 * @param resource 资源
 * @param field  字段
 * @param code 类型,包括 missing,missing_field,invalid,already_exists
 * @constructor
 */
export function ErrorOption(resource, field, code) {
  this.resource = resource;
  this.field = field;
  this.code = code;
}

export default ErrorResult;
