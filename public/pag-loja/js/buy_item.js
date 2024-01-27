const img = document.querySelectorAll('.img');
const button_carrinho = document.querySelector('.btn-carr');
const linkCard = document.querySelectorAll('.compra');
const container = document.querySelectorAll('.container');
const cont_item = document.querySelector('.cont-item');

var contagem = 0;
var arrayImgs = [];
var name_itens = [];

linkCard.forEach((link, index) => {
  link.addEventListener('click', () => {
    const img_atual = document.getElementsByClassName('img')[index];
    const src_img = img_atual.getElementsByTagName('img')[0].getAttribute('src');
    
    window.open(`/venda?imagem=${encodeURIComponent(src_img)}`, "_self")
  })
});

//criação dos itens para o container

container.forEach((item, index) => {

  const button_add = document.createElement('button');
  button_add.className = "add-carrinho";
  button_add.innerHTML = "ADD-carrinho";

  item.appendChild(button_add)

  button_add.addEventListener('click', () => {
    const img_atual = document.getElementsByClassName('img')[index];
    const src_img = img_atual.getElementsByTagName('img')[0].getAttribute('src');
    const name_item = item.getElementsByTagName('h1')[0].innerHTML

    arrayImgs.push(item.dataset.srcImg = src_img);
    name_itens.push(name_item)

    contagem++
    cont_item.classList.remove('displayNone')
    cont_item.innerHTML = contagem
  })
});

button_carrinho.addEventListener('click', () => {
  fetch('/pag-array', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({arrayImgs, name_itens})
  })
  .then(response => {
    response.json(datas => {
      window.location.href = '/carrinho'
    })
  })
  .catch(err => {
    console.error("Houve um erro: " + err)
  })
});