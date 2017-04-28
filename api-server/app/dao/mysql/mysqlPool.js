/**
 * @description mysql连接池
 * @author yq
 * @date 2017/4/26 下午5:46
 */
const mysql = require('mysql');
const bluebird = require('bluebird');

// promisify
bluebird.promisifyAll(require('mysql/lib/Connection').prototype);
bluebird.promisifyAll(require('mysql/lib/Pool').prototype);

class MysqlPool {
  constructor(app) {
    this.app = app;
  }
  /*
   * Create mysql connection pool.
   */
  createMysqlPool(db = 'mysql') {
    const mysqlConfig = this.app.get('globalConfig')[db];
    return mysql.createPool(mysqlConfig);
  }
}

module.exports = MysqlPool;
