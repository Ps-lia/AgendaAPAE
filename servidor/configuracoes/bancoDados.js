// servidor/configuracoes/database.js
const { Pool } = require("pg");
require("dotenv").config(); // Carrega variáveis de ambiente do arquivo .env

// Criação do pool de conexões com o banco de dados
const pool = new Pool({
  host: process.env.DB_HOST, // Definido no .env
  port: process.env.DB_PORT, // Definido no .env
  user: process.env.DB_USER, // Definido no .env
  password: process.env.DB_PASSWORD, // Definido no .env
  database: process.env.DB_NAME, // Definido no .env
});

// Teste de conexão com o banco de dados
pool
  .connect()
  .then(() => console.log("Conectado ao banco de dados com sucesso!"))
  .catch((err) => console.error("Erro ao conectar ao banco de dados", err));

// Exporta o pool para ser utilizado nas consultas
module.exports = pool;
