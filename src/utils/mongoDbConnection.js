/**
 * Created by chenchunyong on 4/21/16.
 */

import config from '../config';
import mongoose from 'mongoose';
/**
 *  MongoDb connection
 * @returns {Promise}
 */
export default ()=> {
  return new Promise((resolve, reject)=> {
    mongoose.connect(config.demoDb.mongoURL, config.demoDb.options, error=> {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};
