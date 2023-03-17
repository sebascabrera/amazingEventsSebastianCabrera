const queryString = location.search
const params = new URLSearchParams(queryString)
const ids = params.get("id")

const url = "https://mindhub-xj03.onrender.com/api/amazing"
async function obtaindata(urlDirection) {
  console.log(ids);
  try {
    let response = await fetch(urlDirection)
    const data = await response.json()
    const cardObject = data.events.find(event => event._id == ids)
    cardCreator(cardObject)
   
  }
  catch (error) {
    console.error(error);
  }
}
//const cardObject = data.events.find(event => event._id == id)
obtaindata(url)

function cardCreator(param) {
  let container = document.getElementById('details-container-card')
  let div = document.createElement('div');
  div.classList.add("card3");
  div.innerHTML = `<div class="card-detail col no-gutters d-flex ">
    <div class="card-detail-img col-md-8 col-sm-12 text-white d-flex justify-content-center">
      <img src="${param.image}" class="card-img-top detail-img" alt="Imagen de details">
    </div>
    <div class="col-md-10 col-sm-12 card-body-container">
      <div class="card-body">
        <h2 class="card-title fs-1 fw-bold text-center">${param.name}</h2>
        <ul>
          <li><p>${Object.keys(param)[3].toUpperCase()} </p> ${param.date}</li>
          <li id="li-description"><p>${Object.keys(param)[4].toUpperCase()} </p> ${param.description}</li>
          <li><p>${Object.keys(param)[5].toUpperCase()} </p> ${param.category}</li>
          <li><p>${Object.keys(param)[6].toUpperCase()} </p>${param.place}</li>
          <li><p>${Object.keys(param)[7].toUpperCase()} </p>${param.capacity}</li>
          <li><p>${Object.keys(param)[8].toUpperCase()} </p>${param.assistance ? param.assistance : param.estimate}</li>
          <li><p>${Object.keys(param)[9].toUpperCase()} </p>${param.price}</li>
        </ul>
      </div>
    </div>
  </div>`
  container.appendChild(div)
}
//cardCreator(); 