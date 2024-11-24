import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./paginas/Login/Login"; // Página de Login
import Inicio from "./paginas/Inicio/Inicio"; // Página Inicial
import CadastroAluno from "./paginas/Alunos/Cadastro"; // Página de Cadastro de Aluno
import CadastroProfissional from "./paginas/Profissionais/Cadastro"; // Página de Cadastro de Profissional
import Agenda from "./paginas/Agenda/Agenda"; // Página de Agenda
import PesquisaAluno from "./paginas/Alunos/Pesquisa"; // Página de Pesquisa de Aluno
import PesquisaProfissional from "./paginas/Profissionais/Pesquisa"; // Página de Pesquisa de Profissional
import CadastroAgendamento from "./paginas/Agendamentos/Cadastro"; // Página de Cadastro de Agendamento

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />{" "}
        {/* Rota para a página de login */}
        <Route path="/inicio" element={<Inicio />} />{" "}
        {/* Rota para a página inicial */}
        <Route path="/cadastro-aluno" element={<CadastroAluno />} />{" "}
        {/* Rota para a página de cadastro de aluno */}
        <Route
          path="/cadastro-profissional"
          element={<CadastroProfissional />}
        />{" "}
        {/* Rota para a página de cadastro de profissional */}
        <Route path="/agenda" element={<Agenda />} />{" "}
        {/* Rota para a página de agenda */}
        <Route path="/pesquisa-aluno" element={<PesquisaAluno />} />{" "}
        {/* Rota para a página de pesquisa de aluno */}
        <Route
          path="/pesquisa-profissional"
          element={<PesquisaProfissional />}
        />{" "}
        {/* Rota para a página de pesquisa de profissional */}
        <Route
          path="/cadastro-agendamento"
          element={<CadastroAgendamento />}
        />{" "}
        {/* Rota para a página de cadastro de agendamento */}
      </Routes>
    </Router>
  );
}

export default App;
