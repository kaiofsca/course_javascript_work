{/* ------ Criando e validando formulários ------ */}
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const submitButton = document.querySelector('#submit-button')
const msgError = document.querySelector('.msg')
const items = document.querySelector('.items')

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    // Validando os inputs
    const nameValue = nameInput.value
    const emailValue = emailInput.value

    if (nameValue === '' || emailValue === '') {
        // Mostrando msg de erro
        msgError.textContent = 'Please fill out the fields!'
        msgError.classList = 'error' // add uma classe de erro do styles.css
    } else {
        // criando um elemento li para os valores dos inputs
        const li = document.createElement('li')
        li.classList = 'item'
        li.textContent = `Nome: ${nameValue}, Email: ${emailValue}`
        // add um filho a esse elemrnto
        items.appendChild(li)
        // Removendo a msg de erro
        msgError.remove()
    }
})