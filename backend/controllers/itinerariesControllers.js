const Itineraries  = require('../models/itineraries') 

const itinerariesControllers = {

    obtenerItineraries:  async (req,res)=>{ 
        let itineraries
        let error = null
        try{ 
            itineraries = await Itineraries.find()
        }catch(err){  
            error = err            
        }
        res.json({
            response : error ? 'ERROR' : {itineraries},
            success: error ? false : true,
            error:error
        }) 
    },

   obtenerUnItinerario: async (req, res)=>{
        const id =req.params.id
        console.log(req.params) 
        console.log(id)
        let itinerary
        let error = null

        try{
            itinerary = await Itineraries.find({ciudad:id})
           console.log(itinerary)
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {itinerary}, 
            success: error ? false : true,
            error: error
        })

    },


    cargarItinerario: async(req,res)=>{
        const { titleitinerary, userimage, username, price,  likes, duration, itinerary, itineraryactivity,  location, hashtag, ciudad } = req.body.dataInput
        new Itineraries({ 
                    titleitinerary:titleitinerary,
                    userimage:userimage,
                    username:username,         
                    price: price,       
                    duration:duration,      
                    likes:likes,    
                    itinerary: itinerary,
                    itineraryactivity: itineraryactivity, 
                    location: location,
                    hashtag: hashtag, 
                    ciudad:ciudad                     
                         }).save()              

                    .then((respuesta) => res.json({respuesta}))        
    },
     


    borrarItinerario: async (req,res)=>{ 
        const id = req.params.id
        

           await Itineraries.findOneAndDelete({_id:id})
           .then((respuesta) => res.json({respuesta}))

    },


    modificarItinerario: async (req, res)=>{
        const id = req.params.id
        const Itineraries = req.body.dataInput

        let itinerariedb = await Itineraries.findOneAndUpdate({_id:id}, itineraries) 
        .then((respuesta) => res.json({respuesta}))
    }
   
};   

module.exports = itinerariesControllers 

