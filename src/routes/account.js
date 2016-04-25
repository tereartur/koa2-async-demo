/**
 * Created by chenchunyong on 4/19/16.
 */


import Router from 'koa-router';
import * as accountController from '../controllers/account';
import models from '../models';
const router = new Router({prefix: '/accounts'});

router
  .get('/', async ()=> await accountController.getUsers(models))
  .get('/:id', async ctx => await accountController.getUserById(models, ctx.params.id))
  .post('/register', async ctx => {
    const userData = ctx.request.body;
    ctx.body = await accountController.register(models, userData);
  });

export default router;
