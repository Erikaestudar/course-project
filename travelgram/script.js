let searchBtn = document.querySelector('.search-btn')
let searchInput = document.querySelector('#search-input')
let itemsBtn = document.querySelector('#items-btn')
let itemsMenu = document.querySelector('.items-menu')

// Garante que o input de busca inicie oculto
searchInput.style.display = 'none'

// Alternar visibilidade do menu de navegação mobile
if (itemsBtn && itemsMenu) {
    itemsBtn.addEventListener('click', (event) => {
        event.stopPropagation() // Impede que o clique na lupa feche o menu

        if (window.innerWidth < 992) {
            // Alterna visibilidade do menu lateral
            itemsMenu.style.display = (itemsMenu.style.display === 'block') ? 'none' : 'block'
            searchInput.style.display = 'none' // Fecha o input se estiver aberto
        }
    })
}

searchBtn.addEventListener('click', (event) => {
    event.stopPropagation()

    let isSearchHidden = searchInput.style.display === 'none' || searchInput.style.display === ''

    if (isSearchHidden) {
        searchInput.style.display = 'block'
        searchInput.focus()
    } else {
        searchInput.style.display = 'none'
    }

    // Só esconde o menu se estiver em tela pequena
    if (window.innerWidth < 992) {
        itemsMenu.style.display = 'none'
    }
})

// Esconder o input ao clicar fora dele
document.body.addEventListener('click', (event) => {
    if (!event.target.closest('#search-input') && !event.target.closest('.search-btn')) {
        searchInput.style.display = 'none'
    }

    if (window.innerWidth < 992) {
        if (!event.target.closest('.items-menu') && !event.target.closest('.items-btn')) {
            itemsMenu.style.display = 'none'
        }
    }
})

// Monitora mudanças no tamanho da tela para evitar perda de foco
window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) {
        // Fecha os menus se estiver em tela grande
        itemsMenu.style.display = 'none'
        searchInput.style.display = 'none'
    }
})

// Captura todos os links dentro do menu
document.querySelectorAll('.items-menu a').forEach(link => {
    link.addEventListener('click', () => {
        itemsMenu.style.display = 'none' // Fecha o menu ao clicar em qualquer link
    })
})



