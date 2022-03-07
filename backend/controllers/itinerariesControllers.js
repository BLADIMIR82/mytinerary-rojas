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
        
        let itinerary
        let error = null

        try{
            itinerary = await Itineraries.find({usuario:id})
           
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : itinerary, 
            success: error ? false : true,
            error: error
        })

    },


    cargarItinerario: async(req,res)=>{
        const { username,userimage, price, duration, itinerary, itinerayactivity,  location, hashtag  } = req.body.dataInput
        new Itineraries({ userimage:userimage,
                    username: username,
                    price: price,
                    duration:duration,
                    itinerary: itinerary,
                    itinerayactivity: itinerayactivity,
                    location: location,
                    hashtag: hashtag }).save()
                    .then((respuesta) => res.json({respuesta}))    
    },
 


    borrarItinerario: async (req,res)=>{ 
        const id = req.params.id
        

           await Itineraries.findOneAndDelete({_id:id})
           .then((respuesta) => res.json({respuesta}))

    },


    modificarItinerario: async (req, res)=>{
        const id = req.params.id
        const itinerarie = req.body.dataInput

        let itinerariedb = await Itineraries.findOneAndUpdate({_id:id}, itinerarie) 
        .then((respuesta) => res.json({respuesta}))
    }

};

module.exports = itinerariesControllers 

