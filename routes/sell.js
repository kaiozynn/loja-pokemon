const { router } = require('./config_routes.js')

router.get('/venda', (req, res) => {
  const image = req.query.imagem
  res.render('pages/sell.hbs', {image})
})

router.post('/compra', (req, res) => {
  console.log(req.body)
})

module.exports = router