const queryString = location.search

const params = new URLSearchParams(queryString)


const id = params.get("id")


const cardObject = data.events.find( event =>  event._id == id )

console.log(Object.keys(cardObject));
function cardCreator() {
    let container = document.getElementById('details-container-card')
    let div = document.createElement('div');
    div.classList.add("card3");
    div.innerHTML = `<div class="card-detail col no-gutters d-flex ">
    <div class="card-detail-img col-md-8 col-sm-12 text-white d-flex justify-content-center">
      <img src="${cardObject.image}" class="card-img-top detail-img" alt="Imagen de details">
    </div>
    <div class="col-md-10 col-sm-12 card-body-container">
      <div class="card-body">
        <h2 class="card-title fs-1 fw-bold text-center">${cardObject.name}</h2>
        <ul>
          <li><p>${Object.keys(cardObject)[3].toUpperCase()} </p> ${ cardObject.date}</li>
          <li id="li-description"><p>${Object.keys(cardObject)[4].toUpperCase()} </p> ${ cardObject.description}</li>
          <li><p>${Object.keys(cardObject)[5].toUpperCase()} </p> ${ cardObject.category}</li>
          <li><p>${Object.keys(cardObject)[6].toUpperCase()} </p>${ cardObject.place}</li>
          <li><p>${Object.keys(cardObject)[7].toUpperCase()} </p>${ cardObject.capacity}</li>
          <li><p>${Object.keys(cardObject)[8].toUpperCase()} </p>${cardObject.assistance? cardObject.assistance : cardObject.estimate}</li>
          <li><p>${Object.keys(cardObject)[9].toUpperCase()} </p>${ cardObject.price}</li>
        </ul>
      </div>
    </div>
  </div>`
  container.appendChild(div)
}
cardCreator(); 