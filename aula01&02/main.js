{/* ------ Diferenças entre as declarações de variáveis ------ */} 

// var = alert('bababoi') --- Var VAR não é muito utilizado hoje em dia para declarar variáveis porque ele não tem Block Scope.
// Let = alert('bababoi') --- Let tem block scope e é utilizado quando essa variável pode ser mudada no futuro.
// const = alert('bababoi') --- Const é utilizado quando aquela variável tem que ser constante e não pode mudar.

{/* ------ Strings ------ */} 

// const message = 'Hello Wolrd'
// Método que diz quantas caractéres que essa string tem. 
// console.log(message.length)

// const firstName = 'Kaio'
// const lastName = 'Fonseca'
// .toUpperCase deixa tudo maiúsculo - .toLowerCase deixa tudo minúsculo
// console.log(`Meu nome é ${firstName.toUpperCase} ${lastName.toLowerCase}`)

// const names = 'Kaio, Felipe, Juh'
// console.log(names.split(',')) // split conta a string em cada virgula e cria um array (se n colocar a virgula ele cria um item com cada letra)

{/* ------ Numbers ------ */}

// const number = 5
// console.log(number)
// Alguns métodos de números
// console.log(number.toString()) // Transforma em string
// console.log(typeof number) // Ve qual é o tipo deessa string

{/* ------ Booleans ------ */}

// false - quando algo é falso console.log(2 === 3)
// true - quando algo é verdadeiro console.log(2 === 2)

{/* ------ Null & Undefined ------ */}

// const x = null // significa que ele não tem nenhum valor, vazio.
// const y = undefined // como se a variável não tivesse sido definida ainda.

{/* ------ Listas (arrays) & Objetos (objects) ------ */}

// const lista = [1, 2, 3, 4, 5]
// const object = {name: 'Kaio'}
