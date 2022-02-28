const Router = require('express').Router();

const ciudadesControllers= require('../controllers/ciudadesControllers');
const {obtenerCiudades, cargarCiudad, borrarCiudad, modificarCiudad}=ciudadesControllers

Router.route('/allcities')
.get(obtenerCiudades)
.post(cargarCiudad)

Router.route('/allcities/:id')
.delete(borrarCiudad)
.put(modificarCiudad)

module.exports = Router