require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err) {
        if (err.code === 'ER_ACCESS_DENIED_ERROR') {
            console.error('Erro de autenticação:', err);
        } else {
            console.error('Erro ao conectar ao banco de dados:', err);
        }
        return;
    }
    console.log('Conectado ao banco de dados MySQL.');
    connection.end();
});
