import axios from 'axios';

const citiesActions = {
    
    fetchearCities: () =>{
       return async(dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/allcities')
            dispatch({type:'fetch', payload:res.data.response.ciudades})
       }
    },
    
    fetchearUnaCiudad: (id) =>{
        return async (dispatch, getState) => {
            try {

                const respuesta = await axios.get("http://localhost:4000/api/allcities/"+id)
                console.log(respuesta)
                return(respuesta.data.response)

            }catch(err){
                console.log(err)
            }
        }
    },   
    borrarCities: (id)=>{
        return async(dispatch, getState) => {
            try {
            
                const respuesta = await axios.delete('http://localhost:4000/api/allcities/'+id)

                dispatch({type:'delete', payload:respuesta.data.respuesta})

            }catch(err){
                console.log(err)
            }
        }
    },
    filtrarCities: (cities, value)=>{
       
        return (dispatch,getState)=>{
            dispatch({type:'filtro', payload:{cities, value}})
        }
    },
    cargarCities: (name,cities)=>{
        return async(dispatch,getState)=>{
            const respuesta = await axios.post('http://localhost:4000/api/allcities',{name,cities})
            dispatch({type:'cargarCity', payload:respuesta.data.respuesta})

        }
    }





}

export default citiesActions;
     