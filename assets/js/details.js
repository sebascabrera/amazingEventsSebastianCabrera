console.log(document);
//ruta del navegador
const queryString = location.search

// instaciar serch param -interfaz para obtener los query-valores-prametros de esas rutas; de ese sitio
const params = new URLSearchParams(queryString)

// utilizar el metodo get de serch param para capturar el id -- identificar donde hizo el `click`
const id = params.get(`id`)
// vincular id de tarjeta index con id a mostrar de details
const event = data.events.find(()=>{events.id == id} )



let cardContainer = document.getElementById('card-body-container')
let fragment = document.createDocumentFragment()

for (let i of data.events){
    let div = document.createElement(`div`)
    div.classList.add("card mb-3")
    div.innerHTML =`<div class="card-detail col no-gutters d-flex ">
    <div class="card-detail-img col-md-8 col-sm-12 text-white d-flex justify-content-center">
      <img src="${i.image}" class="" alt="Imagen de details">
    </div>
    <div class="col-md-4 col-sm-12 card-body-container">
      <div class="card-body">
        <h2 class="card-title fs-1 fw-bold text-center">${i.name}</h2>
        <ul>
          <li>${i.date}</li>
          <li>${i.description}</li>
          <li>${i.category}</li>
          <li>${i.place}</li>
          <li>${i.capacity}</li>
          <li>${i.assistence}</li>
          <li>${i.price}</li>
        </ul>
      </div>
    </div>
  </div>`

}