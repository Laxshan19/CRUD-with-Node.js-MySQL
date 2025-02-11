var mysql = require('mysql2');

// Create connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "student_db",
    port: 3307
});

// Export the connection object
module.exports = con;
