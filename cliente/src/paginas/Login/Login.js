import React, { useState } from "react";
import "./Login.css"; // Importando o CSS
import logo from "../../assets/imagens/APAE-Logo.png"; // Importando a imagem corretamente

const LoginPage = () => {
  const [isOverlayVisible, setOverlayVisible] = useState(true); // Estado para controlar a visibilidade do overlay
  const [usuario, setUsuario] = useState(""); // Estado para armazenar o nome de usuário
  const [senha, setSenha] = useState(""); // Estado para armazenar a senha
  const [erro, setErro] = useState(""); // Estado para controlar as mensagens de erro

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Fazendo a requisição de login à API
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usuario_sec: usuario, senha_sec: senha }),
      });

      const data = await response.json();

      if (response.status === 200) {
        // Redirecionar ou fazer qualquer outra ação quando o login for bem-sucedido
        alert(data.message); // Exemplo de mensagem de sucesso
      } else {
        setErro(data.message); // Definir a mensagem de erro
      }
    } catch (err) {
      console.error("Erro ao fazer login:", err);
      setErro("Erro interno. Tente novamente mais tarde.");
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
        {erro && <div className="error-message">{erro}</div>}{" "}
        {/* Exibindo a mensagem de erro */}
      </section>
      <aside
        className={`overlay ${isOverlayVisible ? "left" : "right"}`}
        onClick={toggleOverlay}
        style={{
          transform: isOverlayVisible ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <span className="overlay-symbol">{isOverlayVisible ? ">>" : "<<"}</span>
        <img src={logo} alt="Imagem da Tampa" className="overlay-image" />
      </aside>
    </section>
  );
};

export default LoginPage;
