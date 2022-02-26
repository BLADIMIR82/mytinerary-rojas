import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cities from "./datos"
import {useParams} from 'react-router-dom'


export default function CardsDetalle() {
    const {id} = useParams()
    const card1 = cities.filter(dato=> dato.id == id)

  return (
    
    <div className= "cardsDetalle">
        <img src="../imagenes/under.jpg" width={600} alt='img'></img>
    {card1?.map(evento=>
    <Card sx={{ maxWidth: 300 }}>
        <img className="imagenes" src={process.env.PUBLIC_URL+ `/imagenes/${evento.image}`} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {evento.name}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    )}
    </div>
  )
}
