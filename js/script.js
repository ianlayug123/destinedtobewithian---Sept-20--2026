/*=========================================
    MAIN SCRIPT
=========================================*/

const enterBtn = document.getElementById("enterBtn");
const frontPageBtn = document.getElementById("frontPageButton");
const music = document.getElementById("bgMusic");

if (enterBtn) {

    enterBtn.addEventListener("click", () => {

        if (music) {

            music.play().catch(() => {});

        }

        document.getElementById("welcome").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("welcome").style.display = "none";

            document.getElementById("hero").scrollIntoView({

                behavior: "smooth"

            });

        }, 500);

    });

}

if (frontPageBtn) {

    frontPageBtn.addEventListener("click", () => {

        document.getElementById("story").scrollIntoView({

            behavior: "smooth"

        });

    });

}

/* ================= FAQ ACCORDION ================= */

document.querySelectorAll(".faq-question").forEach(button => {

    button.addEventListener("click", () => {

        const item = button.parentElement;
        const answer = item.querySelector(".faq-answer");

        /* Close other questions */
        document.querySelectorAll(".faq-item").forEach(otherItem => {

            if (otherItem !== item) {

                otherItem.classList.remove("active");

                otherItem.querySelector(".faq-answer").style.maxHeight = null;

            }

        });


        /* Toggle current question */

        item.classList.toggle("active");


        if (item.classList.contains("active")) {

            answer.style.maxHeight = answer.scrollHeight + "px";

        } else {

            answer.style.maxHeight = null;

        }

    });

});