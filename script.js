// ==========================================
// 🎂 PREMIUM BIRTHDAY COUNTDOWN
// ==========================================

// ⚠️ Yahan birthday ki exact date & time set karo
// Format: YYYY-MM-DDTHH:MM:SS
const birthday = new Date("2026-08-24T00:00:00").getTime();


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
    document.getElementById("backgroundEffects");


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


    // Random position

    heart.style.left =
        Math.random() * 100 + "%";


    // Random size

    heart.style.fontSize =
        (12 + Math.random() * 18) + "px";


    // Random animation speed

    heart.style.animationDuration =
        (8 + Math.random() * 7) + "s";


    // Slight random delay

    heart.style.animationDelay =
        Math.random() * 2 + "s";


    backgroundEffects.appendChild(heart);


    // Remove after animation

    setTimeout(() => {

        heart.remove();

    }, 17000);
}


// New heart every 1.5 seconds

setInterval(createHeart, 1500);


// Initial hearts

for (let i = 0; i < 8; i++) {

    setTimeout(
        createHeart,
        i * 600
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
// 🎉 BIRTHDAY CELEBRATION
// ==========================================

function createCelebration() {

    for (let i = 0; i < 25; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 120);

    }

}
