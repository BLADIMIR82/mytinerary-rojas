import axios from 'axios';

const activitiesActions = {
    
    fetchearActivity: () =>{
      
       return async(dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/allactivities')
            dispatch({type:'fetchActivities', payload:res.data.response.activities})
       }
    },
    
    filterActivityforItinerary: (id) => {

        return async (dispatch, getState) => {
          const res = await axios.get('http://localhost:4000/api/allactivities/itinerary/${id}')
          dispatch({ type: "filterActivitiesForItinerary", payload: res.data.respuesta })
        }
      },

    fetchearUnaItinerary: (id) =>{
        return async (dispatch, getState) => {
            const res = await axios.get("http://localhost:4000/api/allitineraries/"+id)
         
            dispatch({type:'fetchearUnaItinerary', payload:res.data.response.itinerary})
          
        }
    },

   
  
   





}

export default itinerariesActions;