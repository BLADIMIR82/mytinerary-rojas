const Router = require('express').Router();

const ciudadesControllers= require('../controllers/ciudadesControllers');
const {obtenerCiudades}=ciudadesControllers

Router.route('/allcities')
.get(obtenerCiudades)

module.exports = Router