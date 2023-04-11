{/* ------ Eventos ------ */}
const items = document.querySelector(".items");
const submitButton = document.querySelector('#submit-button')
const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
// Enventos são basicamente formas que temos de executar determinada ação quando alguma coisa acontece.
// Escutando o evento de envio do formulário
// add um evento nesse botão, o primeiro parâmetro é o tipo de evento que é "click" e no segundo parâmetro é a função. A função recebe "e" ou qualquer outra palavra para a página não recarregar quando clickar no botão de tipo submit.

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    
    const nameValue = nameInput.value
    const emailValue = emailInput.value
    // Escutando evento de mudança de input
    // nameInput.addEventListener('change', (e) => {
    //     console.log(e.target.value)
    // })
    
    // Validação simples dos inputs do formulário
    if (nameValue === '' || emailValue === '') {
        return alert('Please fill out all the fields!')
    } else {
        myForm.style.background = 'purple' 
    }

    // Colocando os Valores nos itens (Desafio concluido)
    items.children[0].textContent = nameValue
    items.children[1].textContent = emailValue
      
}) 