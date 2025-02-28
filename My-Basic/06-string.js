// Strings


// concatenacion
let myName = "Rafael"
let greeting = "Hola, " + myName + "!"

console.log(greeting)

// longitud 
console.log(greeting.length)

// acceso a caracteres
console.log(greeting[0])
console.log(greeting[12])

// Métodos comunes 
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Rafael"))
console.log(greeting.includes("Rafael"))
console.log(greeting.slice(0,10))
console.log(greeting.replace("Rafael", "Selene"))

// Template literals
let message = `Hola, este es mi 
curso de Javascript`

console.log(message)

// interpolacion 

let email = "rafaelcastillo@mail.com"
console.log(`Hola, ${myName} , tu email es ${email} !`)