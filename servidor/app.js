// servidor/app.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const autenticacaoRotas = require("./controladores/autenticacaoControlador"); // importando controlador de autenticação

const app = express();

// Configuração CORS
app.use(cors({
    origin: "http://localhost:3000", // Permitir apenas requisições do frontend local
    methods: "GET,POST,PUT,DELETE", // Permitir esses métodos
    allowedHeaders: "Content-Type,Authorization", // Permitir esses headers
  }));

// Configuração do body-parser para processar JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Definindo a rota de login
app.use("/api", autenticacaoRotas);

// Iniciar o servidor na porta 3001
app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
