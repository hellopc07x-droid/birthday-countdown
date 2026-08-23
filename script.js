// ==========================================
// 🎂 PREMIUM BIRTHDAY COUNTDOWN
// ==========================================

// ⚠️ Yahan birthday ki exact date & time set karo
// Format: YYYY-MM-DDTHH:MM:SS
const birthday = new Date("2026-08-23T06:58:00").getTime();


// ==========================================
// ⏳ COUNTDOWN
// ==========================================

function updateCountdown() {

    const now = Date.now();
    const difference = birthday - now;

    // 🎉 Birthday moment reached
    if (difference <= 0) {

        document.getElementById("countdown").classList.add("countdown-finished");

        setTimeout(() => {

            document.getElementById("countdown").style.display = "none";

            const message = document.getElementById("birthday-message");

            message.style.display = "block";
            message.classList.add("birthday-reveal");

        }, 700);

        clearInterval(countdownTimer);

        createCelebration();

        return;
    }


    // 🧮 Calculate time

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    // 📺 Update numbers

    updateNumber("days", days);
    updateNumber("hours", hours);
    updateNumber("minutes", minutes);
    updateNumber("seconds", seconds);
}


// ==========================================
// ✨ PREMIUM NUMBER ANIMATION
// ==========================================

function updateNumber(id, value) {

    const element = document.getElementById(id);

    const newValue = String(value).padStart(2, "0");

    if (element.textContent !== newValue) {

        element.classList.remove("number-tick");

        // Restart animation
        void element.offsetWidth;

        element.classList.add("number-tick");

        element.textContent = newValue;
    }
}


// Start immediately
updateCountdown();


// Update every second
const countdownTimer = setInterval(updateCountdown, 1000);


// ==========================================
// ❤️ FLOATING HEARTS
// ==========================================

const backgroundEffects =
    document.getElementById("backgroundEffects") || document.body;


const heartTypes = [
    "♡",
    "♥",
    "❤",
    "💕",
    "💗",
    "💖"
];


function createHeart() {

    if (!backgroundEffects) return;

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.textContent =
        heartTypes[
            Math.floor(Math.random() * heartTypes.length)
        ];


    // Random position across full screen

    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 95 + "vw";

    heart.style.bottom = "-30px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "1";


    // Random size

    heart.style.fontSize =
        (16 + Math.random() * 22) + "px";


    // Faster & continuous animation speed

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";


    // Slight random delay

    heart.style.animationDelay =
        Math.random() * 1 + "s";


    backgroundEffects.appendChild(heart);


    // Remove after animation

    setTimeout(() => {

        heart.remove();

    }, 9000);
}


// Faster Heart Stream (Har 350ms par ek live heart pure background par)

setInterval(createHeart, 350);


// Initial hearts (Screen turant bharne ke liye)

for (let i = 0; i < 15; i++) {

    setTimeout(
        createHeart,
        i * 200
    );

}


// ==========================================
// ✨ PREMIUM PARTICLES
// ==========================================

function createParticle() {

    if (!backgroundEffects) return;

    const particle =
        document.createElement("div");

    particle.className = "particle";


    // Position

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.bottom =
        Math.random() * 100 + "%";


    // Size

    const size =
        1.5 + Math.random() * 3;

    particle.style.width =
        size + "px";

    particle.style.height =
        size + "px";


    // Speed

    particle.style.animationDuration =
        (9 + Math.random() * 12) + "s";


    particle.style.animationDelay =
        Math.random() * 8 + "s";


    backgroundEffects.appendChild(particle);
}


// Create particles

for (let i = 0; i < 55; i++) {

    createParticle();

}


// ==========================================
// 🌟 EXTRA SOFT GLITTER
// ==========================================

function createSparkle() {

    if (!backgroundEffects) return;

    const sparkle =
        document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.innerHTML = "✦";


    sparkle.style.left =
        Math.random() * 100 + "%";

    sparkle.style.top =
        Math.random() * 100 + "%";


    sparkle.style.animationDuration =
        (2 + Math.random() * 3) + "s";


    backgroundEffects.appendChild(sparkle);


    setTimeout(() => {

        sparkle.remove();

    }, 6000);
}


// Occasional sparkle

setInterval(createSparkle, 900);


// ==========================================
// 🎆 CANVAS FIRECRACKERS (PATAAKHE) SYSTEM
// ==========================================

const fireworkCanvas = document.createElement("canvas");
fireworkCanvas.id = "fireworkCanvas";
document.body.appendChild(fireworkCanvas);
const fwCtx = fireworkCanvas.getContext("2d");

function resizeFwCanvas() {
    fireworkCanvas.width = window.innerWidth;
    fireworkCanvas.height = window.innerHeight;
}
resizeFwCanvas();
window.addEventListener("resize", resizeFwCanvas);

fireworkCanvas.style.position = "fixed";
fireworkCanvas.style.top = "0";
fireworkCanvas.style.left = "0";
fireworkCanvas.style.width = "100vw";
fireworkCanvas.style.height = "100vh";
fireworkCanvas.style.pointerEvents = "none";
fireworkCanvas.style.zIndex = "99";

let fwRockets = [];
let fwParticles = [];
let isFireworksActive = false;

class FwRocket {
    constructor() {
        this.x = Math.random() * (fireworkCanvas.width * 0.8) + (fireworkCanvas.width * 0.1);
        this.y = fireworkCanvas.height;
        this.targetY = Math.random() * (fireworkCanvas.height * 0.4) + 80;
        this.speed = 7 + Math.random() * 3;
        this.color = `hsl(${Math.random() * 60 + 320}, 100%, 70%)`;
    }
    update() {
        this.y -= this.speed;
        if (this.y <= this.targetY) {
            this.explode();
            return false;
        }
        return true;
    }
    draw() {
        fwCtx.beginPath();
        fwCtx.arc(this.x, this.y, 2.5, 0, Math.PI * 2);
        fwCtx.fillStyle = this.color;
        fwCtx.fill();
    }
    explode() {
        for (let i = 0; i < 40; i++) {
            fwParticles.push(new FwParticle(this.x, this.y, this.color));
        }
    }
}

class FwParticle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 2;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.alpha = 1;
        this.decay = Math.random() * 0.018 + 0.012;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.05;
        this.alpha -= this.decay;
        return this.alpha > 0;
    }
    draw() {
        fwCtx.save();
        fwCtx.globalAlpha = this.alpha;
        fwCtx.beginPath();
        fwCtx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        fwCtx.fillStyle = this.color;
        fwCtx.fill();
        fwCtx.restore();
    }
}

function renderFirecrackers() {
    fwCtx.clearRect(0, 0, fireworkCanvas.width, fireworkCanvas.height);

    if (isFireworksActive && Math.random() < 0.08) {
        fwRockets.push(new FwRocket());
    }

    fwRockets = fwRockets.filter(r => {
        r.draw();
        return r.update();
    });

    fwParticles = fwParticles.filter(p => {
        p.draw();
        return p.update();
    });

    requestAnimationFrame(renderFirecrackers);
}
renderFirecrackers();


// ==========================================
// 🎉 BIRTHDAY CELEBRATION
// ==========================================

function createCelebration() {

    // Enable Medium Professional Firecrackers Burst
    isFireworksActive = true;

    for (let i = 0; i < 60; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 60);

    }

}
