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
        
        let ciudad
        let error = null

        try{
            ciudad = await Itineraries.findOne({_id:id})
            console.log(ciudad)
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : ciudad, 
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

// const Itineraries = require('../models/itineraries')
// const itinerariesControllers = {

// obtenerItinerary: async (req,res)=>{
// let itineraries
// let error = null


// try{
// itineraries = await Itineraries.find()
// }catch(err){
//     error = err
//     console.log(error)
// }

// res.json({
//     response: error ? 'ERROR' : {itineraries},
//     success: error ? false : true,
//     error: error
// })
// },
// obtenerUnItinerary: async (req, res)=>{
//     const id =req.params.id
//     console.log(req.params)
    
//     let ciudad
//     let error = null

//     try{
//         itinerary = await Itineraries.findOne({_id:id})
//         console.log(itinerary)
//     }catch(err){
//         error = err
//         console.log(error)
//     }
//     res.json({
//         response: error ? 'ERROR' : itineraries, 
//         success: error ? false : true,
//         error: error
//     })

// },
// cargarItinerary: async(req,res)=>{
//     console.log(req.body)
//     const { username,userimage, price, duration, itinerary, itinerayactivity,  location, hashtag  } = req.body.dataInput
//     new Itineraries({ userimage:userimage,
//         username: username,
//         price: price,
//         duration:duration,
//         itinerary: itinerary,
//         itinerayactivity: itinerayactivity,
//         location: location,
//         hashtag: hashtag      
                
//                 }).save()
//         .then((respuesta) => res.json({respuesta}))
// },
// borrarItinerary: async (req,res)=>{
//     const id = req.params.id
//        await Itineraries.findOneAndDelete({_id:id})
//        .then((respuesta) => res.json({respuesta}))


// },
// modificarItinerary: async (req, res) => {
//     const id = req.params.id;
//     const itinerary = req.body.dataInput;

//     let itinerarydb = await Itineraries.findOneAndUpdate({ _id: id }, itinerary).then(
//       (respuesta) => res.json({ respuesta })
//     );
//     console.log(itinerarydb);
//   },
     

// }



// module.exports =itinerariesControllers

