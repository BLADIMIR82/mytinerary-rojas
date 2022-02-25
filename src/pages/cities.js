import { width } from "@mui/system";
import Cards from "../componentes/cards"
import WelcomeCities from "../componentes/welcomecities";
import ButtonHome from "../componentes/buttomhome"
import InputSearch from "../componentes/input"
import React, {useEffect} from "react";
import Counter from "../componentes/example"


function Cities() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
     <div>
      <ButtonHome />
      <WelcomeCities/>
      <InputSearch />
      <Counter />
      < Cards />
      
     </div>
   
  );
}

export default Cities;