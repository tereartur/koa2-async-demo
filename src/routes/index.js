/**
 * Created by chenchunyong on 4/19/16.
 */
import accountRoute from './account';
import parser from 'koa-bodyparser';
import Router from 'koa-router';
import middlewares from '../middlewares';

const router = new Router();

export default ()=> {
  const routes = [accountRoute];
  router.use(parser());
  router.use(middlewares.wrapResponse);
  routes.forEach(item=> {
    router.use('/v1', item.routes());
  });
  return router.routes();
};
