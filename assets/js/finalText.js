// ================================
// ANIMATION OF THE FINAL TEXT
// ================================

export function initFinalText() {
    gsap.registerPlugin(ScrollTrigger); // Registra o plugin ScrollTrigger no GSAP

    const split = new SplitType(".outro p", { // Divide o texto do parágrafo em partes animáveis
        types: "lines"                        // Quebra o texto em linhas visuais
    });
    
    gsap.to(".outro p .line", {               // Anima todas as linhas geradas pelo SplitType
        backgroundPositionX: "0%",            // Move o gradiente para revelar a cor do texto
        ease: "none",                         // Mantém a animação linear (sem aceleração)
        stagger: 1,                           // Anima uma linha após a outra
    
        scrollTrigger: {                      // Configuração da animação baseada no scroll
            trigger: ".outro",                // Elemento que controla o início e fim da animação
            start: "top 30%",                 // Começa quando o topo da seção chega a 30% da tela
            end: "bottom 100%",               // Termina quando o fim da seção chega ao fim da tela
            scrub: true,                      // Sincroniza a animação diretamente com o scroll
        }
    });
}