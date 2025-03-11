let searchBtns = document.querySelectorAll('.search-btn')
let searchInput = document.querySelector('#search-input')
let searchInputDesktop = document.querySelector('#search-input-desktop')
let itensBtn = document.querySelector('#itens-btn')
let itensMenu = document.querySelector('#itens')


if (itensBtn) {
    itensBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Impede que o clique na lupa feche o menu

        if (window.innerWidth < 992) {
            if (itensMenu.style.display === 'block') {
                itensMenu.style.display = 'none'
            } else {
                itensMenu.style.display = 'block'
                searchInput.style.display = 'none' // Fecha o input de busca se estiver aberto
                searchInputDesktop.style.display = 'none'
            }
        }
    })
}




    // Alternar visibilidade ao clicar na lupa
    searchBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            event.stopPropagation() // Impede que o clique na lupa feche o input

            if (window.innerWidth <= 992) {
                toggleInput(searchInput)
            } else {
                toggleInput(searchInputDesktop)
            }

            // Se o menu de navegação estiver aberto, fecha ao abrir a busca
            itensMenu.style.display = 'none'
        })
    })

    // Função para alternar visibilidade do input e manter foco
    function toggleInput(inputElement) {
        let computedStyle = getComputedStyle(inputElement).display

        if (computedStyle === 'none') {
            inputElement.style.display = 'block'
            inputElement.focus();
        } else {
            inputElement.style.display = 'none'
        }
    }

    // Monitora mudanças no tamanho da tela para evitar perda de foco
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 992) {
            itensMenu.style.display = 'none';
            searchInput.style.display = 'none';
            searchInputDesktop.style.display = 'none'
        }
    })

    // Esconder o input ao clicar fora dele
    document.body.addEventListener('click', () => {
        if (window.innerWidth < 992) {
            itensMenu.style.display = 'none'
            searchInput.style.display = 'none'
            searchInputDesktop.style.display = 'none'
        } else {
            searchInputDesktop.style.display = 'none'
        }
    })




