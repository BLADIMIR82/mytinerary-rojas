import * as React from 'react';
import {useParams} from 'react-router-dom'
import { useEffect,useState } from "react";
import axios from "axios"
// import Itiniraries from "./itineraries"
import RecipeReviewCard from "./itinirariesdos"
export default function CardsDetalle() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    const {id} = useParams()
    

    const [data, setData] = useState()
   
    useEffect(()=>{
    axios.get(`http://localhost:4000/api/allcities`)
    .then(respuesta=>setData(respuesta.data.response.ciudades.filter(cities => cities._id === id)))
  })

  return (
    
    <div className= "cardsDetalle">
    {data?.map(evento=>

<div class="cards">
<div class="card">
  <h2 class="card-title">{evento.name}</h2>
  <img src={process.env.PUBLIC_URL+ `/imagenes/${evento.image}`} />
  <p class="card-desc">{evento.info}</p>
</div>
</div>
    )}
    <div>
{/* <Itiniraries /> */}
<RecipeReviewCard />
      
    </div>

    </div>
  )
}


 