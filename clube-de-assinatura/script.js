/*
document.addEventListener('DOMContentLoaded', function() {
    let iconsContainer = document.querySelector('#hero .icons-container')

    let icons = [
        document.querySelector('#hero .icon-01'),
        document.querySelector('#hero .icon-02'),
        document.querySelector('#hero .icon-03')
    ]

    let parts = [
        document.querySelector('#hero .part-01'),
        document.querySelector('#hero .part-02'),
        document.querySelector('#hero .part-03')
    ]

    let animationStarted = false

    function resetState() {
        icons.forEach(icon => {
            icon.style.opacity = '0';
            icon.style.scale = '0.8';
        });
        parts.forEach(part => {
            part.style.opacity = '0.3';
            part.querySelector('span').style.color = 'inherit';
        });
    }

    function startAnimation() {
        animationInProgress = true

        parts.forEach(part => {
            part.style.opacity = '1'
        })

        icons[0].style.opacity = '1'
        icons[0].style.scale = '1'

        setTimeout(() => {
            icons[1].style.opacity = '1'
            icons[1].style.scale = '1'
        }, 700)

        setTimeout(() => {
            icons[2].style.opacity = '1'
            icons[2].style.scale = '1'
        }, 1400)

        // Depois que todos aparecerem, esperar mais um pouquinho para sumir
        setTimeout(() => {
            icons.forEach(icon => {
                icon.style.opacity = '0'
                icon.style.scale = '0.8'
            })
        }, 2500)

        // Depois dos ícones sumirem, alterar o texto
        setTimeout(() => {
            parts.forEach(part => {
                part.style.opacity = '0.3' // aqui reduz o texto
                part.querySelector('span').style.color = 'inherit'; // tira a cor azul dos spans
            });
            animationInProgress = false
        }, 3200); // depois dos ícones sumirem de vez
    }
    
    iconsContainer.addEventListener('mouseenter', function() {
        // evita reiniciar se já começou
        if (animationInProgress) return
        resetState()
        startAnimation()
    })
})
*/

document.addEventListener("DOMContentLoaded", () => {
    let pricingTable = document.querySelector(".pricing-table")
    let animationStarted = false

    pricingTable.addEventListener("mouseenter", () => {
      if (!animationStarted) {
        pricingTable.classList.add("start-animation")
        animationStarted = true
      }
    })
})

document.addEventListener("DOMContentLoaded", () => {
    let cards = document.querySelectorAll(".price-card")
    let halfYearCard = document.querySelector(".price-card.half-year")
  
    cards.forEach(card => {
      card.addEventListener("mouseenter", () => {
        card.classList.add("hovering")
        // Se o hover não for no half-year, tira o destaque
        if (!card.classList.contains("half-year")) {
          halfYearCard.classList.remove("highlight")
        }
      })
  
      card.addEventListener("mouseleave", () => {
        card.classList.remove("hovering")
        
        // Verifica se nenhum outro card está com hover
        let anyHovered = [...cards].some(c => c.classList.contains("hovering"))
        if (!anyHovered) {
          halfYearCard.classList.add("highlight")
        }
      })
    })
  
    // Inicialmente: destaca o half-year
    halfYearCard.classList.add("highlight")
  })
  

  document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".pricing-table");
  
    let isDown = false;
    let startX;
    let scrollLeft;
  
    container.addEventListener("mousedown", (e) => {
      isDown = true;
      container.classList.add("dragging");
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });
  
    container.addEventListener("mouseleave", () => {
      isDown = false;
      container.classList.remove("dragging");
    });
  
    container.addEventListener("mouseup", () => {
      isDown = false;
      container.classList.remove("dragging");
    });
  
    container.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5; // Velocidade do arrasto
      container.scrollLeft = scrollLeft - walk;
    });
  });
  