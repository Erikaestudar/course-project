let dropBtn = document.querySelectorAll('svg.drop')
let dropText = document.querySelectorAll('article.drop-text')

// Adiciona um evento de clique a cada botão do dropdown
dropBtn.forEach ((botao, index) => {
    botao.addEventListener('click', (event) => {
        event.stopPropagation() // Evita que o clique se propague para o document

        // Fecha todos os outros dropdowns antes de abrir o clicado
        dropText.forEach((text, i) => {
            if (i !== index) {
                text.style.display = "none"
            }
        })

        // Alterna a visibilidade do dropdown clicado
        if (dropText[index].style.display === "block") {
            dropText[index].style.display = "none"
        } else {
            dropText[index].style.display = "block"
        }
    })
})

// Fecha o dropdown se clicar em qualquer lugar fora dele
document.addEventListener('click', () => {
    dropText.forEach(texto => {
        texto.style.display = "none"
    })
})

// Função para ajustar a visibilidade conforme o tamanho da tela
function ajustarDropdown() {
    if (window.innerWidth >= 768) {
        dropText.forEach(texto => texto.style.display = "block")
        dropBtn.forEach(botao => botao.style.display = "none")
    } else {
        dropBtn.forEach(botao => botao.style.display = "inline-block")
        dropText.forEach(texto => texto.style.display = "none")
    }
}