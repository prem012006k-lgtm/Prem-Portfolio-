/* =========================================================
   PREM KUMAR — PREMIUM PORTFOLIO JAVASCRIPT
   ========================================================= */


/* =========================================================
   PAGE LOADER
   ========================================================= */

window.addEventListener("load", () => {

    const loader =
        document.getElementById("pageLoader");

    document.body.classList.add("loaded");

    setTimeout(() => {

        if (loader) {
            loader.classList.add("hidden");
        }

    }, 700);

});



/* =========================================================
   PREMIUM TYPEWRITER
   ========================================================= */

/*
    IMPORTANT:

    The changing phrase is inside a dedicated line
    with reserved height.

    This means the hero DOES NOT move when the
    phrase changes.
*/

const typingText =
    document.getElementById("typingText");


const phrases = [

    "continuous improvement.",

    "professional growth.",

    "better processes."

];


let phraseIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeWriter() {

    if (!typingText) return;


    const currentPhrase =
        phrases[phraseIndex];


    if (!deleting) {

        typingText.textContent =
            currentPhrase.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex >=
            currentPhrase.length
        ) {

            deleting = true;

            setTimeout(
                typeWriter,
                1800
            );

            return;
        }


        setTimeout(
            typeWriter,
            75
        );

    }


    else {

        typingText.textContent =
            currentPhrase.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex <= 0) {

            characterIndex = 0;

            deleting = false;

            phraseIndex++;

            if (
                phraseIndex >=
                phrases.length
            ) {

                phraseIndex = 0;

            }


            setTimeout(
                typeWriter,
                350
            );

            return;
        }


        setTimeout(
            typeWriter,
            45
        );

    }

}


if (typingText) {

    typeWriter();

}



/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuBtn =
    document.getElementById("menuBtn");


const mobileMenu =
    document.getElementById("mobileMenu");


if (menuBtn && mobileMenu) {

    menuBtn.addEventListener(
        "click",
        () => {

            mobileMenu.classList.toggle(
                "open"
            );

        }
    );

}


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileMenu.classList.remove(
                    "open"
                );

            }
        );

    });



/* =========================================================
   SMOOTH SCROLL
   ========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    });



/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


function updateActiveNav() {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;


        const sectionBottom =
            sectionTop +
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection =
                section.getAttribute(
                    "id"
                );

        }

    });


    navLinks.forEach(link => {

        link.classList.remove(
            "active"
        );


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add(
                "active"
            );

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav,
    { passive: true }
);


updateActiveNav();



/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

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

    revealObserver.observe(
        element
    );

});



/* =========================================================
   CURRENT YEAR
   ========================================================= */

const year =
    document.getElementById(
        "year"
    );


if (year) {

    year.textContent =
        new Date().getFullYear();

}



/* =========================================================
   PREMIUM PARTICLES
   ========================================================= */

const canvas =
    document.getElementById(
        "particles"
    );


if (canvas) {

    const ctx =
        canvas.getContext("2d");


    let particles = [];


    function resizeCanvas() {

        canvas.width =
            window.innerWidth;

        canvas.height =
            window.innerHeight;

    }


    resizeCanvas();


    window.addEventListener(
        "resize",
        resizeCanvas
    );


    function createParticles() {

        particles = [];


        const count =
            Math.min(
                80,
                Math.floor(
                    window.innerWidth / 18
                )
            );


        for (
            let i = 0;
            i < count;
            i++
        ) {

            particles.push({

                x:
                    Math.random() *
                    canvas.width,

                y:
                    Math.random() *
                    canvas.height,

                size:
                    Math.random() *
                    1.6 +
                    0.4,

                speed:
                    Math.random() *
                    0.18 +
                    0.03,

                opacity:
                    Math.random() *
                    0.45 +
                    0.1

            });

        }

    }


    createParticles();


    function animateParticles() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        particles.forEach(particle => {

            particle.y -=
                particle.speed;


            if (
                particle.y < -10
            ) {

                particle.y =
                    canvas.height +
                    10;

            }


            ctx.beginPath();


            ctx.arc(
                particle.x,
                particle.y,
                particle.size,
                0,
                Math.PI * 2
            );


            ctx.fillStyle =
                `rgba(151, 140, 255, ${particle.opacity})`;


            ctx.fill();

        });


        requestAnimationFrame(
            animateParticles
        );

    }


    animateParticles();

}



/* =========================================================
   CARD POINTER GLOW
   ========================================================= */

const cards =
    document.querySelectorAll(
        ".skill-card, .mini-card, .education-card, .experience-card"
    );


cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            card.style.background = `
                radial-gradient(
                    circle at ${x}px ${y}px,
                    rgba(135, 120, 255, 0.09),
                    rgba(22, 27, 55, 0.78) 38%,
                    rgba(9, 12, 28, 0.78)
                )
            `;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.background = "";

        }
    );

});



/* =========================================================
   CLOSE MOBILE MENU WHEN ESC IS PRESSED
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            mobileMenu
        ) {

            mobileMenu.classList.remove(
                "open"
            );

        }

    }
);
