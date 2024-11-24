import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para redirecionamento
import "./Login.css"; // Importando o CSS

const LoginPage = () => {
  const [usuario, setUsuario] = useState(""); // Estado para armazenar o nome de usuário
  const [senha, setSenha] = useState(""); // Estado para armazenar a senha
  const [erro, setErro] = useState(""); // Estado para controlar as mensagens de erro
  const navigate = useNavigate(); // Hook de navegação do React Router (apenas uma vez)

  // Função para lidar com a submissão do formulário
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usuario_sec: usuario, senha_sec: senha }),
      });

      // Verificar a resposta da API
      const data = await response.json();
      console.log("Resposta da API:", data); // Verifique o que a API retornou

      if (response.ok) {
        navigate("/inicio");
      } else {
        setErro(data.message || "Erro no login"); // Caso haja erro no login
      }
    } catch (err) {
      console.error("Erro de conexão:", err);
      setErro("Erro ao tentar fazer login");
    }
  };

  return (
    <section className="container">
      <header className="left-panel">
        <h2>Agendamento</h2>
      </header>
      <section className="right-panel">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <span className="icon">
              <i className="fas fa-user"></i>
            </span>
            <input
              type="text"
              placeholder="Usuário"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
              aria-label="Usuário"
            />
          </div>
          <div className="input-container">
            <span className="icon">
              <i className="fas fa-lock"></i>
            </span>
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              aria-label="Senha"
            />
          </div>
          <button type="submit" aria-label="Entrar">
            Entrar
          </button>
        </form>
        {erro && <div className="error-message">{erro}</div>}
      </section>
    </section>
  );
};

export default LoginPage;
