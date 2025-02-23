/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Este es un ocmentario de una linea

// 2. Escribe un comentario en varias líneas

/* Estos
son 
comentarios de varias
lineas */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let cadenaDeTexto = "Esta es una variable de tipo string"
let numero = 15
let decimalOseaTambienNumero = 15.5
let booleanos = true
let sinDefinir = undefined
let nulo = null
let simbolo = Symbol("el simbolo")
let bigInt1 = 5145641651616513548468468n
let bigInt2 = BigInt(4165631516315163135416)

// 4. Imprime por consola el valor de todas las variables
console.log(cadenaDeTexto)
console.log(numero)
console.log(decimalOseaTambienNumero)
console.log(booleanos)
console.log(sinDefinir)
console.log(simbolo)
console.log(bigInt1)
console.log(bigInt2)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof cadenaDeTexto)
console.log(typeof numero)
console.log(typeof decimalOseaTambienNumero)
console.log(typeof booleanos)
console.log(typeof sinDefinir)
console.log(typeof simbolo)
console.log(typeof bigInt1)
console.log(typeof bigInt2)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
cadenaDeTexto = "Nueva cadena de texto"
numero = 16
decimalOseaTambienNumero = 15.6
booleanos = false
sinDefinir = undefined // aqui no supe como hacer
simbolo = Symbol("no se que poenr aqui aun no entiendo los simbolos")
bigInt1 = 35456651651651545561n
bigInt2 = BigInt(6486846654446)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
cadenaDeTexto = 45
numero = "17"
decimalOseaTambienNumero = 18
booleanos = "verdadero"
sinDefinir = Azul
simbolo = "Simbolo"
bigInt1 = "11651651351351351351"
bigInt2 = "Big Int: 35453531"

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const cadenaDeTexto2 = "Otra cadena de texto"
const numero2 = 18
const decimalOseaTambienNumero2 = 18.5
const booleanos2 = true
const sinDefinir2 = undefined
const simbolo2 = Symbol(51)
const bigInt12 = BigInt(515141313513513135531351)
const bigint22 = 151651435135143514351351n

// 9. A continuación, modifica los valores de las constantes

const cadenaDeTexto2 = "cambio de la constante texto"

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

// osea debo comentar la linea anterior del punto 9 pero luego no se ejecuta ya lo hice