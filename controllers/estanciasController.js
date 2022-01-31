var conexion = require("../config/conexion");
var estancia = require("../models/estancia");
var vehiculo = require("../models/vehiculo");
var moment = require("moment");

module.exports = {
  index: function (req, res) {
    estancia.obtener(conexion, function (err, datos) {
      // console.log(datos);
      res.render("estancias/index", {
        estancias: datos,
      });
    });
  },
  crear: function (req, res) {
    vehiculo.obtener(conexion, function (err, datos) {
      console.log(datos);
      res.render("estancias/crear", { vehiculos: datos });
    });
  },
  guardar: function (req, res) {
    console.log(req.body);
    var now = moment({}).format();
    estancia.insertar(conexion, req.body, now, function (err) {
      res.redirect("/estancias");
      if (err) console.log(err);
    });
  },
  eliminar: function (req, res) {
    console.log(req.params.id);
    estancia.retornarDatosID(conexion, req.params.id, function (err, data) {
      estancia.borrar(conexion, req.params.id, function (err) {
        if (err) console.log(err);
        res.redirect("/estancias");
      });
    });
  },
  editar: function (req, res) {
    estancia.retornarDatosID(conexion, req.params.id, function (err, data) {
      // console.log(data[0]);
      res.render("estancias/editar", { estancia: data[0] });
    });
  },
  actualizar: function (req, res) {
    // console.log(req.body);
    var now = moment({});
    estancia.marcarSalida(
      conexion,
      req.body.id,
      now.format(),
      function (err, data) {
        estancia.retornarDatosID(conexion, req.body.id, function (err, data) {
          var hinicio = moment(data[0].hora_inicio);
          var hsalida = moment(data[0].hora_salida);
          var dhora = hsalida.diff(hinicio, "minutes");
          var costo_minuto;
          if (data[0].tipo_vehiculo == "oficial") {
            costo_minuto = 0;
          }
          if (data[0].tipo_vehiculo == "residente") {
            costo_minuto = 1;
          }
          if (data[0].tipo_vehiculo == "no_residente") {
            costo_minuto = 3;
          }
          console.log(dhora);
          console.log(costo_minuto * dhora);
          estancia.insertarCobro(
            conexion,
            costo_minuto * dhora,
            req.body.id,
            function (err, data) {
              res.redirect("/estancias");
            }
          );
        });
      }
    );
  },
};
