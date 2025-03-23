let formBtn = document.querySelector('#form-btn')
let mobileMain = document.querySelector('main')
let mobileAside = document.querySelector('aside')
let backBtn = document.querySelector('#back-btn')

formBtn.addEventListener('click', clicar)
backBtn.addEventListener('click', voltar)

function clicar() {
    if (window.innerWidth < 1280) {
        mobileMain.style.display = 'block'
        mobileAside.style.display = 'none'
    }
}

function voltar() {
    if (window.innerWidth < 1280) {
        mobileMain.style.display = 'none'
        mobileAside.style.display = 'block'
    }
}

if (window.innerWidth >= 1280) {
    mobileMain.style.display = 'block'
    mobileAside.style.display = 'block'
}