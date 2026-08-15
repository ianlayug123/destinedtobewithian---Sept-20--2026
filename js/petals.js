/* ==========================================
   GOLD PARTICLES
========================================== */

function createParticle(){

    const particle = document.createElement("div");

    particle.className = "particle";

    particle.style.left = Math.random()*100 + "vw";

    particle.style.width = (4 + Math.random()*6) + "px";

    particle.style.height = particle.style.width;

    particle.style.animationDuration = (8 + Math.random()*6) + "s";

    particle.style.opacity = Math.random() * .7 + .3;

    document.body.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    },15000);

}

setInterval(createParticle,250);