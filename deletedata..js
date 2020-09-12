const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '50165428',
  port: '3306',
  database: 'cainiaowebsite'
});

connection.connect();

var delSql = 'DELETE FROM websites where id=6';

connection.query(delSql, (err, res) => {
  if (err) {
    console.log('[DELETE ERROR] - ', err.message);
    return;
  }
  ;
  console.log('-----------------------------------DELETE------------------');
  console.log('DELETE affectedRows', res.affectedRows);
  console.log('------------------------------------------------------\n\n');
});

connection.end();