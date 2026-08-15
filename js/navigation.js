document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("menuButton");
    const navLinks = document.getElementById("navLinks");

    if (!menuButton || !navLinks) {
        return;
    }

    /* OPEN / CLOSE MOBILE MENU */

    menuButton.addEventListener("click", function (event) {

        event.stopPropagation();

        navLinks.classList.toggle("active");

    });


    /* CLOSE MENU AFTER CLICKING A LINK */

    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

        });

    });


    /* CLOSE MENU WHEN CLICKING OUTSIDE */

    document.addEventListener("click", function (event) {

        if (
            !navLinks.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {

            navLinks.classList.remove("active");

        }

    });

});