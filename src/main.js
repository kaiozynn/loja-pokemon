const { json } = require('body-parser');
const path = require('path');
const express = require('express');
const app_loja_pokemon = express();
const port = 8080;
const parentFolder = path.join(__dirname, "..");
const style_path_loja = path.join(parentFolder + "/public/pag-loja")
const style_path_venda = path.join(parentFolder+"/public/pag-venda")

app_loja_pokemon.use(express.json());

//configuração das rotas
app_loja_pokemon.use(express.static(style_path_loja))
app_loja_pokemon.use(express.static(style_path_venda))
app_loja_pokemon.use(express.urlencoded({ extended:true }))

module.exports = {
  app_loja_pokemon,
  parentFolder,
  port,
  express
}
