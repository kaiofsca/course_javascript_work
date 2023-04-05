{/* ------ LOOPS ------ */}
// Usamos um loop quando queremos utilizar o código várias vezes

// FOR
// Executa o console enquanto o index for menos que 10.
for (let index = 0; index <= 10; index++) {
    console.log(index)
}

// Utilizando o FOR junto com as Listas
const cars = ["Ferrari", "Tesla", "Dodge", "Lancer"]
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

// Entendendo o FOR OF LOOPS (MUITO MELHOR)
for (let car of cars) {
    console.log(car)
}

// Entendendo ForEach Loop (Melhor também)
cars.forEach((car, index) => {
    console.log(index, car)
})

// Entendendo o While Loop - Vai executar determinado código enquato uma condição passada for verdadeira.
let index = 0;
while (index < 10) {
    console.log('Index é menor do que 10!')
    index = index + 1
    // index += 1 ou index++ também podem ser usados
}

// FOR IN LOOP - Usado principalmente para trabalhar com objetos - não é muito utilizado e o js não trabalha muito bem com ele como trabalha com os outros.
const person = {
    name: 'Jane',
    age: 21,
}
for (property in person) {
    console.log(person[property])
}