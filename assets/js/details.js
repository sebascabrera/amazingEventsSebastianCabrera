console.log([document]);
//ruta del navegador
const queryString = location.search

// instaciar serch param -interfaz para obtener los query-valores-prametros de esas rutas; de ese sitio
const params = new URLSearchParams(queryString)
console.log(params);
// utilizar el metodo get de serch param para capturar el id -- identificar donde hizo el `click`
const id = params.get("id")
console.log(id);
//const id = new URLSearchParams(location.search).get("id") ==> alternativa
// vincular id de tarjeta index.js con id de data a mostrar de details
const cardObject = data.events.find( event =>  event._id == id )
console.log(cardObject);


function cardCreator() {
    let container = document.getElementById('details-container-card')
    let div = document.createElement('div');
    div.classList.add("card3");
    div.innerHTML = `<div class="card-detail col no-gutters d-flex ">
    <div class="card-detail-img col-md-8 col-sm-12 text-white d-flex justify-content-center">
      <img src="${cardObject.image}" class="card-img-top detail-img" alt="Imagen de details">
    </div>
    <div class="col-md-4 col-sm-12 card-body-container">
      <div class="card-body">
        <h2 class="card-title fs-1 fw-bold text-center">${cardObject.name}</h2>
        <ul>
          <li><p>Date:</p> ${ cardObject.date}</li>
          <li><p>Description:</p> ${ cardObject.description}</li>
          <li><p>Category:</p> ${ cardObject.category}</li>
          <li><p>Place:</p>${ cardObject.place}</li>
          <li><p>Capacity:</p>${ cardObject.capacity}</li>
          <li><p>Assistence:</p>${cardObject.assistance? cardObject.assistance : cardObject.estimate}</li>
          <li><p>Price:</p>${ cardObject.price}</li>
        </ul>
      </div>
    </div>
  </div>`
  container.appendChild(div)
}
cardCreator(); 