document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       SMOOTH SCROLLING
    ========================================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");

            if (targetId && targetId !== "#") {
                const target = document.querySelector(targetId);

                if (target) {
                    e.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });


    /* =========================================
       SCROLL REVEAL ANIMATION
    ========================================= */

    const revealElements = document.querySelectorAll(
        "section, .skill-card, .experience-card, .education-card, .about-card"
    );

    const revealObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {
        element.classList.add("scroll-hidden");
        revealObserver.observe(element);
    });


    /* =========================================
       ACTIVE NAVIGATION
    ========================================= */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(
        'nav a[href^="#"], header a[href^="#"]'
    );

    const sectionObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    navLinks.forEach(link => {
                        link.classList.remove("active");
                    });

                    const activeLink = document.querySelector(
                        `a[href="#${entry.target.id}"]`
                    );

                    if (activeLink) {
                        activeLink.classList.add("active");
                    }
                }
            });
        },
        {
            rootMargin: "-30% 0px -60% 0px"
        }
    );

    sections.forEach(section => {
        if (section.id) {
            sectionObserver.observe(section);
        }
    });


    /* =========================================
       MOUSE GLOW EFFECT
    ========================================= */

    const glow = document.createElement("div");

    glow.className = "mouse-glow";

    document.body.appendChild(glow);

    document.addEventListener("mousemove", e => {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
    });


    /* =========================================
       3D CARD TILT EFFECT
    ========================================= */

    const cards = document.querySelectorAll(
        ".skill-card, .experience-card, .education-card"
    );

    cards.forEach(card => {

        card.addEventListener("mousemove", e => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -3;

            const rotateY =
                ((x - centerX) / centerX) * 3;

            card.style.transform =
                `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
        });
    });


    /* =========================================
       ANIMATED NUMBER COUNTERS
    ========================================= */

    const counters = document.querySelectorAll(
        "[data-count]"
    );

    const counterObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const counter = entry.target;

                const target =
                    parseInt(counter.dataset.count);

                let current = 0;

                const duration = 1200;

                const increment =
                    target / (duration / 16);

                const updateCounter = () => {

                    current += increment;

                    if (current < target) {

                        counter.textContent =
                            Math.floor(current);

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.textContent = target;
                    }
                };

                updateCounter();

                counterObserver.unobserve(counter);
            });
        },
        {
            threshold: 0.7
        }
    );

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });


    /* =========================================
       NAVBAR SCROLL EFFECT
    ========================================= */

    const header =
        document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });


    /* =========================================
       BUTTON RIPPLE EFFECT
    ========================================= */

    const buttons =
        document.querySelectorAll("a, button");

    buttons.forEach(button => {

        button.addEventListener("click", function(e) {

            const ripple =
                document.createElement("span");

            ripple.className = "ripple";

            const rect =
                this.getBoundingClientRect();

            ripple.style.left =
                `${e.clientX - rect.left}px`;

            ripple.style.top =
                `${e.clientY - rect.top}px`;

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });


    /* =========================================
       PAGE LOADED
    ========================================= */

    document.body.classList.add("page-loaded");

});
