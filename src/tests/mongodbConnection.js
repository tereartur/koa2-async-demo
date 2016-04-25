/**
 * Created by chenchunyong on 4/20/16.
 */

import mongoDbConnection from '../utils/mongoDbConnection';
import test from 'ava';

test('mongo db is connectioned', async t => {
  return mongoDbConnection()
    .then(()=>t.pass())
    .catch(()=>t.fail());
});
