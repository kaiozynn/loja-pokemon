const { router } = require('./config_routes.js')

router.get('/', (req, res) => {
  res.render("pages/shop.hbs")
})

module.exports = router