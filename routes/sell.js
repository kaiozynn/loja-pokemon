const { router, cep_promise } = require('./config_routes.js')

router.get('/venda', (req, res) => {
  res.render('pages/sell.hbs')
})

router.get('/cartao', (req, res) => {
  res.render('pages/cartao.hbs');
})

router.post('/compra', (req, res) => {
  console.log(req.body)
})

module.exports = router