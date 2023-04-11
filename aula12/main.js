{/* ------ Selecionando elementos do DOM ------ */}
// O DOM é a árvore de elementos do HTML, da para selecionar ele pelo javascript e manipula lo.
// Da para selecionar de duas maneiras getElementById(Retorna uma referência ao elemento) e querySelector(retorna o elemento em si). Na prática quase não tem diferença e da para manipular do mesmo jeito
// Seleciona apenas um elemento
const addUserText = document.querySelector("#add-user")
addUserText.textContent = 'Adicionar usuário'
console.log(addUserText)

const myForm = document.querySelector(".item")
console.log(myForm)

// Selecionando múltiplos elementos
const allItems = document.querySelectorAll('.item') // Mais utilizado
console.log(allItems)
const allItemsToo = document.getElementsByClassName("item") // não é recomendado
console.log(allItemsToo)
