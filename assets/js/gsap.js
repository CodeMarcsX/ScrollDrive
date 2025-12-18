// ================================
// IMPORT GSAP
// ================================

export function initGsap() {
    gsap.registerPlugin(ScrollTrigger);                 // Ativa o ScrollTrigger no GSAP

    const lenis = new Lenis();                          // Inicializa o scroll suave

    lenis.on("scroll", ScrollTrigger.update);           // Atualiza o ScrollTrigger ao rolar

    gsap.ticker.add((time) => {                         // Loop de atualização do GSAP
        lenis.raf(time * 1000);                         // Atualiza o Lenis a cada frame
    });

    gsap.ticker.lagSmoothing(0);                        // Remove suavização de lag 
}