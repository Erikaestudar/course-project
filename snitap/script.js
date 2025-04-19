window.addEventListener("DOMContentLoaded", () => {
    let rolling = document.querySelector(".rolling")

    // Pega uma imagem (a primeira já colocada no HTML)
    let imgFirst = rolling.querySelector("img")

    // Descobre qual é a largura da tela do navegador
    let widthScreen = window.innerWidth

     // Descobre a largura de UMA imagem (com margem incluída, gap de 1.5rem)
    let widthImg = imgFirst.offsetWidth + 24

    // Calcula quantas imagens precisam pra preencher toda a tela
    let amountImgs = Math.ceil(widthScreen / widthImg) + 1

    // Agora vamos adicionar imagens até chegar na quantidade calculada
    for (let i = 1; i < amountImgs; i++) {
        // Faz uma cópia da imagem
        let clone = imgFirst.cloneNode(true)
        // Coloca a imagem dentro da div
        rolling.appendChild(clone)
    }
})

/*

window.addEventListener("resize", () => {
    location.reload()
})
    
*/