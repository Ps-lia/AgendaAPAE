// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./paginas/Login/Login";
import Inicio from "./paginas/Inicio/Inicio";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} /> {/* Rota de login */}
          <Route path="/inicio" element={<Inicio />} />{" "}
          {/* Rota para a página inicial */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
