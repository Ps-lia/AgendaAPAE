// servidor/controladores/autenticacao.js
const express = require("express");
const router = express.Router();
const usuarioModel = require("../modelos/usuario"); // Importa o modelo de usuário

// Rota para login
router.post("/login", async (req, res) => {
  const { usuario_sec, senha_sec } = req.body; // Recebe os dados da requisição

  try {
    // Tenta buscar o usuário no banco de dados
    const usuario = await usuarioModel.buscarUsuarioPorNome(usuario_sec);

    // Verifica se o usuário existe e se a senha bate
    if (!usuario || usuario.senha_sec !== senha_sec) {
      return res.status(401).json({ message: "Usuário ou senha incorretos" });
    }

    // Caso o login seja bem-sucedido, retornamos uma mensagem ou um token de autenticação
    return res.status(200).json({ message: "Login bem-sucedido!" });
  } catch (err) {
    console.error("Erro ao tentar fazer login:", err);
    return res.status(500).json({ message: "Erro no servidor" });
  }
});

module.exports = router;
