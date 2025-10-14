//Convertions ou Casting
console.log('Convertions ou Casting')

//=== String to Number ===

let age = '35'

//ParseInt(inteiro) função analisa a string e retorna num inteiro
age = parseInt(age)

//ParseFloat(fracionario) 
age = parseFloat(age)

//Unário (+) + utilizado converte float, int 
age = + age

//Number(numero) funciona para float, int
age = Number(age)

//========================================//

//=== Number para String ===

let age2 = 35

//Usando método toString()
age = age.toString()

//Usando Constructor
age = String(age)

//========================================//

//Number para Boolean (true or false)

//Number 0 = false
//Number 1 = true

let age3 = 35

//Usando Constructor
age = Boolean(age)  //true