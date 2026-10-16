require("dotenv").config()
const mysql = require('mysql2');

// Configuración de la conexión a la base de datos

const host = process.env.DB_HOST || "localhost";
const port = Number(process.env.DB_PORT) || 3306;
const user = process.env.DB_USER || "root";
const password = process.env.DB_PASSWORD || "";
const database = process.env.DB_NAME || "tienda"

// Opciones de configuración
const configuracion = {
    host,
    port,
    user,
    password,
    database
},

// Sí el host es remoto (TiDB Cloud), habilitar el SSL automaticamente
if (host !== "localhost" && host !== "127.0.0.1") {
    configuracion.ssl = {
        minVersion: "TLSv1.2",
        rejectUnauthorized: true,
    };
}

// Crear la conexion con MySQL o TiDB Cloude 
const connection = mysql.createConnection(configuracion)

// Comprobamos si la conexión fue exitosa
connection.connect((error) => {
    if (error) {
        console.log("Error al conectar con la base de datos", error.message);
        return;
    }
    console.log(`Conexión exitosa con la base de datos (${host}:${post})`);
});




// Exportar la conexión para usarla en otros archivos
module.exports = connection;