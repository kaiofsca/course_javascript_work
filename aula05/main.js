{/* ------ Objetos ------ */}
// Guarda valores dentro de propriedades

const person = {
    firtName: 'Kaio',
    lastName: 'Fonseca',
    age: 19,
    hobbies: ['jogar fut', 'ver séries', 'acompanhar lives'],
    dog: {
        name: 'Blayde',
        age: 14
    }
};

const firtName = person.firtName
const lastName = person.lastName
const age = person.age
const hobbies = person.hobbies[1]

console.log(`Meu nome é ${firtName} ${lastName}, tenho ${age} anos! E gosto de ${hobbies}.`)

// Adcionar propriedades em um obj

// person.dog = 'Blayde';
console.log(person)

// Lista contendo vários objetos ou Utilizando lista com vários objetos

const todos = [
    {
        id: 1,
        description: 'Estudar programação',
        isCompleted: false
    },
    {
        id: 2,
        description: 'Ler',
        isCompleted: true,
    },
    {
        id: 3,
        description: 'Treinar',
        isCompleted: true,
    },
]
// Selecionando o description do id 3 da lista
console.log(todos[2].description)
