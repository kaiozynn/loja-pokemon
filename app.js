//Configuração do app
  const { json } = require('body-parser');
  const express = require('express');
  const app_loja_pokemon = express();
  const port = 8080;

//Configuração de pastas
  const path = require('path');
  const style_path_loja = path.join(__dirname + "/public/pag-loja")
  const style_path_venda = path.join(__dirname + "/public/pag-venda")

//Configurações da leitura de dados
  app_loja_pokemon.use(express.json());
  app_loja_pokemon.use(express.urlencoded({ extended: true }));

//configuração dos arquivos státicos
  app_loja_pokemon.use(express.static(style_path_loja));
  app_loja_pokemon.use(express.static(style_path_venda));

//Configuração das rotas
  const shop = require('./routes/shop.js');
  app_loja_pokemon.use('/', shop);

  const venda = require('./routes/venda.js')
  app_loja_pokemon.use('/venda', venda)
//Outros
app_loja_pokemon.listen(process.env.PORT ? Number((process.env.PORT)) : port, () => console.log('Servidor ON!!'))