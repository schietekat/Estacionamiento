var express = require("express");
var router = express.Router();
const estacionamientoController = require("../controllers/estacionamientoController");
/* GET home page. */
router.get("/", estacionamientoController.index);

module.exports = router;