const mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '50165428',
  port: '3306',
  database: 'cainiaowebsite'
})

connection.connect()

var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com', 6];

connection.query(modSql, modSqlParams, (err, res) => {
  if (err) {
    console.log('[UPDATE ERROR] -', err.message);
    return;
  }
  ;
  console.log('---------------------UPDATE----------------------');
  console.log('UPDATE affectedRows', res.affectedRows);
  console.log('-------------------------------------------\n\n');
});

connection.end();