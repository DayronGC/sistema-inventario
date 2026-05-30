const mysql = require("mysql2");

// conexión correcta (SIN pool para evitar errores)
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "inventario"
});

connection.connect((err) => {
    if (err) {
        console.log("❌ Error conexión DB:", err);
    } else {
        console.log("✅ Conectado a MySQL");
    }
});

module.exports = connection;