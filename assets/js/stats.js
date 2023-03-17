const url = "https://mindhub-xj03.onrender.com/api/amazing"
async function obtaindata(urlparam) {

    try {
        let response = await fetch(urlparam)
        const data = await response.json()

        let arrEvent = data.events
        let tblContainer = document.getElementById('firstTable')
        createTable(arrEvent, tblContainer)

    }
    catch (error) {
        console.error(error);
    }
}
obtaindata(url)

function createTable(arr, container) {

    let bestCapacity = arr.sort((a, b) => b.capacity - a.capacity)
    let bestAttendance = arr.filter(elemento => elemento.assistance).reduce((evento1, evento2) => {
        if ((evento1.assistance / evento1.capacity) > (evento2.assistance / evento2.capacity)) return evento1
        return evento2
    })
    console.log(bestAttendance);
    let lowerAttendance = arr.filter(elemento => elemento.assistance).reduce((evento1, evento2) => {
        if ((evento1.assistance / evento1.capacity) < (evento2.assistance / evento2.capacity)) return evento1
        return evento2
    })

    let tr = document.createElement('tr')
    tr.innerHTML = ''
    tr.innerHTML = `<td>${bestAttendance.name} : ${bestAttendance.assistance}</td>
            <td>${lowerAttendance.name} : ${lowerAttendance.assistance}</td>
            <td>${bestCapacity[0].name} : ${bestCapacity[0].capacity}</td>`

    container.appendChild(tr)

}