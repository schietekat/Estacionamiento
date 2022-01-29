var express = require("express");
var router = express.Router();
const vehiculosController = require("../controllers/vehiculosController");
/* GET home page. */
router.get("/", vehiculosController.index);
router.get("/crear", vehiculosController.crear);
router.post("/",vehiculosController.guardar)

module.exports = router;