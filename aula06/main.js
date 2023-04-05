{/* ------ JSON ------ */}
// Convertendo uma variável para JSON

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

// Como enviar uma lista de objetos para o backend
// Precisa converter para JSON

const todosJSON = JSON.stringify(todos)
console.log(todosJSON)

// Convertendo o JSON em variável
const todosList = JSON.parse(todosJSON)
console.log(todosList)