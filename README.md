# notesapp---nodejs-express-with-mysql
NotesApp with Nodejs, express dan mysql

NotesApp adalah REST API berbasis nodejs dengan database MYSQL. 
Berikut ini merupakan panduan membuat nya :
<br>
Install NodeJS, Express dan MYSQL
```php
npm init
npm install --save express mysql2 body-parser
```
Membuat file `index.js` untuk menjalankan program.

```php
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({message: "Welcome to Noted"});
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
```
Selanjutnya koneksi database yang terletak di `config\database.config.js` :
```php
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodesqlc"
});

connection.connect(function (err) {
    if(err) throw err;
});

module.exports = connection;
```
Membuat folder `src`, didalam folder tersebut terdapat folder `controllers`, `models`, `routes` seperti di program.
