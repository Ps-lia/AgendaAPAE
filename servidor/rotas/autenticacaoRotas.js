// servidor/rotas/autenticacaoRotas.js
const express = require("express");
const bcrypt = require("bcrypt");
const pool = require("../db"); // Importando a conexão com o banco de dados
const router = express.Router();

// Rota para autenticar o usuário
router.post("/login", async (req, res) => {
  const { usuario_sec, senha_sec } = req.body;

  try {
    // Consulta ao banco de dados para verificar se o usuário existe
    const result = await pool.query(
      "SELECT * FROM secretaria WHERE usuario_sec = $1",
      [usuario_sec]
    );

    // Se o usuário não existe, retorna erro
    if (result.rows.length === 0) {
      return res.status(401).json({ message: "Usuário não encontrado!" });
    }

    // Compara a senha fornecida com a senha criptografada no banco
    const senhaCorreta = await bcrypt.compare(
      senha_sec,
      result.rows[0].senha_sec
    );

    if (senhaCorreta) {
      res.status(200).json({ message: "Login bem-sucedido!" });
    } else {
      res.status(401).json({ message: "Senha incorreta!" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
});

module.exports = router;
