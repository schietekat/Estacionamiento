var express = require("express");
var router = express.Router();
const estanciasController = require("../controllers/estanciasController");
/* GET home page. */
router.get("/", estanciasController.index);
router.get("/crear", estanciasController.crear);
router.post("/", estanciasController.guardar);
router.post("/eliminar/:id", estanciasController.eliminar);
router.get("/editar/:id", estanciasController.editar);
router.post("/actualizar", estanciasController.actualizar);

module.exports = router;