const mysql = require('mysql2');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',  //Servidor Local
    user: 'root',       // Usuario de Mysql(Por defecto es XAMPP)
    database: 'Tienda' // Nombre de la base de datos
});

// Comprobar si la conexión fue exitosa
connection.connect((error) => {
    if (error) {
        console.error('✖️ Error al conectar a MySQL:', error);
        return;
    }
    console.log('Conexión exitosa a la base de datos');
});

// Exportar la conexión para usarla en otros archivos
module.exports = connection;