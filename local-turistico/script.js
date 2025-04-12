let dropBtn = document.querySelectorAll('svg.drop')
let dropText = document.querySelectorAll('article.drop-text')

// Adiciona um evento de clique a cada botão do dropdown
dropBtn.forEach ((botao, index) => {
    botao.addEventListener('click', (event) => {
        event.stopPropagation() // Evita que o clique se propague para o document

        // Fecha todos os outros dropdowns antes de abrir o clicado
        dropText.forEach((text, i) => {
            let p = text.querySelector("p")
            if (i !== index) {
                p.classList.remove("expandido")
            }
        })

        // Alterna o estado do parágrafo clicado
        let paragrafo = dropText[index].querySelector('p')
        paragrafo.classList.toggle('expandido')
    })
})

// Fecha o dropdown se clicar em qualquer lugar fora dele
document.addEventListener('click', () => {
    dropText.forEach(text => {
        let p = text.querySelector('p')
        p.classList.remove('expandido')
    })
})

// Função para ajustar a visibilidade conforme o tamanho da tela
function ajustarDropdown() {
    if (window.innerWidth >= 768) {
        // Em telas grandes, mostra tudo
        dropText.forEach(text => {
            const p = text.querySelector('p')
            p.classList.add('expandido')
        })
        dropBtn.forEach(botao => botao.style.display = "none")
    } else {
        // Em telas pequenas, volta para modo "resumido"
        dropText.forEach(text => {
            const p = text.querySelector('p')
            p.classList.remove('expandido')
        })
        dropBtn.forEach(botao => botao.style.display = "inline-block")
    }
}

ajustarDropdown()
window.addEventListener('resize', ajustarDropdown)