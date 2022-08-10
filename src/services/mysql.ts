const mysql = require('mysql');
// Usar esta configuración para manejar un servidor local de MySQL
const connection = mysql.createPool({
    host : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'cbtis_217'
})

export default connection;