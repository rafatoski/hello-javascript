/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let miNombre = "Rafael "
let miApellido = "Castillo "

let fullName = miNombre + miApellido

// 2. Muestra la longitud de una cadena de texto
console.log(fullName.length)
// 3. Muestra el primer y último carácter de un string
console.log(fullName[0]); // Primer carácter
console.log(fullName[fullName.length - 1]); // Último carácter
// 4. Convierte a mayúsculas y minúsculas un string
console.log(fullName.toLowerCase())
console.log(fullName.toUpperCase())
// 5. Crea una cadena de texto en varias líneas
let variasLineas = `Esto es 
una cadena de texto
de varias lineas`
// 6. Interpola el valor de una variable en un string
console.log(`Mi nombre completo es ${fullName}`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(fullName.replaceAll(" " ,"-"))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(fullName.includes("Castillo"))
// 9. Comprueba si dos strings son iguales
console.log(fullName === "Castillo")
// 10. Comprueba si dos strings tienen la misma longitud
console.log(fullName.length == miApellido.length)
// Primera clase con MAC