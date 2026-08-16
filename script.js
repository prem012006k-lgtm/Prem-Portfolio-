/* =========================================================
   PREM KUMAR PORTFOLIO
   ========================================================= */


/* =========================================================
   TYPEWRITER
   ========================================================= */

/*
   IMPORTANT:

   The typewriter only changes the words inside #typingText.
   The surrounding hero layout never changes size.

   "meaningful results" has been removed.
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


/*
   Speed settings
*/

const typingSpeed = 75;
const deletingSpeed = 45;
const pauseAfterTyping = 1700;
const pauseAfterDeleting = 350;


function typeWriter() {

    if (!typingText) {
        return;
    }


    const currentPhrase =
        phrases[phraseIndex];


    /* TYPING */

    if (!deleting) {

        typingText.textContent =
            currentPhrase.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        /*
           Finished typing
        */

        if (
            characterIndex >=
            currentPhrase.length
        ) {

            deleting = true;

            setTimeout(
                typeWriter,
                pauseAfterTyping
            );

            return;
        }


        setTimeout(
            typeWriter,
            typingSpeed
        );

        return;
    }


    /* DELETING */

    typingText.textContent =
        currentPhrase.substring(
            0,
            characterIndex - 1
        );

    characterIndex--;


    /*
       Finished deleting
    */

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
            pauseAfterDeleting
        );

        return;
    }


    setTimeout(
        typeWriter,
        deletingSpeed
    );
}


/*
   Start typewriter
*/

if (typingText) {

    typingText.textContent =
        "";

    setTimeout(
        typeWriter,
        500
    );
}



/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuBtn =
    document.getElementById("menuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");


if (
    menuBtn &&
    mobileMenu
) {

    menuBtn.addEventListener(
        "click",
        () => {

            mobileMenu.classList.toggle(
                "open"
            );

        }
    );
}


/*
   Close mobile menu after
   clicking a link
*/

document
    .querySelectorAll(
        ".mobile-menu a"
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    mobileMenu.classList.remove(
                        "open"
                    );

                }
            );

        }
    );



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

    let current =
        "home";


    sections.forEach(
        section => {

            const sectionTop =
                section.offsetTop - 180;

            const sectionBottom =
                sectionTop +
                section.offsetHeight;


            if (
                window.scrollY >=
                    sectionTop &&
                window.scrollY <
                    sectionBottom
            ) {

                current =
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
                "#" + current
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
    updateActiveNav
);


updateActiveNav();



/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements =
    document.querySelectorAll(
        ".glass-card, .section-heading"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

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

        element.style.opacity =
            "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        revealObserver.observe(
            element
        );

    }
);



/* =========================================================
   SMOOTH SCROLL
   ========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                function(event) {

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
                            behavior:
                                "smooth",
                            block:
                                "start"
                        });

                    }

                }
            );

        }
    );



/* =========================================================
   CURRENT YEAR
   ========================================================= */

const yearElement =
    document.getElementById(
        "year"
    );


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}



/* =========================================================
   EMAIL
   ========================================================= */

/*
   IMPORTANT:

   I don't have your actual email address from our
   previous conversation, so I will NOT invent one.

   Put your real email between the quotes below.

   Example:

   const myEmail = "yourname@gmail.com";
*/

const myEmail = "";


const emailButton =
    document.getElementById(
        "emailButton"
    );

const emailStatus =
    document.getElementById(
        "emailStatus"
    );


if (emailButton) {

    emailButton.addEventListener(
        "click",
        async () => {

            if (!myEmail) {

                emailStatus.textContent =
                    "Add your email address in script.js to activate this button.";

                return;
            }


            try {

                await navigator.clipboard.writeText(
                    myEmail
                );

                emailStatus.textContent =
                    "Email address copied successfully.";

                setTimeout(
                    () => {

                        emailStatus.textContent =
                            "You can now paste the email address anywhere.";

                    },
                    2500
                );

            }

            catch (error) {

                emailStatus.textContent =
                    myEmail;

            }

        }
    );
}



/* =========================================================
   PAGE LOAD
   ========================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

    }
);
/* =========================================================
   PREMIUM FLOATING PARTICLES
   ========================================================= */

function createPremiumParticles() {

    const particleCount = 22;

    for (let i = 0; i < particleCount; i++) {

        const particle =
            document.createElement("span");

        particle.className =
            "premium-particle";

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.top =
            Math.random() * 100 + "vh";

        const size =
            Math.random() * 3 + 2;

        particle.style.width =
            size + "px";

        particle.style.height =
            size + "px";

        particle.style.animationDelay =
            Math.random() * 10 + "s";

        particle.style.animationDuration =
            9 + Math.random() * 12 + "s";

        document.body.appendChild(particle);
    }
}

createPremiumParticles();
