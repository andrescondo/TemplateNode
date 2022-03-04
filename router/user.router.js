const { Router} = require('express');
const router = Router();

//llamado a controlador, para ejecutar en la respectiva
// peticion al servidor
const { userGet } = require("../controllers/user.controller")

//devuelve a los usuarios
router.get("/", userGet)



module.exports = router;