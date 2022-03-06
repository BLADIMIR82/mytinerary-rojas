
import Cards from "../componentes/cards"
import WelcomeCities from "../componentes/welcomecities";
import ButtonHome from "../componentes/buttomhome"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useEffect,useState } from "react";
import axios from "axios"


function Cities() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [input,setInput]=useState()
  const [apidata, setApiData ]= useState()

  useEffect(()=>{

  axios.get(`http://localhost:4000/api/allcities`)
  .then(respuesta=>setApiData(respuesta.data.response.ciudades))
},[]) 

function filterCards (event) {

  setInput(apidata.filter(city=> city.name.toLowerCase().startsWith(event.target.value.toLowerCase().trim())))

}

  return (
     
    <div>

      <ButtonHome />
      <WelcomeCities/>
     

      
      <div  className="divinput" >
       <input onKeyUp={filterCards} className="input1" type="text" placeholder="Search City !!" /> 
      </div>
     
     
      < Cards search={input} />
      
      
     </div>
    
   
  );
}

export default Cities;