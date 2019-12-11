const mysql = require('mysql');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
<<<<<<< HEAD

});

/* const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    port: 3306,
    database: 'adoptadog'
}) */
=======
});
>>>>>>> 03c1df678c36a8aad66008c787468c11b5230df1

global.db = pool;