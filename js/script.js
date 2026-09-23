document.addEventListener("DOMContentLoaded", function () {
    //   NAVBAR SCROLL BEHAVIOUR

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 50) {
                navbar.style.position = "fixed";
            } else {
                navbar.style.position = "absolute";
            }

        });

    }

    //    NAVIGATION HOVER EFFECT

    const navButtons = document.querySelectorAll(".btn-nav");

    navButtons.forEach(function (button) {

        button.style.transition =
            "background-color 0.2s ease, color 0.2s ease";

        button.addEventListener("mouseenter", function () {

            this.style.backgroundColor = "#E60000";
            this.style.color = "#FFFFFF";

        });

        button.addEventListener("mouseleave", function () {

            this.style.backgroundColor = "#151B20";
            this.style.color = "#CAD1D9";

        });

    });


    //    PRODUCT CARD IMAGE HOVER

    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(function (card) {

        const image = card.querySelector("img");

        if (!image) {
            return;
        }

        image.style.transition = "transform 0.4s ease";

        card.addEventListener("mouseenter", function () {

            image.style.transform = "scale(1.08)";

        });

        card.addEventListener("mouseleave", function () {

            image.style.transform = "scale(1)";

        });

    });


    //     ENGINEERING CARD HOVER EFFECT

    const engineeringCards = document.querySelectorAll(".engineering-card");

    engineeringCards.forEach(function (card) {

        const image = card.querySelector(".card-icon img");

        if (!image) {
            return;
        }

        card.style.transition = "transform 0.3s ease";
        image.style.transition = "transform 0.4s ease";

        card.addEventListener("mouseenter", function () {

            this.style.transform = "scale(1.03)";
            image.style.transform = "scale(1.15)";

        });

        card.addEventListener("mouseleave", function () {

            this.style.transform = "scale(1)";
            image.style.transform = "scale(1)";

        });

    });
});