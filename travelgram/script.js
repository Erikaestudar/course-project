let searchBtn = document.querySelector('.search-btn')
let searchInput = document.querySelector('#search-input')
let itensBtn = document.querySelector('#itens-btn')
let itensMenu = document.querySelector('#itens')

// Garante que o input de busca inicie oculto
searchInput.style.display = 'none'

// Alternar visibilidade do menu de navegação mobile
if (itensBtn && itensMenu) {
    itensBtn.addEventListener('click', (event) => {
        event.stopPropagation() // Impede que o clique na lupa feche o menu

        if (window.innerWidth < 992) {
            itensMenu.style.display = (itensMenu.style.display === 'block') ? 'none' : 'block'
            searchInput.style.display = 'none' // Fecha o input se estiver aberto
        }
    })
}

// Alternar visibilidade ao clicar na lupa
if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', (event) => {
        event.stopPropagation() // Impede que o clique na lupa feche o input

        // Alterna a exibição do input de busca
        if (searchInput.style.display === 'none' || searchInput.style.display === '') {
            searchInput.style.display = 'block'
            searchInput.focus(); // Mantém o foco para digitação imediata
        } else {
            searchInput.style.display = 'none'
        }
            // Se o menu de navegação estiver aberto, fecha ao abrir a busca
            itensMenu.style.display = 'none'
    })
}


// Esconder o input ao clicar fora dele
document.body.addEventListener('click', (event) => {
    if (!event.target.closest('#search-input') && !event.target.closest('.search-btn')) {
        searchInput.style.display = 'none'
    }

    if (!event.target.closest('#itens') && !event.target.closest('#itens-btn')) {
        itens.style.display = 'none'
    }
})

// Monitora mudanças no tamanho da tela para evitar perda de foco
window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) {
        itensMenu.style.display = 'none'
        searchInput.style.display = 'none'
    }
})

// Captura todos os links dentro do menu
document.querySelectorAll('#itens a').forEach(link => {
    link.addEventListener('click', () => {
        itens.style.display = 'none' // Fecha o menu ao clicar em qualquer link
    })
})



