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
      <div className= "cardsninamics">
    {cities.map(evento=>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="100"
        img className="imagenes" src={process.env.PUBLIC_URL+ `/imagenes/${evento.image}`} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <LinkRouter className='buttomlink2' to={`detalle/${evento.id}`}>{evento.name}</LinkRouter>
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <LinkRouter className='buttomlink2' to={`detalle:id/${evento.id}`}><Button size="small">Learn More</Button></LinkRouter>
         
      </CardActions>
    </Card>
    )}
    </div>
  )
}
