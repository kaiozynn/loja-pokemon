const { router } = require('./config_routes.js')

router.get('/', (req, res) => {
  res.render("admin/shop.hbs")
})

module.exports = router