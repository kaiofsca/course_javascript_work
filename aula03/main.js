{/* ------ Listas (Array) ------ */}

// As listas podem ser de qualquer tipo

const names = ['Kaio', 'Felipe', 'Juh', 10, false];

//como selecionar x elemento em x posição da lista?

const Felipe = names[1] // OBS: o array sempre começa do zero ent para selecionar o Felipe seria o numero 1 e o kaio o 0.
console.log(Felipe)

//como adcionar outros elementos no array?

names.push('Pedro') // Add outro elemento no final da array
names.unshift(20) // Add outro elemento no final da lista
names.pop() // Remove o ultimo elemento
names.pop()
console.log(names)

// Reassinalar valores da lista 

names[3] = 'Gustavo'
console.log(names)

// Como verificar o indice x de determinado elemento
const indexOfFelipe = names.indexOf('Felipe')
const sortedNames = names.sort()
console.log(names)

// Como verificar quantos itens a lista possui
console.log(names.length)
console.log(sortedNames)

// Como verificar se a variável é uma lista
const namesIsArray = Array.isArray(names)
console.log(namesIsArray)
