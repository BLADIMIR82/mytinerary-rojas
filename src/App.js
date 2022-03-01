import "./App.css";
import ResponsiveAppBar from "./componentes/Navbar";
import Footer from "./componentes/footer"
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home"
import CardsDetalle from "./componentes/detalle"
import Cities from "./pages/cities"
import PruebaApi from "./componentes/Frommyapi"
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  

  return (
       <BrowserRouter>
     <div clasName="App">

      <ResponsiveAppBar/>
      <Routes>
      <Route path="*" element ={<Home />} /> 
      <Route path="/cities" element ={<Cities />} />
      <Route path="detalle/:id" element ={<CardsDetalle />} />
      <Route path="pruebaApi/" element = {<PruebaApi />}/>
      </Routes>
      <Footer />
   
       </div>
      </BrowserRouter>
          
   
  );
}

export default App;
