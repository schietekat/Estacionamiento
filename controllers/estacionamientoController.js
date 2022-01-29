var conexion = require("../config/conexion");
var vehiculo = require("../models/vehiculo");

module.exports = {
  index: function (req, res) {
    vehiculo.obtener(conexion, function (err, datos) {
      console.log(datos);
      res.render("estacionamiento/index", { title: "Aplicacion" });
    });
  },
};
