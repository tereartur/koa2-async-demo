/**
 * Created by chenchunyong on 4/20/16.
 */

import test from 'ava';
import supertest from 'supertest';
import app from '../server';
const request = supertest.agent(app.listen());

test('get account datas', async t => {
  const res = await request
    .get('/v1/accounts');
  t.not(res.body.count, 0);
});
