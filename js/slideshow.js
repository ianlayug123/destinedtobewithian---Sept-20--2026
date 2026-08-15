/* ==========================================
   PROFESSIONAL HERO SLIDESHOW
========================================== */

const slides = document.querySelectorAll(".slide");

const heroImages = [

    "images/hero/hero1.jpg",
    "images/hero/hero2.jpg",
    "images/hero/hero3.jpg",
    "images/hero/hero4.jpg",
    "images/hero/hero5.jpg"

];

slides[0].style.backgroundImage=`url(${heroImages[0]})`;
slides[1].style.backgroundImage=`url(${heroImages[1]})`;

let current=0;

let visible=0;

setInterval(()=>{

    current++;

    if(current>=heroImages.length){

        current=0;

    }

    let hidden=(visible===0)?1:0;

    slides[hidden].style.backgroundImage=
    `url(${heroImages[current]})`;

    slides[hidden].classList.add("active");

    slides[visible].classList.remove("active");

    visible=hidden;

},6000);