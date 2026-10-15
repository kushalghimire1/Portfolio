document.addEventListener("DOMContentLoaded", () => {

    /* ====================================
       CURSOR GLOW FOLLOWER
    ==================================== */
    const cursorGlow = document.getElementById("cursorGlow");
    if (cursorGlow && window.innerWidth > 991) {
        document.addEventListener("mousemove", (e) => {
            cursorGlow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        });
    }

    /* ====================================
       AOS ANIMATION INITIALIZATION
    ==================================== */
    AOS.init({
        duration: 900,
        once: true,
        offset: 80
    });

    /* ====================================
       TYPED JS EFFECT
    ==================================== */
    new Typed("#typed-text", {
        strings: [
            "Full Stack Developer 🚀",
            "UI/UX Designer 🎨",
            "WordPress Expert ⚡",
            "Frontend Engineer 💻",
            "Creative Problem Solver 💡",
            "Git & GitHub Specialist 🐙"
        ],
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: "|"
    });

    /* ====================================
       STICKY NAVBAR & SCROLL ACTIVE LINK
    ==================================== */
    const header = document.querySelector(".header");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        // Sticky Header Toggle
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        // Active Navigation Highlight
        let currentSection = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });

    /* ====================================
       MOBILE NAVIGATION MENU
    ==================================== */
    const menuToggle = document.getElementById("menuToggle");
    const navLinksMenu = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {
        navLinksMenu.classList.toggle("active");
        const icon = menuToggle.querySelector("i");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navLinksMenu.classList.remove("active");
            const icon = menuToggle.querySelector("i");
            icon.classList.add("fa-bars");
            icon.classList.remove("fa-xmark");
        });
    });

    /* ====================================
       COUNTER ANIMATION FOR STATS
    ==================================== */
    const counters = document.querySelectorAll(".counter");
    let hasAnimated = false;

    const animateCounters = () => {
        counters.forEach((counter) => {
            const target = +counter.getAttribute("data-target");
            const increment = target / 50;

            const updateCount = () => {
                const count = +counter.innerText;
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 40);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
    };

    window.addEventListener("scroll", () => {
        const heroSection = document.querySelector(".hero");
        if (heroSection) {
            const position = heroSection.getBoundingClientRect();
            if (position.top < window.innerHeight && !hasAnimated) {
                animateCounters();
                hasAnimated = true;
            }
        }
    });

    /* ====================================
       CONTACT FORM SUBMISSION
    ==================================== */
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            formStatus.classList.add("success");
            formStatus.innerText = "Thank you! Your message has been sent successfully.";

            contactForm.reset();

            setTimeout(() => {
                formStatus.innerText = "";
                formStatus.classList.remove("success");
            }, 5000);
        });
    }

});