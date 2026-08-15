/*=========================================
    SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(".storyCard");

const revealOnScroll = () => {

    revealElements.forEach((card) => {

        const top = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 120) {
            card.classList.add("show");
        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();