console.log(document);
//ruta del navegador
const queryString = location.search

// instaciar serch param -interfaz para obtener los query-valores-prametros de esas rutas; de ese sitio
const params = new URLSearchParams(queryString)

// utilizar el metodo get de serch param para capturar el id -- identificar donde hizo el `click`
const id = params.get(`id`)
//const id = new URLSearchParams(location.search).get("id") ==> alternativa
// vincular id de tarjeta index.js con id de data a mostrar de details
const event = data.events.find( events => { events.id == id })



function cardCreator(event) {
    let container = document.getElementById('details-container-card')
    let div = document.createElement('div');
    div.classList.add("card")
    div.innerHTML = `<div class="card-detail col no-gutters d-flex ">
    <div class="card-detail-img col-md-8 col-sm-12 text-white d-flex justify-content-center">
      <img src="${event.image}" class="" alt="Imagen de details">
    </div>
    <div class="col-md-4 col-sm-12 card-body-container">
      <div class="card-body">
        <h2 class="card-title fs-1 fw-bold text-center">${event.name}</h2>
        <ul>
          <li>${event.date}</li>
          <li>${event.description}</li>
          <li>${event.category}</li>
          <li>${event.place}</li>
          <li>${event.capacity}</li>
          <li>${event.assistence}</li>
          <li>${event.price}</li>
        </ul>
      </div>
    </div>
  </div>`
  container.appendChild(div)
}
cardCreator("details-container-card"); 