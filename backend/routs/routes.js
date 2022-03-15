const Router = require('express').Router();
const validator = require('../config/validator')
const ciudadesControllers= require('../controllers/ciudadesControllers');
const {obtenerCiudades, obtenerUnaCiudad, cargarCiudad, borrarCiudad, modificarCiudad}=ciudadesControllers

Router.route('/allcities')
.get(obtenerCiudades)
.post(cargarCiudad)

Router.route('/allcities/:id')
.delete(borrarCiudad)
.put(modificarCiudad)
.get(obtenerUnaCiudad)

 /////////////////////////////////////////////controllers of itireries///////////////////////////////

const itinerariesControllers = require('../controllers/itinerariesControllers')
const {obtenerItineraries, obtenerUnItinerario, cargarItinerario, borrarItinerario, modificarItinerario} = itinerariesControllers

Router.route('/allitineraries')
.get(obtenerItineraries)
.post(cargarItinerario)


Router.route('/allitineraries/:id')
.delete(borrarItinerario)
.put(modificarItinerario)
.get(obtenerUnItinerario)

/////////////////////////////////////////////controllers of users///////////////////////////////

const usersControllers = require('../controllers/userControllers');
const {signUpUsers, signInUser, signOutUser}= usersControllers

Router.route('/auth/signUp')
.post(validator,signUpUsers)

Router.route('/auth/signIn')
.post(signInUser)

Router.route('/auth/signOut')
.post(signOutUser)
 

module.exports = Router