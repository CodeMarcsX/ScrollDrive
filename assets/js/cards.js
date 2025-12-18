// ================================
//  CARD MOVEMENT
// ================================

export function initCards() {
    const stickySection = document.querySelector(".class"); // Section that will stay fixed
    const stickyHeight = window.innerHeight * 7;           // Pin duration
    const cards = document.querySelectorAll(".card"); // All cards
    const totalCards = cards.length;                       // Number of cards

    ScrollTrigger.create({                                 // Creates the scroll effect
        trigger: stickySection,                            // Trigger element
        start: "top top",                                  // Start at the top
        end: `+=${stickyHeight}px`,                        // End of the pin
        pin: true,                                         // Pins the section
        pinSpacing: true,                                  // Keeps space in the layout
        onUpdate: (self) => {                              // Updates on each scroll
            positionCards(self.progress);                  // Moves the cards
        }
    });

    const getRadius = () => {                              // Calculates the arc radius
        return window.innerWidth < 900                     // Checks screen width
            ? window.innerWidth * 7.5                      // Radius for mobile
            : window.innerWidth * 2.5;                     // Radius for desktop
    };

    const arcAngle = Math.PI * 0.43;                        // Arc opening
    const startAngle = Math.PI / 2 - arcAngle / 1.4;         // Centers the arc

    function positionCards(progress = 0) {                 // Positions the cards

        const radius = getRadius();                        // Current radius
        const totalTravel = 1 + totalCards / 8;          // Total travel distance
        const adjustedProgress =                           // Progress adjustment
            (progress * totalTravel - 1) * 0.75;

        cards.forEach((card, i) => {                       // Loop through cards
            const normalizedProgress =                     // Distribution along the arc
                (totalCards - 1.4 - i) / totalCards;

            const cardProgress =                           // Final progress
                normalizedProgress + adjustedProgress;

            const angle =                                  // Card angle
                startAngle + arcAngle * cardProgress;

            const x = Math.cos(angle) * radius;            // X position
            const y = Math.sin(angle) * radius;            // Y position
            const rotation =                               // Card rotation
                (angle - Math.PI / 2) * (180 / Math.PI);

            gsap.set(card, {                               // Applies transformations
                x: x,                                      // Moves on X axis
                y: -y + radius,                            // Moves on Y axis
                rotation: -rotation,                       // Applies rotation
                transformOrigin: "center center",          // Transform origin
            });
        });
    }

    positionCards(0);                                      // Initial state

    window.addEventListener("resize", () =>                // Resize event
        positionCards(0)                                   // Recalculate positions
    );
}
