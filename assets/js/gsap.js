// ================================
// IMPORT GSAP
// ================================

export function initGsap() {
    gsap.registerPlugin(ScrollTrigger);                 // Enables ScrollTrigger in GSAP

    const lenis = new Lenis();                          // Initializes smooth scrolling

    lenis.on("scroll", ScrollTrigger.update);           // Updates ScrollTrigger on scroll

    gsap.ticker.add((time) => {                         // GSAP update loop
        lenis.raf(time * 1000);                         // Updates Lenis on each frame
    });

    gsap.ticker.lagSmoothing(0);                        // Disables lag smoothing

}
