//Configuração do app
  const express = require('express');
  const handlebars = require('express-handlebars');
  const { json } = require('body-parser');
  const app_loja_pokemon = express();
  const react = require('react');
  const reactDOM = require('react-dom');
  const port = 8080;

//Configuração de pastas
  const path = require('path');
  const style_path_loja = path.join(__dirname + "/public/pag-loja");
  const style_path_venda = path.join(__dirname + "/public/pag-venda");
  const stylle_path_carrinho = path.join(__dirname + "/public/pag-carrinho");

//Configuração Handlebars
  app_loja_pokemon.engine('.hbs', handlebars.engine({ defaultLayout: 'main',extname: '.hbs' }));
  app_loja_pokemon.set('views engine', '.hbs');

//Configurações da leitura de dados
  app_loja_pokemon.use(express.json());
  app_loja_pokemon.use(express.urlencoded({ extended: true }));

//configuração dos arquivos estáticos
  app_loja_pokemon.use(express.static(style_path_loja));
  app_loja_pokemon.use(express.static(style_path_venda));
  app_loja_pokemon.use(express.static(stylle_path_carrinho));

//Configuração das rotas
  const shop = require('./src/routes/shop.js');
  app_loja_pokemon.use('/', shop);

  const venda = require('./src/routes/sell.js');
  app_loja_pokemon.use('/venda', venda);

  const carrinho = require('./src/routes/carrinho.js');
  app_loja_pokemon.use('/carrinho', carrinho);

  const cep_api = require('./src/routes/cep_api.js');
  app_loja_pokemon.use('/api', cep_api);
  
//Outros
app_loja_pokemon.listen(process.env.PORT ? Number((process.env.PORT)) : port, () => console.log('Servidor ON!!'));