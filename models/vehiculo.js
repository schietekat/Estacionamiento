module.exports = {
  obtener: function (conexion, funcion) {
    conexion.query("SELECT * FROM vehiculos", funcion);
  },
  insertar: function (conexion, datos, funcion) {
    conexion.query(
      "INSERT INTO vehiculos (placa,tipo_vehiculo) VALUES (?,?)",
      [datos.placa, datos.tipo_vehiculo],
      funcion
    );
  },
};
