 //let cardContainer = document.getElementById('cardpast')
 let currentDt = parseInt(data.currentDate)
 console.log(typeof (currentDt));
 
 let cardFutContainer = document.getElementById('futurecard')
 let fragment = document.createDocumentFragment()
 
  for (let i of data.events) {
     let iDate = parseInt(i.date)
     if( currentDt <= iDate ){
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
   
   }
   cardFutContainer.appendChild(fragment)