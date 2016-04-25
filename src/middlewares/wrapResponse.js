/**
 * Created by chenchunyong on 4/25/16.
 */

import ErrorResult from '../utils/errorResult';

export default async (ctx, next)=> {
  try {
    const result = await next();
    ctx.body = {result: 'S', data: result};
  } catch (err) {
    //  参考github v3 api 设计结构:https://developer.github.com/v3/
    const error = {message: '服务端返回错误,请联系相关客服', result: 'F'};
    if (err instanceof ErrorResult) {
      Object.assign(error, {
        message: err.message,
        errors: err.errors
      });
    }
    ctx.body = error;
    ctx.status = err.status || 500;
  }
};

