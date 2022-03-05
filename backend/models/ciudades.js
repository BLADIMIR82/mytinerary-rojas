
const mongoose = require('mongoose')
const ciudadesSchema = new mongoose.Schema({
    image:{type:String, required:true},
    name:{type:String, required:true},
    info:{type:String, required:true},
    // userimage:{type:String, required:true},
    // username:{type:String, required:true},
    // price:{type:String, required:true},
    // duration:{type:String, required:true},
    // tinerayone:{type:String, required:true},
    // tinerayonneactivity:{type:String, required:true}, 
    // locationone:{type:String, required:true}, 
    // tineraytwo:{type:String, required:true}, 
    // tineraytwoactivity:{type:String, required:true},
    // locationtwo:{type:String, required:true},
    // hashtagtwo:{type:String, required:true},
         
      
})
const Ciudades = mongoose.model('ciudades',
ciudadesSchema)
module.exports = Ciudades