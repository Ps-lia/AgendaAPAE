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

    // Se a senha estiver correta
    if (senhaCorreta) {
      // Login bem-sucedido
      res.status(200).json({ message: "Login bem-sucedido!", success: true });
    } else {
      // Falha no login
      res
        .status(401).json({ message: "Usuário ou senha inválidos!", success: false });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro interno do servidor", success: false });
  }
});

module.exports = router;
