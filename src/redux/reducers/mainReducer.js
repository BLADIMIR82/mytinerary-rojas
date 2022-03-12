import { combineReducers } from 'redux'
import citiesReducer from './citiesReducer'
import itinerariesReducer from './itinerariesReducer'
import userReducer from "./userReducer"
const mainReducer = combineReducers({

    itinerariesReducer,
    citiesReducer,
    userReducer


})

export default mainReducer
// mainReducer nos permite centralizar todos nuestros reducer en un solo sitio, para mantener
// nuestro código ordenado