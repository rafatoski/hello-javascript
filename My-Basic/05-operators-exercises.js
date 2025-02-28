/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let suma = 1 + 2
let resta = 10 - 4
let multiplicacion = 6 * 3
let division = 20 / 4 
let modulo = 10 % 3
let potencia = 2 ** 3


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let numero = 10;
numero += 5;  // Ahora numero es 15 (equivale a numero = numero + 5)
numero -= 3;  // Ahora numero es 12 (equivale a numero = numero - 3)
numero *= 2;  // Ahora numero es 24 (equivale a numero = numero * 2)
numero /= 4;  // Ahora numero es 6 (equivale a numero = numero / 4)
numero %= 5;  // Ahora numero es 1 (equivale a numero = numero % 5)


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(10 > 5);   // true
console.log(3 <= 3);   // true
console.log("hola" == "hola");  // true
console.log(4 !== 10); // true
console.log(5 === 5);  // true


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(10 < 5);   // false
console.log(3 > 5);    // false
console.log("hola" !== "hola");  // false
console.log(10 === "10"); // false (porque no es el mismo tipo)
console.log(7 <= 6);   // false


// 5. Utiliza el operador lógico and
console.log(10 > 5 && 8 < 20);  // true (ambas son verdaderas)
console.log(3 === 3 && 2 !== 5); // true (ambas son verdaderas)
console.log(5 > 10 && 3 < 6);   // false (porque 5 > 10 es falso)


// 6. Utiliza el operador lógico or
console.log(10 > 5 || 8 > 20);  // true (porque 10 > 5 es true)
console.log(3 === 5 || 2 !== 5); // true (porque 2 !== 5 es true)
console.log(5 > 10 || 3 > 6);   // false (ambas son falsas)


// 7. Combina ambos operadores lógicos

console.log((10 > 5 && 8 < 20) || (5 > 10));  // true (porque la primera parte es true)
console.log(3 === 3 && (2 !== 5 || 10 < 20)); // true (porque 2 !== 5 es true)
console.log(5 > 10 && 3 > 6 || 7 === 7);   // true (porque 7 === 7 es true)


// 8. Añade alguna negación

console.log(!true);  // false
console.log(!false); // true
console.log(!(5 > 2)); // false (porque 5 > 2 es true, y lo negamos)
console.log(!(10 < 8 || 5 === 5)); // false (porque 5 === 5 es true)


// 9. Utiliza el operador ternario

let edad = 18;
let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);  // "Eres mayor de edad"


// 10. Combina operadores aritméticos, de comparáción y lógicas

let numero1 = 10;
let numero2 = 5;
console.log((numero1 + numero2 > 10) && (numero1 - numero2 < 10)); // true
console.log(((numero1 * 2) === 20) || ((numero2 / 2) > 3)); // true
console.log(!((numero1 % 3) === 0)); // true
