AOS.init({
    duration: 1000,
    once: true
});

new Typed("#typed-text", {
    strings: [
        "Full Stack Developer 🚀",
        "UI/UX Designer 🎨",
        "WordPress Expert ⚡",
        "Frontend Engineer 💻",
        "Creative Problem Solver 🔥",
         "Git and Github Uploader",
         "Web Page Developer",
        "Future Software Engineer 🌍"
    ],
    typeSpeed: 120,      // Faster typing
    backSpeed: 80,       // Faster deleting
    backDelay: 1000,     // Wait 1 second before deleting
    startDelay: 300,
    loop: true,
    showCursor: true,
    cursorChar: "|"
});
