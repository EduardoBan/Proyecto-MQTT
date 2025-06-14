//import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import { Inicio } from "./components/Pages/Inicio";
import { Inicio } from "./components/Pages/Inicio/Inicio.js";
// import { Configuracion } from "./components/Pages/Configuracion";
import { Varios } from "./components/Pages/Varios/Varios.js";
// import Registro from "./components/Pages/Registro";
import { Datos } from "./components/Pages/Datos/Datos";
import Grafico from "./components/Pages/Grafico/Grafico.jsx";

import "../node_modules/@fortawesome/fontawesome-svg-core/index.js";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Inicio/Inicio" element={<Inicio />} />
          <Route path="/Grafico/grafico" element={<Grafico />} />
          {/* <Route path="/Configuracion" element={<Configuracion />} /> */}
          {/* <Route path="/Registro" element={<Registro />} /> */}
          <Route path="/Datos" element={<Datos />} />
          <Route path="/Varios" element={<Varios />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
