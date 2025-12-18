// ================================
//  CARD COUNTER
// ================================

export function initCounter() {
    const cards = document.querySelectorAll(".card"); // All cards
    const countContainer = document.querySelector(".count-container");  // Counter container

    let currentCardIndex = 0;                              // Current index

    const options = {                                      // Observer settings
        root: null,                                        // Uses the viewport
        rootMargin: "0% 0%",                               // No margin
        threshold: 0.5,                                    // 50% visible
    };

    const observer = new IntersectionObserver((entries) => { // Creates the observer
        entries.forEach((entry) => {                         // Loop through entries
            if (entry.isIntersecting) {                      // If it is visible

                const cardIndex =                            // Card index
                    Array.from(cards).indexOf(entry.target);

                currentCardIndex = cardIndex;                // Updates index

                const targetY = 150 - currentCardIndex * 150;   // Counter position

                gsap.to(countContainer, {                    // Animates counter
                    y: targetY,                              // Moves vertically
                    duration: 0.3,                           // Animation duration
                    ease: "power1.out",                      // Easing
                    overwrite: true,                         // Cancels previous animations
                });
            }
        });
    }, options);

    cards.forEach((card) => {                               // Loop through cards
        observer.observe(card);                             // Observes each card
    });

}
