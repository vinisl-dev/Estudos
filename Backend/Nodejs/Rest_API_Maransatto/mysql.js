const mysql = require ('mysql')

// const pool = mysql.createPool({
//   "user":process.env.USER,
//   "password":process.env.PASSWORD,
//   "database":process.env.DATABASE,
//   "port":process.env.PORT,
//   "host":process.env.HOST
// });
const pool = mysql.createPool({
  "user":"root",
  "password":"root",
  "database":"store",
  "port":3306,
  "host":"localhost"
});
exports.pool = pool;