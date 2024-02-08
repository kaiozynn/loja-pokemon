const value_itens = Array.from(document.querySelectorAll('.quant-item'))

window.addEventListener('resize', () => {
  document.getElementsByClassName('total')[0].style.height = item_card.scrollHeight + 'px'
})

value_itens.map((item, index) => {
  const plus_button = document.querySelectorAll('.plus')[index]
  const min_button = document.querySelectorAll('.min')[index]
  const quant = document.querySelectorAll('.quant')[index]
  let value_quant = Number(quant.value)

  plus_button.addEventListener('click', () => {
    quant.value = ++value_quant
  })

  min_button.addEventListener('click', () => {
    if (value_quant > 0) {
      quant.value = --value_quant
    } else {
      quant.value = 0
    }
  })
})