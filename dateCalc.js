//Data e Hora (Date)
//Criar um Contador de dia para uma data específica. 
//Início, Fim, a diferência de dias entre as datas.

let inicio = new Date('2025/10/26')
let fim = new Date('2025/11/26') 
let totalDias = (fim - inicio) / (1000 * 3600 * 24) //Converte para Segundos/Horas/Dias


console.log(totalDias) 