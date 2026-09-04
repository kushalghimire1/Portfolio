AOS.init({
    duration: 1000,
    once: true
});

new Typed("#typed-text", {
    strings: [
        "Full Stack Developer",
        "WordPress Developer",
        "UI/UX Designer",
        "Frontend Developer",
        "Web Page Developer",
        "Git and Github Uploader"
    ],
    typeSpeed: 120,      // Faster typing
    backSpeed: 80,       // Faster deleting
    backDelay: 1000,     // Wait 1 second before deleting
    startDelay: 300,
    loop: true,
    showCursor: true,
    cursorChar: "|"
});