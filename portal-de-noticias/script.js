// Ativa o arraste com mouse; em touch, o menu usa a rolagem nativa do navegador.
function initScroll(containerId) {
    const container = document.querySelector(containerId);
    
    if (container) {
        let isDown = false;
        let startX;
        let scrollLeft;

        // Evento para começar a arrastar
        container.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });

        // Evento para parar de arrastar
        container.addEventListener('mouseleave', () => {
            isDown = false;
        });

        container.addEventListener('mouseup', () => {
            isDown = false;
        });

        // Evento para movimentar o scroll
        container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2; // Velocidade do scroll
            container.scrollLeft = scrollLeft - walk;
        });

    }
}

// Inicia a rolagem para os dois elementos
initScroll('#secondary');
