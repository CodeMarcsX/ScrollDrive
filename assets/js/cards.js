// ================================
//  CARD MOVEMENT
// ================================

export function initCards() {
    const stickySection = document.querySelector(".class"); // Seção que ficará fixa
    const stickyHeight = window.innerHeight * 7;           // Duração do pin
    const cards = document.querySelectorAll(".card"); // Todos os cards 
    const totalCards = cards.length;                       // Quantidade de cards

    ScrollTrigger.create({                                 // Cria o efeito de scroll
        trigger: stickySection,                            // Elemento disparador
        start: "top top",                                  // Início no topo
        end: `+=${stickyHeight}px`,                        // Fim do pin
        pin: true,                                         // Fixa a seção
        pinSpacing: true,                                  // Mantém espaço no layout
        onUpdate: (self) => {                              // Atualiza a cada scroll
            positionCards(self.progress);                  // Move os cards
        }
    });

    const getRadius = () => {                              // Calcula o raio do arco
        return window.innerWidth < 900                     // Verifica largura da tela
            ? window.innerWidth * 7.5                      // Raio para mobile
            : window.innerWidth * 2.5;                     // Raio para desktop
    };

    const arcAngle = Math.PI * 0.43;                        // Abertura do arco
    const startAngle = Math.PI / 2 - arcAngle / 1.4;         // Centraliza o arco

    function positionCards(progress = 0) {                 // Posiciona os cards

        const radius = getRadius();                        // Raio atual
        const totalTravel = 1 + totalCards / 8;          // Distância total
        const adjustedProgress =                           // Ajuste de progresso
            (progress * totalTravel - 1) * 0.75;

        cards.forEach((card, i) => {                       // Loop nos cards
            const normalizedProgress =                     // Distribuição no arco
                (totalCards - 1.4 - i) / totalCards;

            const cardProgress =                           // Progresso final
                normalizedProgress + adjustedProgress;

            const angle =                                  // Ângulo do card
                startAngle + arcAngle * cardProgress;

            const x = Math.cos(angle) * radius;            // Posição X
            const y = Math.sin(angle) * radius;            // Posição Y
            const rotation =                               // Rotação do card
                (angle - Math.PI / 2) * (180 / Math.PI);

            gsap.set(card, {                               // Aplica transformações
                x: x,                                      // Move no eixo X
                y: -y + radius,                            // Move no eixo Y
                rotation: -rotation,                       // Aplica rotação
                transformOrigin: "center center",          // Origem da transformação
            });
        });
    }

    positionCards(0);                                      // Estado inicial

    window.addEventListener("resize", () =>                // Evento de resize
        positionCards(0)                                   // Recalcula posições
    );
}
