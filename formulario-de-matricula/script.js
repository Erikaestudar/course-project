let formBtn = document.querySelector('#form-btn')
let mobileMain = document.querySelector('main')
let mobileAside = document.querySelector('aside')
let backBtn = document.querySelector('#back-btn')

// Verifica o tamanho da tela ao carregar e ao redimensionar
window.addEventListener('resize', checkScreen)
checkScreen()

formBtn.addEventListener('click', clicar)
backBtn.addEventListener('click', voltar)

function checkScreen() {
    if (window.innerWidth >= 1024) {
         // Mostra tudo no desktop
        mobileMain.classList.remove ('mobile-hidden')
        mobileAside.classList.remove ('mobile-hidden')
    } else {
        // Mostra apenas o aside no mobile
        mobileMain.classList.add('mobile-hidden')
        mobileAside.classList.remove('mobile-hidden')
    }
}

function clicar() {
    // No mobile, alterna entre main e aside
    if (window.innerWidth < 1024) {
        mobileMain.classList.remove('mobile-hidden')
        mobileAside.classList.add('mobile-hidden')    
    }
}

function voltar() {
    // No mobile, volta pro aside
    if (window.innerWidth < 1024) {
        mobileMain.classList.add('mobile-hidden')
        mobileAside.classList.remove('mobile-hidden')
    }
}

