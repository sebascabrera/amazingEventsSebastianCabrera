let cardContainer = document.getElementById('cardid')
function showCard(arr, container) {
    if ( arr.length > 0){
        let fragment = document.createDocumentFragment()
        container.innerHTML = ''
        for (let i of arr) {
            let div = document.createElement(`div`)
    
            div.classList.add("card")
            div.innerHTML = `<img src=${i.image}class="card-img-top" alt="cinema">
          <div class="card-body">
              <h5 class="card-title" id="card-title">${i.name}</h5>
              <p class="card-text">${i.description}</p>
              <div class="btn-container">
                  <a href="./details.html?id=${i._id}" class="btn btn-outline-info">Details</a>
                                 <a href="./details.html" class="btn btn-outline-info">$${i.price}</a>
              </div>
          </div>`
            fragment.appendChild(div)
        }
        container.appendChild(fragment)      
    }
    else{
        container.innerHTML = ''
        let div = document.createElement('div')
               div.innerHTML = ` <div class="card-body">
          <h5 class="card-title">There is nothing to show you, try again</h5>        
      </div>`
      container.appendChild(div) 
    }
 
}
showCard(data.events, cardContainer)



let checkContainer = document.getElementById(`checkboxes`)
let fragment2 = document.createDocumentFragment()
let arrsetOfEvent = new Set(data.events.map(event => event.category))

let arrEvent = [...arrsetOfEvent]

for (let i of arrEvent) {

    let div = document.createElement(`div`)
    div.classList.add("form-check")
    div.innerHTML = `<input class="form-check-input" type="checkbox" value="${i}" id="flexCheckDefault1">
      <label class="form-check-label" for="flexCheckDefault1">${i}</label>`

    fragment2.appendChild(div)
}
checkContainer.appendChild(fragment2)

function filterArray(arrayString, listCard) {
    //return arrayString.length > 0? listCard.filter(events => arrayString.includes(events.category)):listCard;
    if (arrayString.length == 0) {
        return listCard
    } else {
        return listCard.filter(events => arrayString.includes(events.category))
    }
}

let checkedInputs = []
let checkboxes = document.querySelectorAll('input[type=checkbox]')
checkboxes.forEach(checkbox => checkbox.addEventListener('change', selected))


function selected() {

    checkedInputs = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(input => input.value)
    console.log(checkedInputs);
   
    combineFilters(data.events)
}

let inputText = document.getElementById('text-input')
let sercher = ""
inputText.addEventListener('keyup', (e) => {
 
    sercher = e.target.value;
    console.log(sercher);   
    combineFilters(data.events)
})

function readerSercher(textInput, listCard) {
    if (textInput == "") return listCard
    return listCard.filter(card => card.name.toLowerCase().includes(textInput.toLowerCase().trim()))

}

function combineFilters(array) {

    let cardFilterArray = filterArray(checkedInputs, array);
    let stringFilter = readerSercher(sercher, cardFilterArray);
    showCard(stringFilter, cardContainer)
}

