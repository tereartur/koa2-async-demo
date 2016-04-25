/**
 * Created by chenchunyong on 4/19/16.
 */

import Koa from 'koa';
import config from './config';
import mongoDbConnection from './utils/mongoDbConnection';
import routes from './routes';
const app = new Koa();

mongoDbConnection()
  .then(()=>console.log('koa-demo mongodb has started'))
  .catch(err=>console.log(err));


app.use(routes());

app.listen(config.port, ()=>console.log(`listen on ${config.port}`));

export default app;
