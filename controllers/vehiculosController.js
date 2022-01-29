var conexion = require("../config/conexion");
var vehiculo = require("../models/vehiculo");

module.exports = {
  index: function (req, res) {
    vehiculo.obtener(conexion, function (err, datos) {
      console.log(datos);
      res.render("vehiculos/index", {
        title: "Aplicacion",
        vehiculos: datos,
      });
    });
  },
  crear: function (req, res) {
    res.render("vehiculos/crear");
  },
  guardar: function (req, res) {
    console.log(req.body);
    vehiculo.insertar(conexion, req.body, function (err) {
      res.redirect("/vehiculos");
      if (err) console.log(err);
    });
  },
};
