import { width } from "@mui/system";
import Cards from "../componentes/cards"
import WelcomeCities from "../componentes/welcomecities";
import ButtonHome from "../componentes/buttomhome"
import InputSearch from "../componentes/input"


function Cities() {
  return (
     <div>
      <ButtonHome />
      <WelcomeCities/>
      <InputSearch />
      < Cards />
      
     </div>
   
  );
}

export default Cities;