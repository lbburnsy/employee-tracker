const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "rootpassburns",
    database: "company_db",
})

module.exports = connection;