const express = require("express");
const bcrypt = require("bcrypt");
const pool = require("../db");
const router = express.Router();

// Rota para o administrador cadastrar um novo usuário
router.post("/cadastrar-usuario", async (req, res) => {
  const { usuario_sec, senha_sec } = req.body;

  try {
    // Verifica se o usuário já existe
    const result = await pool.query(
      "SELECT * FROM secretaria WHERE usuario_sec = $1",
      [usuario_sec]
    );

    if (result.rows.length > 0) {
      return res.status(400).json({ message: "Usuário já existe!" });
    }

    // Criptografa a senha
    const saltRounds = 10;
    const senhaCriptografada = await bcrypt.hash(senha_sec, saltRounds);

    // Insere o novo usuário no banco
    await pool.query(
      "INSERT INTO secretaria (usuario_sec, senha_sec) VALUES ($1, $2)",
      [usuario_sec, senhaCriptografada]
    );

    res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
});

module.exports = router;
