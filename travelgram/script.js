const searchButton = document.querySelector('.search-btn')
const searchInput = document.querySelector('#search-input')
const searchInputWrapper = document.querySelector('.search-input-wrapper')
const menuButton = document.querySelector('#items-btn')
const menu = document.querySelector('#site-menu')
const desktopBreakpoint = 992

if (!searchButton || !searchInput || !searchInputWrapper || !menuButton || !menu) {
    throw new Error('Os controles de navegação do Travelgram não foram encontrados.')
}

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

searchButton.addEventListener('click', () => {
    const isSearchOpen = searchInputWrapper.classList.contains('is-open')
    setSearchOpen(!isSearchOpen)

    if (!isSearchOpen && window.innerWidth < desktopBreakpoint) {
        setMenuOpen(false)
    }
})

menuButton.addEventListener('click', () => {
    if (window.innerWidth < desktopBreakpoint) {
        const isMenuOpen = menu.classList.contains('is-open')
        setMenuOpen(!isMenuOpen)
        setSearchOpen(false)
    }
})

document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) {
        return
    }

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

document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') {
        return
    }

    const menuWasOpen = menu.classList.contains('is-open')
    const searchWasOpen = searchInputWrapper.classList.contains('is-open')

    setMenuOpen(false)
    setSearchOpen(false)

    if (menuWasOpen) {
        menuButton.focus()
    } else if (searchWasOpen) {
        searchButton.focus()
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= desktopBreakpoint) {
        setMenuOpen(false)
        setSearchOpen(false)
    }
})

menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        setMenuOpen(false)
    })
})
