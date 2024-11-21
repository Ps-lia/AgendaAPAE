// servidor/app.js
const express = require("express");
const bodyParser = require("body-parser");
const autenticacaoRotas = require("./controladores/autenticacao"); // Importando o controlador de autenticação

const app = express();

// Configuração do body-parser para processar JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Definindo a rota de login
app.use("/api", autenticacaoRotas);

// Iniciar o servidor na porta 3001
app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
