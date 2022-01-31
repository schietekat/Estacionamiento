module.exports = {
  obtener: function (conexion, funcion) {
    conexion.query(
      "SELECT a.*,b.placa,b.tipo_vehiculo FROM estancias a INNER JOIN vehiculos b on a.vehiculo=b.id",
      funcion
    );
  },
  insertar: function (conexion, datos, timestamp, funcion) {
    conexion.query(
      "INSERT INTO estancias ( vehiculo, hora_inicio,cobro) VALUES (?,?,?)",
      [datos.vehiculo, timestamp, 0],
      funcion
    );
  },
  retornarDatosID: function (conexion, id, funcion) {
    conexion.query(
      "SELECT a.*,b.placa,b.tipo_vehiculo FROM estancias a INNER JOIN vehiculos b on a.vehiculo=b.id where a.id=?",
      [id],
      funcion
    );
  },
  borrar: function (conexion, id, funcion) {
    conexion.query("DELETE FROM estancias where id=?", [id], funcion);
  },
  marcarSalida: function (conexion, id, timestamp, funcion) {
    conexion.query(
      "UPDATE estancias SET hora_salida=? WHERE id =?",
      [timestamp, id],
      funcion
    );
  },
  insertarCobro: function (conexion, costo,id, funcion) {
    conexion.query(
      "UPDATE estancias SET costo=? WHERE id =?",
      [costo, id],
      funcion
    );
  },
};
