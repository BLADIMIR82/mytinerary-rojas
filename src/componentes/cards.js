import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent'; 
import Typography from '@mui/material/Typography';
import {Link as LinkRouter} from "react-router-dom"
import { useEffect,useState } from "react";
import axios from "axios"

export default function Cards(props) {

  const [data, setData] = useState()
  console.log(props.search)
  useEffect(()=>{
    if(props.search === undefined){
      
      axios.get("http://localhost:4000/api/allcities")
      .then(respuesta=>setData(respuesta.data.response.ciudades))
    }else{
      setData(props.search)
    }

    console.log(data)
  },[props.search])


  return (
    
   <div className='cardsninamics'> 
          <div className='titlecities'>
          <p>Cities</p>
          </div>
    {data?.map(evento=>
        <div className='cardsdinamics1'>
      
       <LinkRouter  to={`/detalle/${evento.id}`}> <img className="imagenescard" src={process.env.PUBLIC_URL+ `/imagenes/${evento.image}`} /></LinkRouter>
     <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          <div className="title-cardcities">
         <LinkRouter className="title-card" to={`/detalle/${evento.id}`}>{evento.name}</LinkRouter>
         </div>
        </Typography>

      </CardContent>
     
      </div>
      
    )}
    </div>
  )
}
