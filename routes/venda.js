const { parentFolder, router } = require('./config_routes.js')

router.get('/venda', (req, res) => {
  res.sendFile(parentFolder + "/public/pag-venda/venda.html")
})

module.exports = router