const mongoose = require('mongoose')
const itinerariesSchema = new mongoose.Schema({
    titletineray:{type:String, required:true},
    userimage:{type:String, required:true},
    username:{type:String, required:true},
    price:{type:String, required:true},
    duration:{type:String, required:true},
    itinerary:{type:String, required:true},
    itinerayactivity:{type:String, required:true}, 
    location:{type:String, required:true}, 
    hashtag:{type:String, required:true},
         
      
})
const Itineraries = mongoose.model('itineraries',
itinerariesSchema)
module.exports = Itineraries