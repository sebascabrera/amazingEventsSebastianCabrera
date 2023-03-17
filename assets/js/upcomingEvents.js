const url = "https://mindhub-xj03.onrender.com/api/amazing"

async function obtaindata(url) {

    try {
        let response = await fetch(url)
        const data = await response.json()

        let currentDt = new Date(data.currentDate)
        let dataDate = data.events.filter(env => new Date(env.date) > currentDt)
        console.log(dataDate);
        let cardContainer = document.getElementById('futurecard')
        showCard(dataDate, cardContainer)

        //cheks
        let checkContainer = document.getElementById(`checkboxes`)
        let arrsetOfEvent = new Set(data.events.map(event => event.category))
        let arrEvent = [...arrsetOfEvent]
        console.log(arrsetOfEvent);
        showCheck(arrEvent, checkContainer)
        //
        let sercher = ""
        let checkboxes = document.querySelectorAll('input[type=checkbox]')
        let checkedInputs = []
        checkboxes.forEach(checkbox => checkbox.addEventListener('change', () => {
            checkedInputs = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(input => input.value)

            combineFilters(data.events, checkedInputs, sercher, cardContainer)
        }))
        // serch 
        let inputText = document.getElementById('text-input')
        inputText.addEventListener('keyup', (e) => {

            sercher = e.target.value;
            combineFilters(data.events, checkedInputs, sercher, cardContainer)

        })

        let buttonRefresh = document.getElementById('refresh')
        buttonRefresh.addEventListener('click', location.reload())
    }
    catch (error) {
        console.error(error);
    }
}
obtaindata(url)

function showCard(arr, container) {
    if (arr.length > 0) {
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
                   <div> <p>$ ${i.price}</p></div>               
              </div>
          </div>`
            fragment.appendChild(div)
        }
        container.appendChild(fragment)
    }
    else {
        container.innerHTML = ''
        let div = document.createElement('div')
        div.innerHTML = ` <div class="card-body">
          <h5 class="card-title">There is nothing to show you, try again!!</h5>  
          <img src="https://media.tenor.com/Mr9ZiphI4JgAAAAM/vegeta-db.gif" alt="" srcset="">          
      </div>`
        container.appendChild(div)
    }
}
function showCheck(array, container) {
    let fragment2 = document.createDocumentFragment()
    for (let i of array) {
        let div = document.createElement(`div`)
        div.classList.add("form-check")
        div.innerHTML = `<input class="form-check-input" type="checkbox" value="${i}" id="flexCheckDefault1">
          <label class="form-check-label" for="flexCheckDefault1">${i}</label>`
        fragment2.appendChild(div)
    }
    container.appendChild(fragment2)
}
function filterArray(arrayString, listCard) {
    //return arrayString.length > 0? listCard.filter(events => arrayString.includes(events.category)):listCard;
    if (arrayString.length == 0) {
        return listCard
    } else {
        return listCard.filter(events => arrayString.includes(events.category))
    }
}

function readerSercher(textInput, listCard) {
    if (textInput == "") return listCard
    return listCard.filter(card => card.name.toLowerCase().includes(textInput.toLowerCase().trim()))

}

function combineFilters(array, arrayChecked, textSerch, container) {

    let cardFilterArray = filterArray(arrayChecked, array);
    let stringFilter = readerSercher(textSerch, cardFilterArray);
    showCard(stringFilter, container)
}