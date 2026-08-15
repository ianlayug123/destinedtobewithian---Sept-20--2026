document.addEventListener("DOMContentLoaded", function () {

    const loader = document.getElementById("loadingScreen");

    if (!loader) {
        return;
    }


    /* ==========================================
       SHOW LOADER
    ========================================== */

    loader.style.display = "flex";
    loader.style.opacity = "1";


    /* ==========================================
       FUNCTION TO HIDE LOADER
    ========================================== */

    function hideLoader() {

        loader.classList.add("loaded");

        loader.style.opacity = "0";

        setTimeout(function () {

            loader.style.display = "none";

        }, 500);

    }


    /* ==========================================
       NORMAL LOAD
       
       Wait for the page itself to load.
    ========================================== */

    window.addEventListener(
        "load",
        function () {

            setTimeout(function () {

                hideLoader();

            }, 500);

        }
    );


    /* ==========================================
       MOBILE SAFETY TIMEOUT
       
       IMPORTANT:
       Don't allow the loading screen to stay
       forever because of a large image/video.
    ========================================== */

    setTimeout(function () {

        hideLoader();

    }, 5000);


});