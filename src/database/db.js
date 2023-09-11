const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host:'containers-us-west-169.railway.app',
    port: 5524,
    user: 'root',
    password: 'cxB9W8M6ghkALcaNBGYK',
    database: 'railway'
});

conexion.connect((error)=>{
    if(error){
        console.log("El error de conexión es: " + error);
        return
    }
    console.log("Conexión estaleblecida correctamente");
});

module.exports = conexion;