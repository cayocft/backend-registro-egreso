const express = require('express')
const router = express.Router()
const controlador = require('../services/usuario/controlador')

router.post('/crear-usuario',controlador.crearUsuario)
router.get('/obtener-usuarios',controlador.obtenerUSuarios)

module.exports = router