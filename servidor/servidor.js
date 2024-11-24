require("dotenv").config(); // Carrega as variáveis de ambiente do arquivo .env
const { Pool } = require("pg"); // Importa o Pool para gerenciar conexões com o PostgreSQL
const app = require("./app"); // Importa o arquivo app.js com a configuração do Express

// Configuração da conexão com o banco de dados
const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "agenda",
  password: process.env.DB_PASS || "11012005.lia",
  port: process.env.DB_PORT || 5432,
});

// Teste da conexão com o banco de dados
pool.connect((err, client, release) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err.stack);
  } else {
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
    release(); // Libera o cliente após o teste de conexão
  }
});

// Porta definida no .env ou padrão 3001
const PORTA = process.env.PORT || 3001;

// Inicialização do servidor
app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});

// Exporta o pool para uso em outras partes do backend
module.exports = pool;
