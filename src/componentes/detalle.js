import * as React from 'react';
import {useParams} from 'react-router-dom'
import { useEffect,useState } from "react";
import axios from "axios"
// import Itiniraries from "./itineraries"
import RecipeReviewCard from "./itinirariesdos"

import {connect} from "react-redux";
import citiesActions from "../redux/actions/citiesAction";
import itinerariesActions from '../redux/actions/itinerariesAction';

function CardsDetalle(props) {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    const {id} = useParams()
    

    const [card, setCard] = useState({element:props.cities.find((i)=>i._id.toString()===id.toString())})
   

  // useEffect(()=>{
  //   if (props.cities.lenght<1){
  //     props.fetchearUnaCiudad(id)
  //     .then ((traerId)=>setCard({element:traerId}))
  //   }

  // },[])
  useEffect(()=>{


    if (props.cities.length < 1){

      props.fetchearUnaCiudad(id)
      .then((traerId)=>setCard({element:traerId}))
    }

  },[])

  if (!card.element){
    return (<h1>Loading..</h1>)
  }

 

   
  return (
    
    <div className= "cardsDetalle">
   
<div class="cards">
<div class="card">
  <h2 class="card-title">{card.element.name}</h2>
  <img src={process.env.PUBLIC_URL+ `/imagenes/${card.element.image}`} />
  <p class="card-desc">{card.element.info}</p>
</div>
</div>
    
    <div>
{/* <Itiniraries /> */}
<RecipeReviewCard id={id}/>
     
    </div>

    </div>
  )
}
const mapDispatchToProps  ={
  fetchearCities:citiesActions.fetchearCities,
  fetchearItinerary:itinerariesActions.fetchearItinerary,
  filtrarCities:citiesActions. filtrarCities,
  fetchearUnaCiudad: citiesActions.fetchearUnaCiudad

}

const mapStateToProps = (state) =>{
  return{
      cities:state.citiesReducer.cities,
      auxiliar: state.citiesReducer.auxiliar,
      filterCities:state.citiesReducer.filterCities,
      itineraries:state.itinerariesReducer.itineraries
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsDetalle)


 