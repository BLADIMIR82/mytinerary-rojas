const Router = require('express').Router();
const validator = require('../config/validator')
const ciudadesControllers= require('../controllers/ciudadesControllers');
const {obtenerCiudades, obtenerUnaCiudad, cargarCiudad, borrarCiudad, modificarCiudad}=ciudadesControllers
const passport = require('../config/passport')

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
const {signUpUsers, signInUser, signOutUser, verifyEmail, verificarToken }= usersControllers

Router.route('/auth/signUp')
.post(validator,signUpUsers)

Router.route('/auth/signIn')
.post(signInUser)

Router.route('/auth/signOut')
.post(signOutUser)

Router.route('/verify/:uniqueString') //RECIBE EL LINK DE USUARIO
.get(verifyEmail)

Router.route('/auth/signInToken')
.get(passport.authenticate('jwt',{ session:false }), verificarToken)
 

module.exports = Router