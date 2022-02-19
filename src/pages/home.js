import Carrousel from "../componentes/Carrousel"
import Hero from "../componentes/Hero";
import CalltoAction  from "../componentes/calltoaction"

function Home() {
  return (
     <div>
      <Hero />

      <CalltoAction  />

      <Carrousel />
          
       </div>
   
  );
}

export default Home;