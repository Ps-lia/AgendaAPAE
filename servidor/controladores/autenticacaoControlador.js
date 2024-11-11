// servidor/controladores/autenticacao.js
const bcrypt = require("bcrypt");
const usuarioModel = require("../modelos/usuario");

const autenticarUsuario = async (req, res) => {
  const { usuario, senha } = req.body;

  try {
    const usuarioExistente = await usuarioModel.buscarUsuarioPorNome(usuario);

    if (!usuarioExistente) {
      return res.status(404).json({ erro: "Usuário não encontrado" });
    }

    const senhaValida = await bcrypt.compare(senha, usuarioExistente.senha_sec);

    if (!senhaValida) {
      return res.status(401).json({ erro: "Senha incorreta" });
    }

    res.status(200).json({ mensagem: "Login bem-sucedido" });
  } catch (erro) {
    console.error("Erro na autenticação:", erro);
    res.status(500).json({ erro: "Erro interno do servidor" });
  }
};

module.exports = { autenticarUsuario };
