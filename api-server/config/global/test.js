module.exports = {
  redisOpts: {
    host: '127.0.0.1',
    port: 6379,
    auth_pass: '123456'
  },
  mysql: {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'live_db',
    dateStrings: true,
    connectionLimit: 100
  }
};
