const input_cep = document.querySelector('#cep');
const form = document.querySelector('#form');
const button_env = document.querySelector('#env');
const container_popup = document.querySelector('.container-popup');
const close_popup = document.querySelector('.close');
const card_options = document.querySelectorAll('.card-option')
const popup = document.querySelector('#popup');
const pay_form = document.querySelector('#pay-form');
const input_street = document.querySelector('#street');
const input_neighborhood = document.querySelector('#neighborhood');
const form_control = document.querySelectorAll('.form-control');
const input_ticket = document.querySelector('#ticket');
const item_escolhido = document.querySelector('.img-escolhida')

form_control.forEach((element) => {
  element.style.backgroundColor = 'rgba(255, 255, 255, 0.543)';
})

card_options.forEach((cards) => {
  let value_card = cards.getElementsByTagName('p')[0];
  value_card.innerHTML;

  cards.addEventListener('click', () => {
    container_popup.style.display = 'none'
    payFormValue(value_card.innerHTML)
    validBootstrapPayForm()
  })
})

//validação do formulário

form_control.forEach((input) => {
  input.addEventListener('blur', () => {
    if (input.value == '') {
      input.classList.add('is-invalid')
    } else {
      input.classList.remove('is-invalid')
      input.classList.add('is-valid')
    }
  })
})

// Autocomplete dos campos bairro e rua/avenida

input_cep.addEventListener('blur', () => {
    const dado = {
      cep: Number(input_cep.value.replace('-',''))
    }
  
    fetch('/api', {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(dado)
    })
    .then((res) => {
      res.json().then((data) => {
        if (data.err) {
          console.log('Houve um erro')
        } else {
          input_street.value = data.street;
          input_neighborhood.value = data.neighborhood;
        }
      })
    })
    .catch(error => {
      console.error('Erro:', error);
    });
  }
)

//Envio dos dados

button_env.addEventListener('click', (ev) => {
  ev.preventDefault()

  const dados_form = new FormData(form)
  
  const data = {
    name: dados_form.get('nome'),
    cpf: dados_form.get('cpf'),
    cep: dados_form.get('cep'),
    street: dados_form.get('street'),
    neighborhood: dados_form.get('neighborhood'),
    number_house: dados_form.get('number_house'),
    method_pay: dados_form.get('method-pay'),
    phone: dados_form.get('phone')
  }

  if (validateForm(data)) {
    form_control.forEach((input) => {
      if (input.value == '') {
        input.classList.add('is-invalid')
      }
    })
  } else {

    fetch('/compra', {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(() => {
      alert('Dados enviados')
    }
    )
    .catch(err => {
      console.error('Houve um erro: ' + err)
    })
  }

  form_control.forEach((input) => {
    input.value = ''
    input.classList.remove('is-valid')
  })
})

function validBootstrapPayForm() {
  pay_form.classList.remove('is-invalid')
  pay_form.classList.add('is-valid')
}

function validateForm(data) {
  return data.name == '' || data.cep == '' || data.street == '' || data.neighborhood == '' || data.number_house == '' || data.method_pay == '' || data.cpf == '' || data.phone == ''
}

function payFormValue(option) {
  pay_form.value = option
}

pay_form.addEventListener('focus', () => {
  container_popup.style.display = 'flex'
  pay_form.value = ''
})

input_ticket.addEventListener('focus', () => {
  window.open('/cupom', '_self')
})

close_popup.addEventListener('click', () => {
  container_popup.style.display = 'none'
})