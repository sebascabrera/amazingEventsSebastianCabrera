const url = "https://mindhub-xj03.onrender.com/api/amazing"
async function obtaindata(urlparam) {

    try {
        let response = await fetch(urlparam)
        const data = await response.json()

        let arrEvent = data.events
        let tblContainer = document.getElementById('firstTable')
        createTable(arrEvent, tblContainer)


        let sndTblContainer = document.getElementById('secondTable')
        createSecondTable(arrEvent, sndTblContainer)
        renueves(arrEvent)
    }
    catch (error) {
        console.error(error);
    }
}
obtaindata(url)

function createTable(arr, container) {

    let bestCapacity = arr.sort((a, b) => b.capacity - a.capacity)

    let bestAttendance = arr.filter(elemento => elemento.assistance).reduce((a, b) => {
        if ((a.assistance / a.capacity) > (b.assistance / b.capacity)) {
            return a
        }
        else {
            return b
        }
    })
    bestAttendancePercent = bestAttendance.assistance / bestAttendance.capacity * 100

    // console.log(bestAttendance);
    let lowerAttendance = arr.filter(elemento => elemento.assistance).reduce((a, b) => {
        if ((a.assistance / a.capacity) < (b.assistance / b.capacity)) {
            return a
        }
        else {
            return b
        }
    })
    lowerAttendancePercent = lowerAttendance.assistance / lowerAttendance.capacity * 100
    let tr = document.createElement('tr')
    tr.innerHTML = ''
    tr.innerHTML = `<td>${bestAttendance.name}  (${bestAttendancePercent.toFixed(2)}%)</td>
            <td>${lowerAttendance.name}  (${lowerAttendancePercent.toFixed(2)}%)</td>
            <td>${bestCapacity[0].name}  (${bestCapacity[0].capacity})</td>`

    container.appendChild(tr)

}

// function renueves(params) {
//     for (const i in params) {
//         if (i.assistance != undefined) {
//             const element = params.price * params.assistance;
//            return console.log(element); 
//         }
//     }
    

// }

function createSecondTable(arr, container) {

let renueves = arr.map(element => element.category)
// .reduce((a,b) =>{
//     if(a.assistance===b.assistance){
//         let acc=[];
//         acc += a.assistance * a.price
//         return acc
//     }
//     else{
//         return acc
//     }
// })
console.log(renueves);

    let fragment2 = document.createDocumentFragment()
    let arrsetOfEvent = new Set(arr.map(event => event.category))
    
    let NewarrEvent = [...arrsetOfEvent]
    console.log(NewarrEvent);

    for (let i of NewarrEvent) {
        let tr = document.createElement('tr')
        tr.innerHTML = ''
        tr.innerHTML = `<td>${i} </td>
    <td> </td>
    <td></td>`
        fragment2.appendChild(tr)
    }
    container.appendChild(fragment2)
}