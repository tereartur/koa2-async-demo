/**
 * Created by chenchunyong on 4/19/16.
 */

let config = require('./configs/config');
const fs = require('fs');
const env = process.env.NODE_ENV || 'development';
if (fs.existsSync(`${__dirname}/configs/config.${env}.json`)) {
  const configForEnv = require(`${__dirname}/configs/config.${env}.json`);
  config = Object.assign({}, config, configForEnv);
}

module.exports = config;
