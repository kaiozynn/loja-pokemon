const { router } = require('./config_routes.js')

router.get('/carrinho', (req, res) => {
  res.render('pages/carrinho.hbs')
})

module.exports = router