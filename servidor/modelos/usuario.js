// servidor/modelos/usuario.js
const client = require("../configuracoes/bancoDados");

const criarUsuario = async (usuario, senha) => {
  try {
    const resultado = await client.query(
      "INSERT INTO secretaria (usuario_sec, senha_sec) VALUES ($1, $2) RETURNING *",
      [usuario, senha]
    );
    return resultado.rows[0];
  } catch (erro) {
    console.error("Erro ao criar usuário:", erro);
    throw erro;
  }
};

const buscarUsuarioPorNome = async (usuario) => {
  try {
    const resultado = await client.query(
      "SELECT * FROM secretaria WHERE usuario_sec = $1",
      [usuario]
    );
    return resultado.rows[0];
  } catch (erro) {
    console.error("Erro ao buscar usuário:", erro);
    throw erro;
  }
};

module.exports = { criarUsuario, buscarUsuarioPorNome };
