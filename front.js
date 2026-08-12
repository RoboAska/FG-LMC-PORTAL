/* ==========================================
   FG LMC Inventory Management System
   Front Page v3.0
========================================== */

"use strict";

// ==========================================
// ELEMENTS
// ==========================================

const enterBtn = document.getElementById("enterBtn");
const welcomeCard = document.getElementById("welcomeCard");
const particles = document.getElementById("particles");

let isEntering = false;


// ==========================================
// CREATE FLOATING PARTICLES
// ==========================================

function createParticles(){

    for(let i = 0; i < 45; i++){

        const particle = document.createElement("div");

        particle.className = "particle";

        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";

        const size = Math.random() * 5 + 3;

        particle.style.width = size + "px";
        particle.style.height = size + "px";

        particle.style.opacity = Math.random() * .7 + .2;

        particle.style.animationDuration =
            (Math.random() * 10 + 8) + "s";

        particle.style.animationDelay =
            Math.random() * 6 + "s";

        particles.appendChild(particle);

    }

}

createParticles();


// ==========================================
// ENTER SYSTEM
// ==========================================

enterBtn.addEventListener("click", enterSystem);

document.addEventListener("keydown", function(e){

    if(e.key === "Enter"){

        enterSystem();

    }

});


// ==========================================
// ENTER ANIMATION
// ==========================================

function enterSystem(){

    if(isEntering) return;

    isEntering = true;

    enterBtn.disabled = true;

    // Button feedback
    enterBtn.style.transform = "scale(.97)";
    enterBtn.style.opacity = ".9";

    // Card zoom
    welcomeCard.classList.add("entering");

    // Fade page
    document.body.classList.add("fade-out");

    // Redirect
    setTimeout(() => {

        window.location.href = "dashboard.html";

    }, 400);

}


// ==========================================
// CARD GLOW
// ==========================================

setInterval(() => {

    welcomeCard.animate([

        {
            boxShadow:"0 25px 60px rgba(0,0,0,.45)"
        },

        {
            boxShadow:"0 30px 70px rgba(34,197,94,.35)"
        },

        {
            boxShadow:"0 25px 60px rgba(0,0,0,.45)"
        }

    ],{

        duration:3000

    });

},3000);