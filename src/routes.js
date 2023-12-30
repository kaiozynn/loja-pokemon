const { app_loja_pokemon, parentFolder, port } = require('./main.js');

app_loja_pokemon.get('/', (req, res) => {
  res.sendFile(parentFolder + "/public/pag-loja/loja.html")
})

app_loja_pokemon.get('/vender', (req, res) => {
  res.sendFile(parentFolder + "/public/pag-venda/venda.html")
})

app_loja_pokemon.listen(process.env.PORT ? Number((process.env.PORT)) : port, () => console.log('Servidor ON!!'))