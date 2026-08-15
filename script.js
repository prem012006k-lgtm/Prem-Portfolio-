/* =====================================================
   PREM KUMAR — PORTFOLIO ENGINE
===================================================== */


/* =====================================================
   YEAR
===================================================== */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}



/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const mobileMenu =
    document.getElementById("mobileMenu");

const navigation =
    document.querySelector(".navigation");


if (mobileMenu) {

    mobileMenu.addEventListener(
        "click",
        () => {

            navigation.classList.toggle(
                "open"
            );

        }
    );

}


document.querySelectorAll(
    ".nav-link"
).forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navigation.classList.remove(
                "open"
            );

        }
    );

});



/* =====================================================
   CURSOR LIGHT
===================================================== */

const cursorLight =
    document.querySelector(
        ".cursor-light"
    );


window.addEventListener(
    "mousemove",
    event => {

        if (!cursorLight)
            return;


        cursorLight.style.left =
            event.clientX + "px";

        cursorLight.style.top =
            event.clientY + "px";

    }
);



/* =====================================================
   PARTICLE SYSTEM
===================================================== */

const canvas =
    document.getElementById(
        "particles"
    );

const ctx =
    canvas.getContext("2d");


let canvasWidth;
let canvasHeight;

let particles = [];


const mouse = {

    x: null,

    y: null,

    radius: 150

};



function resizeCanvas() {

    canvasWidth =
        canvas.width =
        window.innerWidth;

    canvasHeight =
        canvas.height =
        window.innerHeight;

}


resizeCanvas();


window.addEventListener(
    "resize",
    resizeCanvas
);



/* =====================================================
   PARTICLE
===================================================== */

class Particle {

    constructor() {

        this.x =
            Math.random() *
            canvasWidth;

        this.y =
            Math.random() *
            canvasHeight;

        this.size =
            Math.random() * 1.5 + 0.25;

        this.speedX =
            (Math.random() - 0.5)
            * 0.25;

        this.speedY =
            (Math.random() - 0.5)
            * 0.25;

        this.opacity =
            Math.random() * 0.5 + 0.1;

    }


    update() {

        this.x +=
            this.speedX;

        this.y +=
            this.speedY;


        if (
            this.x < 0 ||
            this.x > canvasWidth
        ) {

            this.speedX *= -1;

        }


        if (
            this.y < 0 ||
            this.y > canvasHeight
        ) {

            this.speedY *= -1;

        }


        if (
            mouse.x !== null &&
            mouse.y !== null
        ) {

            const dx =
                this.x - mouse.x;

            const dy =
                this.y - mouse.y;

            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (
                distance <
                mouse.radius
            ) {

                const force =
                    (
                        mouse.radius -
                        distance
                    ) /
                    mouse.radius;


                this.x +=
                    (dx / distance)
                    * force
                    * 0.4;


                this.y +=
                    (dy / distance)
                    * force
                    * 0.4;

            }

        }

    }


    draw() {

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            `rgba(167,139,250,${this.opacity})`;

        ctx.fill();

    }

}



/* =====================================================
   CREATE PARTICLES
===================================================== */

function createParticles() {

    particles = [];


    const amount =
        window.innerWidth < 600
            ? 65
            : 120;


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        particles.push(
            new Particle()
        );

    }

}


createParticles();


window.addEventListener(
    "resize",
    createParticles
);



/* =====================================================
   CONNECT PARTICLES
===================================================== */

function connectParticles() {

    for (
        let i = 0;
        i < particles.length;
        i++
    ) {

        for (
            let j = i + 1;
            j < particles.length;
            j++
        ) {

            const dx =
                particles[i].x -
                particles[j].x;

            const dy =
                particles[i].y -
                particles[j].y;

            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (distance < 105) {

                const opacity =
                    0.10 *
                    (
                        1 -
                        distance / 105
                    );


                ctx.beginPath();

                ctx.moveTo(
                    particles[i].x,
                    particles[i].y
                );

                ctx.lineTo(
                    particles[j].x,
                    particles[j].y
                );

                ctx.strokeStyle =
                    `rgba(139,92,246,${opacity})`;

                ctx.lineWidth =
                    0.5;

                ctx.stroke();

            }

        }

    }

}



/* =====================================================
   PARTICLE ANIMATION
===================================================== */

function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvasWidth,
        canvasHeight
    );


    particles.forEach(
        particle => {

            particle.update();

            particle.draw();

        }
    );


    connectParticles();


    requestAnimationFrame(
        animateParticles
    );

}


animateParticles();



/* =====================================================
   MOUSE POSITION
===================================================== */

window.addEventListener(
    "mousemove",
    event => {

        mouse.x =
            event.clientX;

        mouse.y =
            event.clientY;

    }
);


window.addEventListener(
    "mouseleave",
    () => {

        mouse.x = null;

        mouse.y = null;

    }
);



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".section, .skill-card, .education-card, .experience-card, .philosophy-box"
    );


revealElements.forEach(
    element => {

        element.classList.add(
            "reveal"
        );

    }
);


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
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


function updateActiveNavigation() {

    let currentSection = "home";


    sections.forEach(
        section => {

            const sectionTop =
                section.offsetTop - 200;


            if (
                window.scrollY >=
                sectionTop
            ) {

                currentSection =
                    section.id;

            }

        }
    );


    navLinks.forEach(
        link => {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute(
                    "href"
                ) ===
                "#" + currentSection
            ) {

                link.classList.add(
                    "active"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


updateActiveNavigation();



/* =====================================================
   SUBTLE CARD TILT
===================================================== */

const tiltCards =
    document.querySelectorAll(
        ".skill-card, .education-card"
    );


tiltCards.forEach(
    card => {


        card.addEventListener(
            "mousemove",
            event => {

                if (
                    window.innerWidth <
                    800
                )
                    return;


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
                    (y - centerY)
                    / 35;


                const rotateY =
                    (centerX - x)
                    / 35;


                card.style.transform =
                    `
                    perspective(800px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-8px)
                    `;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    }
);



/* =====================================================
   SMOOTH BUTTON FEEDBACK
===================================================== */

document.querySelectorAll(
    ".primary-button, .secondary-button, .nav-contact"
).forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                button.style.transform =
                    "scale(0.97)";


                setTimeout(
                    () => {

                        button.style.transform =
                            "";

                    },
                    120
                );

            }
        );

    }
);
