// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
fetch('https://api.thecatapi.com/v1/images/search?category_ids=4&limit=1')
  .then((response) => {
    return response.json()
  })
  .then((cats) => {
    renderizar(cats)
  })

let img = document.createElement('img')

function renderizar(dados) {
  let container = document.getElementById('container')
  let divImg = document.createElement('div')
  divImg.classList.add('divImg')
  img.src = dados[0].url
  divImg.appendChild(img)
  container.appendChild(divImg)
}

function atualizar() {
  fetch('https://api.thecatapi.com/v1/images/search?category_ids=4&limit=1')
    .then((response) => {
      return response.json()
    })
    .then((cats) => {
      console.log(cats)
      img.src = cats[0].url
    })
}
