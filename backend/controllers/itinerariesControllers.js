const Itineraries = require('../models/itineraries')
const itinerariesControllers = {

obtenerItinerary: async (req,res)=>{
let itineraries
let error = null


try{
itineraries = await Itineraries.find()
}catch(err){
    error = err
    console.log(error)
}

res.json({
    response: error ? 'ERROR' : {itineraries},
    success: error ? false : true,
    error: error
})
},
obtenerUnItinerary: async (req, res)=>{
    const id =req.params.id
    console.log(req.params)
    
    let ciudad
    let error = null

    try{
        itinerary = await Itineraries.findOne({_id:id})
        console.log(itinerary)
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
cargarItinerary: async(req,res)=>{
    console.log(req.body)
    const { name, info, image} = req.body.dataInput
    new Itineraries({ image:image,
                 name:name,
                 info:info}).save()
        .then((respuesta) => res.json({respuesta}))
},
borraritinerary: async (req,res)=>{
    const id = req.params.id
       await Itineraries.findOneAndDelete({_id:id})
       .then((respuesta) => res.json({respuesta}))


},
modificaritinerary: async (req, res) => {
    const id = req.params.id;
    const itinerary = req.body.dataInput;

    let itinerarydb = await Itineraries.findOneAndUpdate({ _id: id }, itinerary).then(
      (respuesta) => res.json({ respuesta })
    );
    console.log(tinerarydb);
  },
     

}



module.exports =itinerariesControllers

