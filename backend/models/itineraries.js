const mongoose = require('mongoose')
const itinerariesSchema = new mongoose.Schema({
    titleitinerary:{type:String, required:true},
    userimage:{type:String, required:true},
    username:{type:String, required:true},
    price:{type:Number, required:true},
    duration:{type:String, required:true},
    likes:{type:Array},
    itinerary:{type:String, required:true},
    itineraryactivity:{type:String, required:true}, 
    location:{type:String, required:true}, 
    hashtag:{type:String, required:true},
    // ciudad: {type: mongoose.Types.ObjectId, ref:'ciudades', required: true}
    ciudad:{type:String, required:true}
                  
      
}) 

           
const Itineraries = mongoose.model('itineraries',
itinerariesSchema)
module.exports = Itineraries 