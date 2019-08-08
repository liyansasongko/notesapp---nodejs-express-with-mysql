const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root1234",
    database: "nodesqlc"
});

connection.connect(function (err) {
    if(err) throw err;
});

module.exports = connection;