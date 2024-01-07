const { router, cep_promise } = require('./config_routes.js')

router.post('/api', async (req, res) => {
  const cep = req.body.cep
  
  await cep_promise(cep, {
    providers: ['correios']
  }).then((data) => {
    const dados_cep = data
    res.json(dados_cep)
  }).catch((err) => {
    console.error(err)
    res.json({err: 404})
  })
})

module.exports = router