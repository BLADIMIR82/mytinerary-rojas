
import Cards from "../componentes/cards"
import WelcomeCities from "../componentes/welcomecities";
import ButtonHome from "../componentes/buttomhome"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useEffect,useState } from "react";
import axios from "axios"
import {connect} from "react-redux"
import citiesActions from "../redux/actions/citiesAction";


function Cities(props) {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const [input,setInput]=useState()
  const [apidata, setApiData ]= useState()
  
  useEffect(()=>{
    props.fetchearCities()
 
  
  },[]) 
  
  function filterCards (event) {
    
    props.filtrarCities(props.cities, event.target.value)
    
  }
  

  return (
     
    <div>

      <ButtonHome />
      <WelcomeCities/>
     

      
      <div  className="divinput" >
       <input onKeyUp={filterCards} className="input1" type="text" placeholder="Search City !!" /> 
      </div>
     
     
      < Cards cities={props.filterCities} />
      
      
     </div>
    
   
  );
}
const mapDispatchToProps  ={
  fetchearCities:citiesActions.fetchearCities,
  filtrarCities:citiesActions. filtrarCities,

}

const mapStateToProps = (state) =>{
  return{
      cities:state.citiesReducer.cities,
      auxiliar: state.citiesReducer.auxiliar,
      filterCities:state.citiesReducer.filterCities
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities);

