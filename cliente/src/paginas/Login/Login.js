// src/LoginPage.js
import React, { useState } from "react";
import "./Login.css"; // Importando o CSS
import logo from "../../assets/imagens/APAE-Logo.png"; // Importando a imagem corretamente

const LoginPage = () => {
  const [isOverlayVisible, setOverlayVisible] = useState(true); // Estado para controlar a visibilidade do overlay

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Adicione a lógica de login aqui
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
              required
              aria-label="Senha"
            />
          </div>
          <button type="submit" aria-label="Entrar">
            Entrar
          </button>
        </form>
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
