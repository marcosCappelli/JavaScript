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

console.log(fullName.slice(7, 15))
console.log(fullName.slice(0, 6))

// métodos de array
const list = ['aa', 'bb', 'cc', 'dd', 'ee'] // contagem inicia em zero

console.log(list.length)
console.log(list[2])

list[5] = 'ff' // adiciona na posição
console.log(list)

console.log(list[list.length -1]) //busca último elemento da lista

list.push('gg') //adiciona elemento no final da lista
console.log(list)

list.pop() // remove elemento no final da lista
console.log(list)

list.shift() // remove elemento no inicio da lista
console.log(list)

list.unshift('aa') // adiciona elemento no inicio da lista
console.log(list)

// Objetos
const product = {
    name: 'camisa',
    price: 15.50,
    instock: true,
    size: ['p', 'm', 'g'],
    'Main color': 'azul',
}

console.log(product.name)
console.log(product['name'])
console.log(product['Main color'])

