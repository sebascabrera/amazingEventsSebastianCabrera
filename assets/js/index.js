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
          <a href="./details.html?id=${i._id}" class="btn btn-outline-info">Details</a>
        
             <a href="./details.html" class="btn btn-outline-info">$${i.price}</a>
           
      </div>

  </div>`
    fragment.appendChild(div)
}
cardContainer.appendChild(fragment)


//////--------------------------------------------------------------------///////////////////////////////////////

// let inputText = document.getElementById('text-input')
// inputText.addEventListener('keyup', (event)=>{
//     console.log(inputText.value)
// let nombre = lista de Input.fine(nombre =>{
//     nombre.serch(e.target.value)
//     retur nombre.toLowerCase().serch(e.target.value.toLowerCase().trim() ) !=1
// } )
    
// })

///////////////---------------------------/////////////////////////

//////////////////traer los check///////////////////

 let checkContainer = document.getElementById(`checkboxes`)
 let fragment2 = document.createDocumentFragment()
let arrsetOfEvent = new Set(data.events.map( event => event.category ))
console.log(arrsetOfEvent);
let arrEvent = [...arrsetOfEvent]

 for (let i of arrEvent){

     let div = document.createElement(`div`)
     div.classList.add("form-check")
     div.innerHTML = `<input class="form-check-input" type="checkbox" value="${i} " id="flexCheckDefault1">
     <label class="form-check-label" for="flexCheckDefault1">${i}</label>`

     fragment2.appendChild(div)
 }
 checkContainer.appendChild(fragment2)
// 
let checkboxes = document.querySelectorAll('input[type=checkbox]')
console.log(checkboxes);

checkboxes.forEach(checkbox => {checkbox.addEventListener('change', selected)} )

// tengo el array de checkboxes capturados
function selected() {
let checkedInputs = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(input => input.value)
console.log(checkedInputs);
let vble = data.events.filter(model => checkedInputs.includes(model.category) ) 
console.log(vble);

}
