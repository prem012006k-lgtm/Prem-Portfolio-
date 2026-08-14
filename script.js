/* ================================= */
/* INFINITY VOID PORTFOLIO ENGINE */
/* ================================= */


/* ================================= */
/* DOMAIN INTRO */
/* ================================= */


/* ================================= */
/* INFINITY PARTICLE CANVAS */
/* ================================= */

const canvas = document.getElementById("voidCanvas");

const ctx = canvas.getContext("2d");

let width;
let height;

let particles = [];

const mouse = {
    x: null,
    y: null
};


function resizeCanvas() {

    width = canvas.width =
        window.innerWidth;

    height = canvas.height =
        window.innerHeight;

}


resizeCanvas();


window.addEventListener(
    "resize",
    resizeCanvas
);


/* ================================= */
/* CREATE PARTICLES */
/* ================================= */

class Particle {

    constructor() {

        this.x =
            Math.random() * width;

        this.y =
            Math.random() * height;

        this.size =
            Math.random() * 1.7 + 0.3;

        this.speedX =
            (Math.random() - 0.5) * 0.35;

        this.speedY =
            (Math.random() - 0.5) * 0.35;

        this.opacity =
            Math.random() * 0.7 + 0.2;

    }


    update() {

        this.x += this.speedX;

        this.y += this.speedY;


        if (this.x < 0)
            this.x = width;

        if (this.x > width)
            this.x = 0;

        if (this.y < 0)
            this.y = height;

        if (this.y > height)
            this.y = 0;


        /* Mouse attraction */

        if (
            mouse.x !== null &&
            mouse.y !== null
        ) {

            const dx =
                mouse.x - this.x;

            const dy =
                mouse.y - this.y;

            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (distance < 180) {

                this.x +=
                    dx * 0.0007;

                this.y +=
                    dy * 0.0007;

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


/* ================================= */
/* PARTICLE COUNT */
/* ================================= */

const particleCount =
    window.innerWidth < 600
        ? 100
        : 180;


for (
    let i = 0;
    i < particleCount;
    i++
) {

    particles.push(
        new Particle()
    );

}


/* ================================= */
/* CONNECT PARTICLES */
/* ================================= */

function connectParticles() {

    for (
        let a = 0;
        a < particles.length;
        a++
    ) {

        for (
            let b = a + 1;
            b < particles.length;
            b++
        ) {

            const dx =
                particles[a].x -
                particles[b].x;

            const dy =
                particles[a].y -
                particles[b].y;

            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (distance < 110) {

                const opacity =
                    0.08 *
                    (1 - distance / 110);


                ctx.beginPath();

                ctx.strokeStyle =
                    `rgba(139,92,246,${opacity})`;

                ctx.lineWidth = 0.5;

                ctx.moveTo(
                    particles[a].x,
                    particles[a].y
                );

                ctx.lineTo(
                    particles[b].x,
                    particles[b].y
                );

                ctx.stroke();

            }

        }

    }

}


/* ================================= */
/* ANIMATION LOOP */
/* ================================= */

function animateVoid() {

    ctx.clearRect(
        0,
        0,
        width,
        height
    );


    particles.forEach(
        particle => {

            particle.update();

            particle.draw();

        }
    );


    connectParticles();


    requestAnimationFrame(
        animateVoid
    );

}


animateVoid();


/* ================================= */
/* MOUSE TRACKING */
/* ================================= */

window.addEventListener(
    "mousemove",
    event => {

        mouse.x =
            event.clientX;

        mouse.y =
            event.clientY;


        const glow =
            document.querySelector(
                ".cursor-glow"
            );


        glow.style.left =
            event.clientX + "px";

        glow.style.top =
            event.clientY + "px";

    }
);


/* ================================= */
/* MOBILE TOUCH */
/* ================================= */

window.addEventListener(
    "touchmove",
    event => {

        if (
            event.touches &&
            event.touches.length
        ) {

            mouse.x =
                event.touches[0].clientX;

            mouse.y =
                event.touches[0].clientY;

        }

    }
);


/* ================================= */
/* SCROLL REVEAL */
/* ================================= */

const revealElements =
    document.querySelectorAll(
        "section"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "reveal",
                            "show"
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

        observer.observe(element);

    }
);


/* ================================= */
/* NAVBAR ACTIVE EFFECT */
/* ================================= */

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

        let current = "";


        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop - 180;

                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navLinks.forEach(
            link => {

                link.style.color =
                    "";

                if (
                    link.getAttribute(
                        "href"
                    ) === "#" + current
                ) {

                    link.style.color =
                        "#67e8f9";

                }

            }
        );

    }
);


/* ================================= */
/* 3D CARD TILT */
/* ================================= */

const cards =
    document.querySelectorAll(
        ".skill-card, .education-card"
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


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const rotateX =
                (y - centerY) / 20;

            const rotateY =
                (centerX - x) / 20;


            card.style.transform =
                `perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

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
