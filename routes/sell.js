const { router } = require('./config_routes.js')

router.get('/venda', (req, res) => {
  res.render('pages/sell.hbs')
})

router.post('/finalizar', (req, res) => {
  const adress = req.body.adress
  const cpf = req.body.cpf

  console.log(cpf)
  console.log(adress)
  res.status(200)
})

module.exports = router