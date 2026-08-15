/* =====================================================
   PREM KUMAR — PORTFOLIO INTERACTIONS
===================================================== */


/* =====================================================
   1. TYPING ANIMATION
===================================================== */

const typingElement = document.getElementById("typing");

const words = [
    "quality.",
    "continuous improvement.",
    "problem solving.",
    "professional growth.",
    "new possibilities."
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];


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
                1700
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
                (wordIndex + 1) %
                words.length;

        }

    }


    const speed =
        deleting ? 45 : 85;

    setTimeout(
        typeEffect,
        speed
    );
}


typeEffect();



/* =====================================================
   2. MOBILE NAVIGATION
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


if (menuButton && navigation) {

    menuButton.addEventListener(
        "click",
        () => {

            navigation.classList.toggle(
                "mobile-open"
            );

        }
    );


    const navigationLinks =
        navigation.querySelectorAll("a");


    navigationLinks.forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    navigation.classList.remove(
                        "mobile-open"
                    );

                }
            );

        }
    );

}



/* =====================================================
   3. SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

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

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);



/* =====================================================
   4. ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        "nav a"
    );


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";


        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop - 180;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    currentSection =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navLinks.forEach(
            link => {

                link.style.color =
                    "#929ab2";


                if (
                    link.getAttribute("href") ===
                    `#${currentSection}`
                ) {

                    link.style.color =
                        "#ffffff";

                }

            }
        );

    }
);



/* =====================================================
   5. MOUSE LIGHT EFFECT
===================================================== */

const background =
    document.querySelector(
        ".background"
    );


document.addEventListener(
    "mousemove",
    event => {

        const x =
            event.clientX /
            window.innerWidth *
            100;


        const y =
            event.clientY /
            window.innerHeight *
            100;


        if (background) {

            background.style.background = `
                radial-gradient(
                    circle at ${x}% ${y}%,
                    rgba(70, 94, 190, 0.16),
                    transparent 34%
                ),
                #02040b
            `;

        }

    }
);



/* =====================================================
   6. PREMIUM CARD TILT
===================================================== */

const tiltCards =
    document.querySelectorAll(
        ".skill-card, .identity-card"
    );


tiltCards.forEach(
    card => {

        card.addEventListener(
            "mousemove",
            event => {

                if (
                    window.innerWidth < 700
                ) return;


                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                    centerY) *
                    -4;


                const rotateY =
                    ((x - centerX) /
                    centerX) *
                    4;


                card.style.transform = `
                    perspective(800px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-5px)
                `;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform = "";

            }
        );

    }
);



/* =====================================================
   7. SMOOTH BUTTON FEEDBACK
===================================================== */

const buttons =
    document.querySelectorAll(
        ".button"
    );


buttons.forEach(
    button => {

        button.addEventListener(
            "mouseenter",
            () => {

                button.style.transition =
                    "all 0.3s ease";

            }
        );

    }
);



/* =====================================================
   8. CURSOR GLOW
===================================================== */

const cursorGlow =
    document.createElement(
        "div"
    );


cursorGlow.style.position =
    "fixed";

cursorGlow.style.width =
    "180px";

cursorGlow.style.height =
    "180px";

cursorGlow.style.borderRadius =
    "50%";

cursorGlow.style.pointerEvents =
    "none";

cursorGlow.style.zIndex =
    "-1";

cursorGlow.style.background =
    "radial-gradient(circle, rgba(91,118,255,0.08), transparent 70%)";

cursorGlow.style.transform =
    "translate(-50%, -50%)";

cursorGlow.style.transition =
    "left 0.12s ease, top 0.12s ease";


document.body.appendChild(
    cursorGlow
);


document.addEventListener(
    "mousemove",
    event => {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    }
);



/* =====================================================
   9. PARALLAX VOID EFFECT
===================================================== */

const voidCircles =
    document.querySelectorAll(
        ".void-circle"
    );


window.addEventListener(
    "scroll",
    () => {

        const scroll =
            window.scrollY;


        voidCircles.forEach(
            (circle, index) => {

                const movement =
                    scroll *
                    (0.02 + index * 0.01);


                circle.style.marginTop =
                    `${movement}px`;

            }
        );

    }
);



/* =====================================================
   10. DYNAMIC PARTICLES
===================================================== */

const particleContainer =
    document.querySelector(
        ".particles"
    );


function createParticle() {

    if (!particleContainer) return;


    const particle =
        document.createElement(
            "span"
        );


    particle.style.position =
        "absolute";


    particle.style.width =
        `${Math.random() * 2 + 1}px`;


    particle.style.height =
        particle.style.width;


    particle.style.borderRadius =
        "50%";


    particle.style.background =
        "rgba(140,160,255,0.55)";


    particle.style.left =
        `${Math.random() * 100}%`;


    particle.style.top =
        `${Math.random() * 100}%`;


    particle.style.boxShadow =
        "0 0 8px rgba(120,150,255,0.6)";


    particle.style.opacity =
        `${Math.random() * 0.5 + 0.2}`;


    const duration =
        Math.random() * 8 + 8;


    particle.style.animation =
        `particleFloat ${duration}s linear infinite`;


    particleContainer.appendChild(
        particle
    );


    setTimeout(
        () => {

            particle.remove();

        },
        duration * 1000
    );

}


for (
    let i = 0;
    i < 35;
    i++
) {

    createParticle();

}



/* =====================================================
   11. PARTICLE ANIMATION
===================================================== */

const particleStyle =
    document.createElement(
        "style"
    );


particleStyle.textContent = `

    @keyframes particleFloat {

        0% {

            transform:
                translateY(0)
                translateX(0);

            opacity: 0;

        }

        15% {

            opacity: 0.6;

        }

        50% {

            transform:
                translateY(-80px)
                translateX(25px);

        }

        85% {

            opacity: 0.25;

        }

        100% {

            transform:
                translateY(-160px)
                translateX(-20px);

            opacity: 0;

        }

    }

`;


document.head.appendChild(
    particleStyle
);



/* =====================================================
   12. YEAR AUTO UPDATE
===================================================== */

const footer =
    document.querySelector(
        "footer > p"
    );


if (footer) {

    const year =
        new Date().getFullYear();


    footer.innerHTML =
        `© ${year} Prem Kumar • Built with curiosity & purpose.`;

}



/* =====================================================
   13. PAGE READY
===================================================== */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);
