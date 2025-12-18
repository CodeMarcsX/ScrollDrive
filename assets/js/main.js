import { initGsap } from './gsap.js';
import { initCards } from './cards.js';
import { initCounter } from './counter.js';
import { initFinalText } from './finalText.js';

document.addEventListener("DOMContentLoaded", () => {   // Waiting for the HTML to load.
    initGsap();
    initCards();
    initCounter();
    initFinalText();
});