var express = require("express");
var router = express.Router();
const vehiculosController = require("../controllers/vehiculosController");
/* GET home page. */
router.get("/", vehiculosController.index);
router.get("/crear", vehiculosController.crear);
router.post("/", vehiculosController.guardar);
router.post("/eliminar/:id", vehiculosController.eliminar);
router.get("/editar/:id", vehiculosController.editar);
router.post("/actualizar", vehiculosController.actualizar);

module.exports = router;
