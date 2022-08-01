console.log("Hello World JavaScript")

//Console
console.error("Este é um erro!")
console.warn("Este é um aviso!")
console.log("Esta é uma mensagem!")

//Variáveis
var x = 10
// maneiras mais modernas de variáveis
let y = 15
const z = 20

if (1) {
    let y = 55
    console.log(y)
}

console.log(x)
console.log(y)
console.log(z)

y = 25

console.log(y)

// tipos de dados
const name = "Marcos"
console.log(name)
console.log(typeof name)

const shirtsQty = 4
console.log(shirtsQty )
console.log(typeof shirtsQty)

const decimal = 12.5
console.log(decimal)
console.log(typeof decimal)

const isApproved = false // true ou false
console.log(isApproved)
console.log(typeof isApproved)

let surname = null
console.log(surname)
console.log(typeof surname)

surname = "Cappelli"
console.log(surname)
console.log(typeof surname)

let age
console.log(age)
console.log(typeof age)

age = 454
console.log(age)
console.log(typeof age)

const languages = ['JavaScript', 'PHP', 'Python']
console.log(languages)
console.log(typeof languages)

const user = { email: 'marcos@123.com', password: '1234', age:03 } // Object literals
console.log(user)
console.log(typeof user)


// métodos de string
const fullName = 'Marcos Cappelli'

console.log(fullName.length) // mostra número de caracters da string

const stringToArray = fullName.split(' ')

console.log(stringToArray)

console.log(fullName.toLowerCase())

console.log(fullName.toUpperCase())

console.log(fullName.indexOf('Cappelli')) // Busca o número da string onde começa o nome 

console.log('dfdfdfd'.indexOf('Cappelli'))
