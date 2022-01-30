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
  eliminar: function (req, res) {
    console.log("recepcion de datos");
    vehiculo.retornarDatosID(conexion, req.params.id, function (err, data) {
      vehiculo.borrar(conexion, req.params.id, function (err) {
        res.redirect("/vehiculos");
      });
    });
  },
  editar: function (req, res) {
    vehiculo.retornarDatosID(conexion, req.params.id, function (err, data) {
      console.log(data[0]);
      res.render("vehiculos/editar", { vehiculo: data[0] });
    });
  },
  actualizar: function (req, res) {
    console.log(req.body.placa);
    console.log(req.body.tipo_vehiculo);
    if (req.body.placa) {
      vehiculo.actualizar(conexion, req.body, function (err) {});
      res.redirect("/vehiculos");
    }
  },
};
