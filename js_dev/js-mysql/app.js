const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'captncarty',
    password: 'Tennyson$1'});

connection.connect((error) => {
        if(error) {
            console.log('Error Connection to MySQL Database');
            return;
            }

        console.log('Connection Established successfully')
        });

connection.end((error) => {});
