const mongoose = require('mongoose')
const itinerariesSchema = new mongoose.Schema({
    
    userimage:{type:String, required:true},
    username:{type:String, required:true},
    price:{type:String, required:true},
    duration:{type:String, required:true},
    tinerayone:{type:String, required:true},
    tinerayonneactivity:{type:String, required:true}, 
    locationone:{type:String, required:true}, 
    tineraytwo:{type:String, required:true}, 
    tineraytwoactivity:{type:String, required:true},
    locationtwo:{type:String, required:true},
    hashtagtwo:{type:String, required:true},
         
      
})
const Itineraries = mongoose.model('itineraries',
itinerariesSchema)
module.exports = Itineraries