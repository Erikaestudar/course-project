// Função para ativar a rolagem suave
function initScroll(containerId) {
    const container = document.querySelector(containerId);
    
    if (container) {
        let isDown = false;
        let startX;
        let scrollLeft;

        // Evento para começar a arrastar
        container.addEventListener('mousedown', (e) => {
            isDown = true;
            container.classList.add('active');
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });

        // Evento para parar de arrastar
        container.addEventListener('mouseleave', () => {
            isDown = false;
            container.classList.remove('active');
        });

        container.addEventListener('mouseup', () => {
            isDown = false;
            container.classList.remove('active');
        });

        // Evento para movimentar o scroll
        container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2; // Velocidade do scroll
            container.scrollLeft = scrollLeft - walk;
        });

        // Rolagem por touch (para mobile)
        container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });

        container.addEventListener('touchmove', (e) => {
            const x = e.touches[0].pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
        });
    }
}

// Inicia a rolagem para os dois elementos
initScroll('#secondary');
initScroll('#weekly > div');
