const cart_itens = Array.from(document.querySelectorAll(".cart-itens"))
const itens = document.querySelector('.itens')
const h1_item = Array.from(document.querySelectorAll('.item-name'))

let itens_shop = cart_itens.map(item => {
  return item.src
})

let name_item = h1_item.map((item) => {
  return item.innerHTML
})

function contagemItem(item) {
  let contagem = {}

  for (let index of item) {
    if(contagem[index]) {
      contagem[index]++
    } else {
      contagem[index] = 1
    }
  }
  return contagem
}

let contagem_images = contagemItem(itens_shop)
let contagem_textH1 = contagemItem(name_item)

let urls = Object.keys(contagem_images)
let text = Object.keys(contagem_textH1)

urls.forEach((item, index) => {
  const img = document.createElement('img')
  const h1 = document.createElement('h1')
  const div = document.createElement('div')

  img.src = item
  h1.innerHTML = text[index]
  div.innerHTML = contagem_images[urls[index]]
  itens.appendChild(img)
  itens.appendChild(h1)
  itens.appendChild(div)
})