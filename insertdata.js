const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '50165428',
  port: '3306',
  database: 'cainiaowebsite'
});

connection.connect();

var addSql = 'INSERT INTO websites(Id,name,url,alexa,country) values(0,?,?,?,?)';

var addSqlParams = ['菜鸟工具', 'https://c.runoob.com', '23453', 'CN'];

connection.query(addSql, addSqlParams, (err, res) => {
  if (err) {
    console.log('[INSERT ERROR] - ', err.message);
    return;
  }
  ;
  console.log('-----------------------------------INSERT------------------');
  console.log('INSERT ID', res);
  console.log('------------------------------------------------------\n\n');
});

connection.end();