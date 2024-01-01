const { router } = require('./config_routes.js')

router.get('/venda', (req, res) => {
  res.render('admin/sell.hbs')
})

module.exports = router