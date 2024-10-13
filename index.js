// index.js
const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// 設定 MySQL 連接
const pool = mysql.createPool({
  host: 'mysql',
  user: 'root',
  password: 'example',
  database: 'testdb',
});



// 簡單的 API 路由
app.get('/', (req, res) => {
  res.send('Hello from Node.js API with MySQLLLLYYYYXXccX7777');
});

// 查詢資料庫的 API
app.get('/users', (req, res) => {
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
