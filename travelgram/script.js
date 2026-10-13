// ===== 1. Seleção dos elementos =====
const searchButton = document.querySelector('.search-btn')
const searchInput = document.querySelector('#search-input')
const searchInputWrapper = document.querySelector('.search-input-wrapper')
const menuButton = document.querySelector('#items-btn')
const menu = document.querySelector('#site-menu')

// Mesmo valor do @media do CSS (62em = 992px com a fonte padrão).
// Se mudar aqui, mude lá também.
const desktopBreakpoint = 992

// Se algum elemento não existir no HTML, avisa com uma mensagem clara
if (!searchButton || !searchInput || !searchInputWrapper || !menuButton || !menu) {
    throw new Error('Os controles de navegação do Travelgram não foram encontrados.')
}

// ===== 2. Funções que ligam/desligam (o "interruptor") =====
// O JS só adiciona/remove a classe "is-open". Quem decide a aparência é o CSS.
function setSearchOpen(isOpen) {
    searchInputWrapper.classList.toggle('is-open', isOpen)
    searchButton.setAttribute('aria-expanded', String(isOpen))
    searchButton.setAttribute('aria-label', isOpen ? 'Fechar busca' : 'Abrir busca')

    if (isOpen) {
        searchInput.focus()
    }
}

function setMenuOpen(isOpen) {
    menu.classList.toggle('is-open', isOpen)
    menuButton.setAttribute('aria-expanded', String(isOpen))
    menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu')
}

// ===== 3. Clique na lupa =====
searchButton.addEventListener('click', () => {
    const isSearchOpen = searchInputWrapper.classList.contains('is-open')
    setSearchOpen(!isSearchOpen) // se estava aberta fecha, se estava fechada abre

    // No celular, abrir a busca fecha o menu
    if (!isSearchOpen && window.innerWidth < desktopBreakpoint) {
        setMenuOpen(false)
    }
})

// ===== 4. Clique no botão hambúrguer (só no celular) =====
menuButton.addEventListener('click', () => {
    if (window.innerWidth < desktopBreakpoint) {
        const isMenuOpen = menu.classList.contains('is-open')
        setMenuOpen(!isMenuOpen)
        setSearchOpen(false) // abrir o menu fecha a busca
    }
})

// ===== 5. Clique fora fecha busca e menu =====
document.addEventListener('click', (event) => {
    // Proteção: ignora cliques cujo alvo não é um elemento HTML comum
    if (!(event.target instanceof Element)) {
        return
    }

    // closest() sobe pela árvore do HTML; a vírgula significa "ou"
    if (!event.target.closest('.search-input-wrapper, .search-btn')) {
        setSearchOpen(false)
    }

    if (
        window.innerWidth < desktopBreakpoint
        && !event.target.closest('#site-menu, #items-btn')
    ) {
        setMenuOpen(false)
    }
})

// ===== 6. Tecla Esc fecha tudo e devolve o foco =====
document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') {
        return
    }

    // Guarda o que estava aberto ANTES de fechar
    const menuWasOpen = menu.classList.contains('is-open')
    const searchWasOpen = searchInputWrapper.classList.contains('is-open')

    setMenuOpen(false)
    setSearchOpen(false)

    // Devolve o foco ao botão certo, para quem navega pelo teclado não se perder
    if (menuWasOpen) {
        menuButton.focus()
    } else if (searchWasOpen) {
        searchButton.focus()
    }
})

// ===== 7. Tela grande: limpa o estado =====
// No desktop o CSS ignora o "is-open", mas a classe continuaria lá.
// Sem isso, ao voltar para tela pequena o menu reapareceria já aberto.
window.addEventListener('resize', () => {
    if (window.innerWidth >= desktopBreakpoint) {
        setMenuOpen(false)
        setSearchOpen(false)
    }
})

// ===== 8. Clicar num link do menu fecha o menu =====
menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        setMenuOpen(false)
    })
})
