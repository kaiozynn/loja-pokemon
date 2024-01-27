const { router } = require('./config_routes.js')

let cart_itens = [];
let name_itens = []

router.get('/carrinho', (req, res) => {
  res.render('pages/carrinho.hbs', {cart_itens, name_itens})
});

router.post('/pag-array', (req, res) => {
  cart_itens = req.body.arrayImgs
  name_itens = req.body.name_itens
  res.json({msg: 'Imagens recebidas'})
})

module.exports = router