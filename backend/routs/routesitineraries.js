const Router = require('express').Router();

const itinerariesControllers= require('../controllers/itinerariesControllers');
const {obtenerItinerary, obtenerUnItinerary, cargarItinerary, borraritinerary, modificaritinerary}=itinerariesControllers

Router.route('/allitineraries')
.get(obtenerItinerary)
.post(cargarItinerary)

Router.route('/allitineraries/:id')
.delete(borraritinerary)
.put(modificaritinerary)
.get(obtenerUnItinerary)

module.exports = Router