const Router = require('express').Router();

const ciudadesControllers= require('../controllers/ciudadesControllers');
const {obtenerCiudades, obtenerUnaCiudad, cargarCiudad, borrarCiudad, modificarCiudad}=ciudadesControllers

Router.route('/allcities')
.get(obtenerCiudades)
.post(cargarCiudad)

Router.route('/allcities/:id')
.delete(borrarCiudad)
.put(modificarCiudad)
.get(obtenerUnaCiudad)
  
  

/////////////////////////////////////////////****///////////////////////////////


const itinerariesControllers = require('../controllers/itinerariesControllers')
const {obtenerItineraries, obtenerUnItinerario, cargarItinerario, borrarItinerario, modificarItinerario} = itinerariesControllers

Router.route('/allitineraries')
.get(obtenerItineraries)
.post(cargarItinerario)


Router.route('/allitineraries/:id')
.delete(borrarItinerario)
.put(modificarItinerario)
.get(obtenerUnItinerario)


module.exports = Router