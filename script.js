/* =====================================
   CUSTOM CURSOR
===================================== */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});


/* =====================================
   TYPING EFFECT
===================================== */

const typingElement = document.querySelector(".typing");

const words = [
    "AI Enthusiast",
    "Full Stack Developer",
    "Java Developer",
  "Python Developer",
    "Problem Solver",
    "Tech Explorer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();


/* =====================================
   MOBILE MENU
===================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


/* =====================================
   SCROLL REVEAL ANIMATION
===================================== */

const sections = document.querySelectorAll(
    ".section, .hero"
);

function revealSections() {

    const trigger =
        window.innerHeight * 0.85;

    sections.forEach(section => {

        const top =
            section.getBoundingClientRect().top;

        if (top < trigger) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSections);

revealSections();


/* =====================================
   MAGNETIC BUTTON EFFECT
===================================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mousemove", (e) => {

        const rect =
            button.getBoundingClientRect();

        const x =
            e.clientX - rect.left - rect.width / 2;

        const y =
            e.clientY - rect.top - rect.height / 2;

        button.style.transform =
            `translate(${x * 0.15}px, ${y * 0.15}px)`;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translate(0px,0px)";
    });

});


/* =====================================
   WIREFRAME LANDSCAPE
===================================== */

const canvas =
    document.getElementById("landscape");

const ctx =
    canvas.getContext("2d");

function resizeCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;
}

resizeCanvas();

window.addEventListener(
    "resize",
    resizeCanvas
);

let mouseX =
    window.innerWidth / 2;

document.addEventListener(
    "mousemove",
    (e) => {
        mouseX = e.clientX;
    }
);

const points = [];

const cols = 60;
const rows = 20;

function createLandscape() {

    points.length = 0;

    for (let y = 0; y < rows; y++) {

        const row = [];

        for (let x = 0; x < cols; x++) {

            row.push({
                x: x,
                y: y
            });

        }

        points.push(row);
    }
}

createLandscape();

let time = 0;

function drawLandscape() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    time += 0.02;

    const horizon =
        canvas.height * 0.65;

    const spacingX =
        canvas.width / (cols - 1);

    const spacingY =
        40;

    ctx.strokeStyle =
        "rgba(0,255,180,0.35)";

    ctx.lineWidth = 1;

    for (let y = 0; y < rows; y++) {

        ctx.beginPath();

        for (let x = 0; x < cols; x++) {

            const px =
                x * spacingX;

            const wave1 =
                Math.sin(
                    x * 0.4 +
                    time
                ) * 20;

            const wave2 =
                Math.cos(
                    y * 0.5 +
                    time
                ) * 15;

            const mouseInfluence =
                ((mouseX /
                canvas.width) - 0.5) * 80;

            const py =
                horizon +
                y * spacingY +
                wave1 +
                wave2 +
                mouseInfluence;

            if (x === 0) {
                ctx.moveTo(px, py);
            } else {
                ctx.lineTo(px, py);
            }
        }

        ctx.stroke();
    }

    for (let x = 0; x < cols; x++) {

        ctx.beginPath();

        for (let y = 0; y < rows; y++) {

            const px =
                x * spacingX;

            const wave1 =
                Math.sin(
                    x * 0.4 +
                    time
                ) * 20;

            const wave2 =
                Math.cos(
                    y * 0.5 +
                    time
                ) * 15;

            const mouseInfluence =
                ((mouseX /
                canvas.width) - 0.5) * 80;

            const py =
                horizon +
                y * spacingY +
                wave1 +
                wave2 +
                mouseInfluence;

            if (y === 0) {
                ctx.moveTo(px, py);
            } else {
                ctx.lineTo(px, py);
            }
        }

        ctx.stroke();
    }

    requestAnimationFrame(
        drawLandscape
    );
}

drawLandscape();


/* =====================================
   NAVBAR SCROLL EFFECT
===================================== */

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5,8,22,0.85)";

        navbar.style.boxShadow =
            "0 0 25px rgba(0,255,150,0.15)";

    } else {

        navbar.style.background =
            "rgba(255,255,255,0.05)";

        navbar.style.boxShadow =
            "none";
    }

});


/* =====================================
   FLOATING PARTICLES
===================================== */

for (let i = 0; i < 25; i++) {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.animationDuration =
        8 + Math.random() * 12 + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    document.body.appendChild(
        particle
    );
}
