// ================================
//  CARD COUNTER
// ================================

export function initCounter() {
    const cards = document.querySelectorAll(".card"); // Todos os cards 
    const countContainer = document.querySelector(".count-container");  // Container do contador

    let currentCardIndex = 0;                              // Índice atual

    const options = {                                      // Configurações do observer
        root: null,                                        // Usa a viewport
        rootMargin: "0% 0%",                               // Sem margem
        threshold: 0.5,                                    // 50% visível
    };

    const observer = new IntersectionObserver((entries) => { // Cria o observer
        entries.forEach((entry) => {                         // Loop nas entradas
            if (entry.isIntersecting) {                      // Se estiver visível

                const cardIndex =                            // Índice do card
                    Array.from(cards).indexOf(entry.target);

                currentCardIndex = cardIndex;                // Atualiza índice

                const targetY = 150 - currentCardIndex * 150;   // Posição do contador

                gsap.to(countContainer, {                    // Anima contador
                    y: targetY,                              // Move verticalmente
                    duration: 0.3,                           // Tempo da animação
                    ease: "power1.out",                      // Suavização
                    overwrite: true,                         // Cancela animações antigas
                });
            }
        });
    }, options);

    cards.forEach((card) => {                               // Loop nos cards
        observer.observe(card);                             // Observa cada card
    });
}