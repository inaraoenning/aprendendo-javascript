//Data e Hora

let agora = new Date();
console.log(agora); //data completa atual

//data especificar
let dataEspecifica = new Date(2024, 5, 20, 10, 35, 0)
console.log(dataEspecifica) // ano, mes, dia, hora, minuto, segundos
//mes é contado como index


//passar data como string
let dataString = new Date('2024/10/20 10:35:00')
console.log(dataString)