console.log("hola");


fetch("https://mindhub-xj03.onrender.com/api/amazing")
//.then(response => console.log(response))
.then(response => response.json())
.then(data =>(data.events))