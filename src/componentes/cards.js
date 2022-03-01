import * as React from 'react';
import {Link as LinkRouter} from "react-router-dom"
import { useEffect,useState } from "react";
import axios from "axios"
import Loader from "../componentes/loader"

export default function Cards(props) {
console.log(props)
  const [data, setData] = useState()
   
  useEffect(()=>{
    if(props.search === undefined){
      
      axios.get("http://localhost:4000/api/allcities")
      .then(respuesta=>setData(respuesta.data.response.ciudades))


    }else{
      setData(props.search)
    }

  
  },[props.search])


  return (
    
   <div className='cardsninamics'> 
          <div className='titlecities'>
          <p>Cities</p>
          </div>
    {data?.length !== 0?( data?.map(evento=>
        <div className='cardsdinamics1'>
      
       <LinkRouter  to={`/detalle/${evento._id}`}> <img className="imagenescard" src={process.env.PUBLIC_URL+ `/imagenes/${evento.image}`} /></LinkRouter>
        
          <div className="title-cardcities">
         <LinkRouter className="title-card" to={`/detalle/${evento._id}`}>{evento.name}</LinkRouter>
         </div>

      </div>
      
    )):<Loader />}
    </div>
  )
}
