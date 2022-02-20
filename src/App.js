import "./App.css";
import ResponsiveAppBar from "./componentes/Navbar";
import Footer from "./componentes/footer"
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home"
import cardsDetalle from "./componentes/detalle"
import Cities from "./pages/cities"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
       <BrowserRouter>
     <div clasName="App">

      <ResponsiveAppBar/>
      <Routes>
      <Route path="*" element ={<Home />} /> 
      <Route path="/cities" element ={<Cities />} />
      <Route path="/cards/detalle:id" element ={<cardsDetalle/>} />
      
      </Routes>
      <Footer />
   
       </div>
      </BrowserRouter>
          
   
  );
}

export default App;
