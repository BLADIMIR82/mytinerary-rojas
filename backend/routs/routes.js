const Router = require('express').Router();
const validator = require('../config/validator')
const ciudadesControllers= require('../controllers/ciudadesControllers');
const {obtenerCiudades, obtenerUnaCiudad, cargarCiudad, borrarCiudad, modificarCiudad}=ciudadesControllers
const passport = require('../config/passport');
const activitiesControllers= require('../controllers/activitiesControllers');

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

///////////////////////////////////////controllers activities////////////////////////////////////
const {obtenerActivities, cargarActivities, borrarActivities, modificarActivities,obtenerUnActivities, obtenerActividadporItinerario} = activitiesControllers

Router.route('/allactivities')
  .get(obtenerActivities)
  .post(cargarActivities)


Router.route('/allactivities/:id')
  .delete(borrarActivities)
  .put(modificarActivities)
  .get(obtenerUnActivities)


Router.route('/allactivities/itinerary/:id')
  .get(obtenerActividadporItinerario)




module.exports = Router
