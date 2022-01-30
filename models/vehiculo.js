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
  retornarDatosID: function (conexion, id, funcion) {
    conexion.query("SELECT * FROM vehiculos where id=?", [id], funcion);
  },
  borrar: function (conexion, id, funcion) {
    conexion.query("DELETE FROM vehiculos where id=?", [id], funcion);
  },
  actualizar: function (conexion, datos, funcion) {
    conexion.query(
      "UPDATE vehiculos SET placa=? ,tipo_vehiculo=? WHERE id =?",
      [datos.placa, datos.tipo_vehiculo, datos.id],
      funcion
    );
  },
};
