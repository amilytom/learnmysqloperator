const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'cainiaowebsite'
});

connection.connect();

var sql = 'SELECT * FROM websites';

connection.query(sql, (err, res) => {
  if (err) {
    console.log('[SELECT ERROR] -', err.message);
    return;
  }
  ;
  console.log('---------------------SELECT----------------------');
  console.log(res);
  console.log('-------------------------------------------\n\n');
})

connection.end();