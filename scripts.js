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

// destructuring
const { price, instock} = product //busca objetos da const product

console.log(price)
console.log(instock)

const [n1, n2] = list //busca arrays da const list

console.log(n1)
console.log(n2)

// JSON - JavaScript object Notation
const dog = {
    name: "Shark",
    age: 10,
}

const json = JSON.stringify(dog) //essa chamada transforma os objetos para JSON

console.log(json)

const obj = JSON.parse(json) //converte JSON em objeto JavaScript novamente

console.log(obj) 

const jsonErrada = '{"name":"Teste", "surname":"Testando"}'//cuidar as regras de escrita JSON

const obj2 = JSON.parse(jsonErrada)

console.log(obj2)

//Estruturas condicionais (if, else)
const a = 10

if (a > 8) {
    console.log('A é maior que 8')
}

// >, <, >=, <=

const b = 'Marcos'

if (b === 'Joaquim') { //===faz a comparação do obejto
    console.log('O nome é Joaquim!')
}
else if (b === 'Maria') { //comparativo 'se não' pode ser usado várias vezes  
    console.log('O nome é Maria!') 
}
else if (b === 'Rosa') {
    console.log('O nome é Rosa')
}
else {
    console.log('O nome não foi encontrado!')
}

// if ternário
const someNumber = 114

let testingANumber = someNumber < 220 ? 'yes' : 'No'

console.log(testingANumber)

//estrutura de repetição - loop
const myList = [1, 2, 3, 4, 5]
let counter = 0 

while (counter < myList.length) {
    console.log('Imprimindo:  ' + myList[counter]) //Concatenando string com resultado da lista
    //counter = counter + 1
    counter++
}

const mySecondList = ['a', 'b', 'c', 'd', 'e'] 

for (let counter = 0; counter < mySecondList.length; counter++) {
    console.log(`Imprimindo: ${mySecondList[counter]}`) // template literals
}

// métodos de array -> repetição
const names = ['Marcos', 'Maria', 'Carlos', "Ari"]
// método forEach repete todos os elementos
names.forEach(function (name) {
    console.log(`O nome é: ${name}`)
})
// método map altera o elemento desejado
const modifiedNames = names.map(function (name) {
    if (name === 'Marcos') {
        return (name = 'Sr. Marcos')
    } else {
        return name
    }
})
console.log(modifiedNames)
// método filter filtra os elementos desejados
const bigNumbers = [1, 2, 3, 4, 5, 10, 100].filter(function (number) {
    return number >= 5
})
console.log(bigNumbers)
// método reduce soma e mostra apenas o valor total
const sumAll = [10, 20 ,30, 40, 50].reduce(function (total, number) {
    return total + number
})
console.log(sumAll)

// Funções
function minhaFuncao() {
    console.log('Olá função!')
}
// a função pode ser invocada várias vezes
minhaFuncao()
minhaFuncao()

function nomeCompleto(nome, sobrenome) {
    return `O nome completo é: ${nome} ${sobrenome}`
}
console.log(nomeCompleto('Marcos', 'Cappelli'))
console.log(nomeCompleto('Maria', 'Joaquina'))


const primeiroNome = 'Maria'
const segundoNome = 'Joaquina'

const meuNomeCompleto = nomeCompleto(primeiroNome, segundoNome)
console.log(meuNomeCompleto)

// arrow functions
const myArrowFunction = (a, b) => {
    return a + b
}
console.log(myArrowFunction(2, 5))

// forma mais simplificada de escrever a mesma function acima sem uso de bloco{}
const mySimpleArrowFunction = (a, b) => a + b
console.log(myArrowFunction(5, 20))


//Classes
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    productDetails() {
        return `O nome do produto é ${this.name} e o preço é R$${this.price}`
    } 
}
const socks = new Product('Meia Azul', 10.90)
const shirt = new Product('Camisa preta', 22.45)

console.log(socks.name)
console.log(socks.price)

console.log(shirt.name)
console.log(shirt.price)

console.log(shirt.productDetails())
console.log(socks.productDetails())

//Herança
class SuperProduct extends Product {
    constructor(name, price, size) {
        super(name, price)
        this.size = size
    }
    showAdjective(adjective) {
        return `O ${this.name} é muito ${adjective} `
    }

    // static
    static sayHello() {
        console.log('Helloooo')
    }
}

const tenis = new SuperProduct('Tênis Vermelho', 129.90, '40')

console.log(tenis.name)
console.log(tenis.size)
console.log(tenis.price)

console.log(tenis.showAdjective('bom de vendas!'))

SuperProduct.sayHello()

// DOM - Document Object Model
// Seleção de elementos
const title = document.getElementById('title') // #title

console.log(title)


// query selector
const sameTitle = document.querySelector('#title')

console.log(sameTitle)

const texts = document.querySelectorAll('.text')

console.log(texts)
console.log(texts[2])
console.log(texts[3])

texts.forEach((text) => {
    console.log(text.textContent.toUpperCase())
})

// Manipulação de elemntos
title.textContent = 'Mudei o texto' // Muda o texto pelo JS e não no HTML

// mexer na propriedade do elemto HTML
texts[0].innerHTML = '<span>Alteramos o HTML deste elemento</span>'

// adicionando style aos elementos
texts[1].style.backgroundColor = 'red' // background-color: red

// adicionar uma classe/ Remove
texts[2].classList.add('my-class')

texts[2].classList.remove('text') // remove a classe 

texts[3].remove() // remove o elemento em definitivo

// Eventos
const btn = document.querySelector('#btn')

btn.addEventListener('click', function () {
    texts[2].style.color = 'blue'
})