const input_cep = document.querySelector('#cep');
const form = document.querySelector('#form')
const button_env = document.querySelector('#env')
const input_street = document.querySelector('#street');
const input_number = document.querySelector('#number_house');
const input_neighborhood = document.querySelector('#neighborhood');

//Autocompletando Formulário

input_cep.addEventListener('blur', () => {

  if (input_cep.value == '') {
    input_cep.classList.add('is-invalid')
  } else {

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
          input_number.focus();
        }
      })
    })
    .catch(error => {
      console.error('Erro:', error);
    });
  }
})

//Envio dos dados

button_env.addEventListener('click', () => {


  const dados_form = new FormData(form)
  console.log(dados_form.get('cep'))

  const data = {
    name: dados_form.get('name'),
    cep: dados_form.get('cep'),
    street: dados_form.get('street'),
    neighborhood: dados_form.get('neigborhood'),
    number_house: dados_form.get('number_house'),

  }

  fetch('/compra', {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(
    alert('Dados enviados')
  )
  .catch()
})