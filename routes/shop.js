const { parentFolder, router } = require('./config_routes.js')

router.get('/', (req, res) => {
  res.sendFile(parentFolder + "/public/pag-loja/loja.html")
})

module.exports = router