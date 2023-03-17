const url = "https://mindhub-xj03.onrender.com/api/amazing"
async function obtaindata(urlparam) {

    try {
        let response = await fetch(urlparam)
        const data = await response.json()

        let arrEvent = data.events
        let tblContainer = document.getElementById('firstTable')
        createTable(arrEvent, tblContainer)
        let arrEventFuture = arrEvent.filter(element => element.estimate)
        let arrEventPast = arrEvent.filter(element => element.assistance)
        let sndTblContainer = document.getElementById('secondTable')
        createSndTrdTable(arrEventFuture, sndTblContainer)
        let trdTblContainer = document.getElementById('thirdTable')
        createSndTrdTable(arrEventPast, trdTblContainer)
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
    let bestAttendancePercent = bestAttendance.assistance / bestAttendance.capacity * 100

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

function createSndTrdTable(arr, container) {



    let fragment2 = document.createDocumentFragment()
    let arrsetOfEvent = new Set(arr.map(event => event.category))

    let newarrEvent = [...arrsetOfEvent]
    console.log(newarrEvent);

    for (let category of newarrEvent) {

        let revenue = getRevenues(arr, category)
        let percentages = getPercentage(arr, category)
        let tr = document.createElement('tr')
        tr.innerHTML = `<td>${category} </td>
    <td>$ ${revenue} </td>
    <td>${percentages.toFixed(2)} % </td>`

        fragment2.appendChild(tr)
    }
    container.appendChild(fragment2)
}

function getRevenues(arr, category) {

    let renueves = arr.filter(element => element.category == category).reduce((acc, element) => {

        return acc += (element.assistance ? element.assistance : element.estimate) * element.price

    }, 0)
    return renueves
}

function getPercentage(arr, category) {

    let filterArr = arr.filter(element => element.category == category)
    let percentage = filterArr.reduce((acc, element) => {

        return acc += (element.assistance ? element.assistance : element.estimate) * 100 / element.capacity

    }, 0)
    return percentage / filterArr.length
}