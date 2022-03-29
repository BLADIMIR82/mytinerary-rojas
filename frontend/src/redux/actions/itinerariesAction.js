import axios from 'axios';

const itinerariesActions = {
    
    fetchearItinerary: () =>{
      
       return async(dispatch, getState) => {
            const res = await axios.get('https://mytinerari-rojas.herokuapp.com/api/allitineraries')
            dispatch({type:'fetchItinerary', payload:res.data.response.itineraries})
       }
    },
    
    fetchearUnaItinerary: (id) =>{
       
        return async (dispatch, getState) => {
            const res = await axios.get("https://mytinerari-rojas.herokuapp.com/api/allitineraries/"+id)
         
            dispatch({type:'fetchearUnaItinerary', payload:res.data.response.itinerary})
          
        }
    },

    borrarItinerary: (id)=>{
        return async(dispatch, getState) => {
            try {
            
                const respuesta = await axios.delete('https://mytinerari-rojas.herokuapp.com/api/allitineraries/'+id)

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
            const respuesta = await axios.post('https://mytinerari-rojas.herokuapp.com/api/allitineraries',{name,cities})
            dispatch({type:'cargarItinerary', payload:respuesta.data.respuesta})

        }
    },

    likeDislike: (id) => {
        console.log(id)
        const token = localStorage.getItem('token')
        return async () => {
            try {
                let response = await axios.put(`https://mytinerari-rojas.herokuapp.com/api/likeDislike/${id}`, {},
                {headers: {
                    Authorization: "Bearer "+token
                    }
                })
                console.log(response) 
                return response
                
            }catch (error) {
                console.log(error)
            }
        }
    }





}

export default itinerariesActions;