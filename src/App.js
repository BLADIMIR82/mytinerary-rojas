import "./App.css";
import ResponsiveAppBar from "./componentes/Navbar";
import Carrousel from "./componentes/Carrousel"
import Hero from "./componentes/Hero"
import CalltoAction  from "./componentes/calltoaction"
import Footer from "./componentes/footer"
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
     <div clasName="App">
      <ResponsiveAppBar/>
      <Hero />
      <CalltoAction  />
      <Carrousel />
      <Footer />
   
      
          
       </div>
   
  );
}

export default App;
