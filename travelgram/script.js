let searchBtns = document.querySelectorAll('.search-btn')
let searchInput = document.querySelector('#search-input')
let searchInputDesktop = document.querySelector('#search-input-desktop')

// Verifica se os inputs existem antes de adicionar os eventos
if (searchInput && searchInputDesktop) {

    // Alternar visibilidade ao clicar na lupa
    searchBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            event.stopPropagation() // Impede que o clique na lupa feche o input

            if (window.innerWidth <= 992) {
                toggleInput(searchInput)
            } else {
                toggleInput(searchInputDesktop)
            }
        })
    })

    // Função para alternar visibilidade do input e manter foco
    function toggleInput(inputElement) {
        if (inputElement.style.display === 'none' || inputElement.style.display === '') {
            inputElement.style.display = 'block'
            inputElement.focus();
        } else {
            inputElement.style.display = 'none'
        }
    }

    // Monitora mudanças no tamanho da tela para evitar perda de foco
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            if (searchInput.style.display === 'block') {
                searchInput.style.display = 'none' // Esconde input mobile ao mudar para desktop
            }
        } else {
            if (searchInputDesktop.style.display === 'block') {
                searchInputDesktop.style.display = 'none' // Esconde input desktop ao mudar para mobile
            }
        }
    })

    // Esconder o input ao clicar fora dele
    document.body.addEventListener('click', () => {
        if (searchInput.style.display === 'block') {
            searchInput.style.display = 'none'
        }
        if (searchInputDesktop.style.display === 'block') {
            searchInputDesktop.style.display = 'none'
        }
    })

    // Impedir que cliques dentro do input o fechem
    [searchInput, searchInputDesktop].forEach((input) => {
        input.addEventListener('click', (event) => {
            event.stopPropagation()
        })
    })
}
