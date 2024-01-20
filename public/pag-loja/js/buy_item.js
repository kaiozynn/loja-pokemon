const img = document.querySelectorAll('.img');
const linkCard = document.querySelectorAll('.compra');
const container = document.querySelectorAll('.container')[0];
const cont_item = document.querySelector('.cont-item');
const add_carrinho = document.querySelector('.add-carrinho');

var contagem = 0

add_carrinho.addEventListener('click', () => {
  contagem++
  cont_item.classList.remove('displayNone')
  cont_item.innerHTML = contagem
})

linkCard.forEach((link, index) => {
  link.addEventListener('click', () => {
    const img_atual = document.getElementsByClassName('img')[index];
    const src_img = img_atual.getElementsByTagName('img')[0].getAttribute('src');
    
    window.open(`/venda?imagem=${encodeURIComponent(src_img)}`, "_self")
  })
})