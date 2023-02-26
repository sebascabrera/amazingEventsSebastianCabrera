// let cardTitle = document.getElementById(`cardid`)
// console.log(cardTitle);

let cardContainer = document.getElementById('cardid')
let fragment = document.createDocumentFragment()

 for (let i of data.events) {
      let div = document.createElement(`div`)
  div.classList.add("card")
   div.innerHTML = `<img src=${i.image}class="card-img-top" alt="cinema">
  <div class="card-body">
      <h5 class="card-title" id="card-title">${i.name}</h5>
      <p class="card-text">${i.description}</p>
      <div class="btn-container">
          <a href="./details.html" class="btn btn-outline-info">Details</a>
      </div>
  </div>`
    fragment.appendChild(div)
  }
  cardContainer.appendChild(fragment)







