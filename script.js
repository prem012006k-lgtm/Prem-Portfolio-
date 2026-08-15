/* =====================================================
   PREM KUMAR PORTFOLIO
   INTERACTIONS & ANIMATIONS
===================================================== */


/* ================= TYPING EFFECT ================= */

const typingElement =
    document.getElementById("typing");

const words = [
    "continuous learning.",
    "better processes.",
    "problem solving.",
    "professional growth."
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (
            characterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1600
            );

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1)
                % words.length;

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 45 : 80
    );

}


typeEffect();



/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* ================= MOBILE MENU ================= */

const menuButton =
    document.getElementById(
        "menuButton"
    );

const navigation =
    document.querySelector("nav");


menuButton.addEventListener(
    "click",
    () => {

        navigation.classList.toggle(
            "mobile-open"
        );

    }
);


navigation
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navigation.classList.remove(
                    "mobile-open"
                );

            }
        );

    });



/* ================= MOUSE GLOW ================= */

const glow =
    document.createElement("div");

glow.classList.add(
    "mouse-glow"
);

document.body.appendChild(glow);


const glowStyle =
    document.createElement("style");

glowStyle.textContent = `

    .mouse-glow {

        position: fixed;

        width: 280px;

        height: 280px;

        border-radius: 50%;

        pointer-events: none;

        z-index: -1;

        background:
            radial-gradient(
                circle,
                rgba(93,120,255,0.09),
                transparent 65%
            );

        transform:
            translate(-50%,-50%);

        transition:
            left .12s ease,
            top .12s ease;

    }

`;

document.head.appendChild(
    glowStyle
);


document.addEventListener(
    "mousemove",
    event => {

        glow.style.left =
            event.clientX + "px";

        glow.style.top =
            event.clientY + "px";

    }
);



/* ================= CARD TILT ================= */

const cards =
    document.querySelectorAll(
        ".skill-card"
    );


cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateX =
                ((y - rect.height / 2)
                / rect.height) * -5;

            const rotateY =
                ((x - rect.width / 2)
                / rect.width) * 5;

            card.style.transform =
                `perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-7px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "";

        }
    );

});



/* ================= NAVBAR SCROLL ================= */

const navbar =
    document.querySelector(
        ".navbar"
    );


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(3,5,12,0.82)";

        } else {

            navbar.style.background =
                "rgba(3,5,12,0.55)";

        }

    }
);
