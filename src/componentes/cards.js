import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent'; 
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cities from "./datos"
import {Link as LinkRouter} from "react-router-dom"

export default function Cards() {
  return (
    
   <div className='cardsninamics'> 
          <div className='titlecities'>
          <p>Cities</p>
          </div>
    {cities.map(evento=>
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
