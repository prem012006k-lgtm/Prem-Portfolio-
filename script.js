/* =========================================================
   PREM KUMAR — PREMIUM PORTFOLIO JAVASCRIPT
   ========================================================= */


/* =========================================================
   PARTICLES
   ========================================================= */

const particleContainer =
    document.getElementById("particles");

if (particleContainer) {

    const particleCount =
        window.innerWidth < 700 ? 35 : 65;

    for (let i = 0; i < particleCount; i++) {

        const particle =
            document.createElement("span");

        particle.className = "particle";

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            (Math.random() * 18 + 12) + "s";

        particle.style.animationDelay =
            (Math.random() * 15) + "s";

        const size =
            Math.random() * 2 + 1;

        particle.style.width =
            size + "px";

        particle.style.height =
            size + "px";

        particleContainer.appendChild(particle);
    }
}


/* =========================================================
   TYPEWRITER
   ========================================================= */

const typingText =
    document.getElementById("typingText");

const phrases = [

    "continuous improvement.",
    "better quality.",
    "smart problem solving.",
    "professional growth.",
    "learning new things.",
    "consistent results."

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
            characterIndex ===
            currentPhrase.length
        ) {

            deleting = true;

            setTimeout(
                typeWriter,
                1700
            );

            return;
        }

        setTimeout(
            typeWriter,
            70
        );

    } else {

        typingText.textContent =
            currentPhrase.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            phraseIndex =
                (phraseIndex + 1) %
                phrases.length;

            setTimeout(
                typeWriter,
                400
            );

            return;
        }

        setTimeout(
            typeWriter,
            35
        );
    }
}

typeWriter();


/* =========================================================
   PROFILE CARD MOUSE EFFECT
   ========================================================= */

const profileCard =
    document.getElementById("profileCard");

if (
    profileCard &&
    window.matchMedia("(pointer: fine)").matches
) {

    profileCard.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                profileCard.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -3;

            const rotateY =
                ((x - centerX) / centerX) * 3;

            profileCard.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;
        }
    );


    profileCard.addEventListener(
        "mouseleave",
        () => {

            profileCard.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        }
    );
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.querySelector(".nav-links");

if (menuButton && navLinks) {

    menuButton.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle("open");

        }
    );


    document
        .querySelectorAll(".nav-links a")
        .forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "open"
                    );

                }
            );

        });
}


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (entry.isIntersecting) {

                        navigationLinks
                            .forEach(
                                (link) => {

                                    link.classList.remove(
                                        "active"
                                    );

                                    if (
                                        link.getAttribute(
                                            "href"
                                        ) ===
                                        "#" +
                                        entry.target.id
                                    ) {

                                        link.classList.add(
                                            "active"
                                        );
                                    }

                                }
                            );
                    }

                }
            );

        },
        {
            threshold: 0.25
        }
    );

sections.forEach(
    (section) => observer.observe(section)
);


/* =========================================================
   SCROLL PROGRESS
   ========================================================= */

const scrollProgress =
    document.getElementById(
        "scrollProgress"
    );

function updateScrollProgress() {

    if (!scrollProgress) return;

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement
            .scrollHeight -
        window.innerHeight;

    const percentage =
        documentHeight > 0
            ? (scrollTop / documentHeight) * 100
            : 0;

    scrollProgress.style.width =
        percentage + "%";
}

window.addEventListener(
    "scroll",
    updateScrollProgress
);

updateScrollProgress();


/* =========================================================
   REVEAL SECTIONS
   ========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section, .experience-card, .skill-card, .education-card"
    );

revealElements.forEach(
    (element) => {

        element.classList.add("reveal");

    }
);


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

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
    (element) => {

        revealObserver.observe(
            element
        );

    }
);


/* =========================================================
   STAT COUNTER
   ========================================================= */

const counter =
    document.querySelector(
        "[data-count]"
    );

let counterStarted = false;

if (counter) {

    const counterObserver =
        new IntersectionObserver(
            (entries) => {

                if (
                    entries[0].isIntersecting &&
                    !counterStarted
                ) {

                    counterStarted = true;

                    const target =
                        Number(
                            counter.dataset.count
                        );

                    let current = 0;

                    const interval =
                        setInterval(
                            () => {

                                current++;

                                counter.textContent =
                                    current + "+";

                                if (
                                    current >= target
                                ) {

                                    clearInterval(
                                        interval
                                    );
                                }

                            },
                            450
                        );
                }

            },
            {
                threshold: 0.5
            }
        );

    counterObserver.observe(
        counter
    );
}


/* =========================================================
   SUBTLE MOUSE GLOW
   ========================================================= */

document.addEventListener(
    "mousemove",
    (event) => {

        const x =
            (event.clientX /
                window.innerWidth) *
            100;

        const y =
            (event.clientY /
                window.innerHeight) *
            100;

        document.body.style.background =
            `
            radial-gradient(
                circle at ${x}% ${y}%,
                rgba(92,82,255,0.075),
                transparent 28%
            ),
            radial-gradient(
                circle at 85% 45%,
                rgba(132,74,255,0.07),
                transparent 32%
            ),
            #050713
            `;
    }
);
