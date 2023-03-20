import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from "./components/Navbars";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Pokemones from './views/Pokemones';
import Home from "./views/Home";
import DetallePersonaje from "./views/DetallePersonaje";
import "./style.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbars></Navbars>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:idPokemon" element={<DetallePersonaje />} />
          <Route path="*" element={<div>Error 404 not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
