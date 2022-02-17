import logo from "./logo.svg";
import "./App.css";
import ResponsiveAppBar from "./componentes/Navbar";
import Carrousel from "./componentes/Carrousel"
  
function App() {
  return (
     <div clasName="App">
      <ResponsiveAppBar />
      <h1> carrousel de imagenes</h1>
      <Carrousel />

        
   
      </div>
   
  );
}

export default App;
