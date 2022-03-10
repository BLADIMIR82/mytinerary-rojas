import axios from 'axios';

const itinerariesActions = {
    
    fetchearItinerary: () =>{
      
       return async(dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/allitineraries')
            dispatch({type:'fetchItinerary', payload:res.data.response.itineraries})
       }
    },
    
    fetchearUnaItinerary: (id) =>{
        return async (dispatch, getState) => {
            const res = await axios.get("http://localhost:4000/api/allitineraries/"+id)
         
            dispatch({type:'fetchearUnaItinerary', payload:res.data.response.itinerary})
          
        }
    },

    borrarItinerary: (id)=>{
        return async(dispatch, getState) => {
            try {
            
                const respuesta = await axios.delete('http://localhost:4000/api/allitineraries/'+id)

                dispatch({type:'deleteItinerary', payload:respuesta.data.respuesta})

            }catch(err){
                console.log(err)
            }
        }
    },
    filtrarItinerary: (cities, value)=>{
       
        return (dispatch,getState)=>{
            dispatch({type:'filtroItinerary', payload:{cities, value}})
        }
    },
    cargarItinerary: (name,cities)=>{
        return async(dispatch,getState)=>{
            const respuesta = await axios.post('http://localhost:4000/api/allitineraries',{name,cities})
            dispatch({type:'cargarItinerary', payload:respuesta.data.respuesta})

        }
    }





}

export default itinerariesActions;