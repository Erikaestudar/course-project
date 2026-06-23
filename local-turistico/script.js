let dropBtn = document.querySelectorAll('svg.drop')
let dropText = document.querySelectorAll('article.drop-text')

// Adiciona um evento de clique a cada botão do dropdown
dropBtn.forEach ((expBtn, index) => {
    expBtn.addEventListener('click', (event) => {
        event.stopPropagation() // Evita que o clique se propague para o document

        // Fecha todos os outros dropdowns antes de abrir o clicado
        dropText.forEach((text, i) => {
            let p = text.querySelector("p")
            if (i !== index) {
                p.classList.remove("expanded")
            }
        })

        // Alterna o estado do parágrafo clicado
        let paragraph = dropText[index].querySelector("p")
        paragraph.classList.toggle("expanded")
    })
})

// Fecha o dropdown se clicar em qualquer lugar fora dele
document.addEventListener('click', () => {
    dropText.forEach(text => {
        let p = text.querySelector("p")
        p.classList.remove("expanded")
    })
})