var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "estacionamiento",
});

con.connect((err) => {
  if (!err) {
    console.log("Conexion exitosa!");
  } else {
    console.log("Error de conexion --");
  }
});

module.exports = con;
