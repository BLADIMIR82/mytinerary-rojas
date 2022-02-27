import * as React from 'react';
import {useParams} from 'react-router-dom'
import { useEffect,useState } from "react";
import axios from "axios"



export default function CardsDetalle() {
    const {id} = useParams()
    // const card1 = cities.filter(dato=> dato.id == id)

    const [data, setData] = useState([])
    console.log(data)
    useEffect(()=>{
    axios.get(`http://localhost:4000/api/allcities/?`)

    .then(respuesta=>setData(respuesta.data.response.ciudadesfilter(cities => cities._id === id)))
  },[id])

  return (
    
    <div className= "cardsDetalle">
        <img src="../imagenes/under.jpg" width={800} alt='img'></img>
    {data?.map(evento=>
        <div  className='cardsid'>
        <img className="imagenes" src={process.env.PUBLIC_URL+ `/imagenes/${evento.image}`} />
         {evento.name}
         <div>
         {evento.info}
         </div>
      
      </div>
    )}
    </div>
  )
}
