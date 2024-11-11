// servidor/app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const autenticacaoRotas = require('./rotas/autenticacao');

// Configuração do body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Roteamento
app.use('/api', autenticacaoRotas);

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
