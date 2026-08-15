/* =========================================================
   PREM KUMAR — PORTFOLIO JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       PREMIUM TYPING EFFECT
       ===================================================== */

    const typingText =
        document.getElementById("typing-text");


    const phrases = [
        "professional growth.",
        "continuous improvement.",
        "better results.",
        "quality and consistency.",
        "learning every day."
    ];


    let phraseIndex = 0;
    let characterIndex = 0;
    let deleting = false;


    function typeEffect() {

        if (!typingText) return;


        const currentPhrase =
            phrases[phraseIndex];


        if (!deleting) {

            characterIndex++;

            typingText.textContent =
                currentPhrase.substring(
                    0,
                    characterIndex
                );


            if (
                characterIndex >=
                currentPhrase.length
            ) {

                deleting = true;

                setTimeout(
                    typeEffect,
                    1800
                );

                return;
            }


            setTimeout(
                typeEffect,
                70
            );

        } else {

            characterIndex--;

            typingText.textContent =
                currentPhrase.substring(
                    0,
                    characterIndex
                );


            if (characterIndex <= 0) {

                deleting = false;

                phraseIndex++;

                if (
                    phraseIndex >=
                    phrases.length
                ) {
                    phraseIndex = 0;
                }


                setTimeout(
                    typeEffect,
                    450
                );

                return;
            }


            setTimeout(
                typeEffect,
                40
            );
        }
    }


    typeEffect();


    /* =====================================================
       NAVIGATION ACTIVE SECTION
       ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll("nav a");


    function updateActiveNavigation() {

        let currentSection = "home";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            if (
                window.scrollY >=
                sectionTop
            ) {

                currentSection =
                    section.getAttribute("id");
            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");


            const href =
                link.getAttribute("href");


            if (
                href ===
                "#" + currentSection
            ) {

                link.classList.add("active");
            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    updateActiveNavigation();


    /* =====================================================
       REVEAL ANIMATION
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section-heading, .about-main, .about-highlight, .experience-card, .skill-card, .education-card, .contact-box"
        );


    revealElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

    });


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

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


    /* =====================================================
       SMOOTH NAVIGATION
       ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute("href");


                    if (
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) return;


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });


    /* =====================================================
       PROFILE CARD MOUSE EFFECT
       ===================================================== */

    const profileCard =
        document.querySelector(
            ".profile-card"
        );


    const profileArea =
        document.querySelector(
            ".profile-area"
        );


    if (
        profileCard &&
        profileArea &&
        window.innerWidth > 900
    ) {

        profileArea.addEventListener(
            "mousemove",
            event => {

                const rect =
                    profileArea.getBoundingClientRect();


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
                    (y - centerY) /
                    35;


                const rotateY =
                    (centerX - x) /
                    35;


                profileCard.style.transform =
                    `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-4px)`;

            }
        );


        profileArea.addEventListener(
            "mouseleave",
            () => {

                profileCard.style.transform =
                    "";

            }
        );

    }


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const year =
        new Date().getFullYear();


    const footer =
        document.querySelector("footer");


    if (footer) {

        footer.innerHTML =
            footer.innerHTML.replace(
                "2026",
                year
            );

    }

});
