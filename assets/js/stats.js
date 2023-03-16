console.log("hola");


fetch("https://mindhub-xj03.onrender.com/api/amazing")
//.then(response => console.log(response))
.then(response => response.json()) // aca estoy obteniendo el archivo json con el que voy a trabajar
.then(data =>(data.events))

// if (response.status === 400){
//     let datos = await response.json()
//     console.log(datos.loquesea);
// }