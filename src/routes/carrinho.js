const { router } = require('./config_routes.js')

let item = [];
let title = [];
let quantidade = [];

router.get('/carrinho', (req, res) => {

  //Envio dos dados em de array para o arquivo HBS 
  
  res.render('pages/carrinho.hbs', {
    dados: {
        item, 
        title,
        quantidade
      }
    })
    // Zera o array para a próxima adição
    quantidade = []
});


router.post('/pag-array', (req, res) => {
  let cart_itens = req.body.arrayImgs // Recebe o array de imagens
  let name_itens = req.body.name_itens // Recebe o nome que está na identificação do item na loja
  res.json({msg: 'Imagens recebidas'})

  function contagemItem(item) {
    let contagem = {} // faz a contagem dos itens armazena em um array colocando o nome do elemento como chave do objeto
    // e depois a quanntidade como valor
  
    for (let index of item) { // Onde realiza a contagem
      if(contagem[index]) {
        contagem[index]++ // Caso exista adiciona +1
      } else {
        contagem[index] = 1 // Caso n exista passa a ter valor 1
      }
    }
    return contagem
  }

  // Armazena os itens contados em formato de um objeto
  let contagem_images = contagemItem(cart_itens) 
  let contagem_textH1 = contagemItem(name_itens) 

  // Transforma as chaves em arrays
  item = Object.keys(contagem_images)
  title = Object.keys(contagem_textH1)

  item.forEach((element, index) => {
    quantidade.push(contagem_images[item[index]])
  })
})

module.exports = router