import { combineReducers } from 'redux'

import citiesReducer from './citiesReducer'
import authReducer from './authReducer'
import itinerariesReducer from './itinerariesReducer'

const mainReducer = combineReducers({

    itinerariesReducer,
    citiesReducer,
    authReducer

})

export default mainReducer
