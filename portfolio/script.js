
    var options = {
        strings: ["Animesh","a Web Developer", "a Frontend Enthusiast", "a Problem Solver"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
    };
    var typed = new Typed("#typed-text", options);

    document.addEventListener("DOMContentLoaded", () => {
        const flipCards = document.querySelectorAll(".flip-card");

        flipCards.forEach((card) => {
            card.addEventListener("click", () => {
                const innerCard = card.querySelector(".flip-card-inner");
                innerCard.style.transform = 
                    innerCard.style.transform === "rotateY(180deg)" 
                    ? "rotateY(0deg)" 
                    : "rotateY(180deg)";
            });
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".navbar a");

        window.addEventListener("scroll", () => {
            let current = "";
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - 50) {
                    current = section.getAttribute("id");
                }
            });

            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${current}`) {
                    link.classList.add("active");
                }
            });
        });
    });
