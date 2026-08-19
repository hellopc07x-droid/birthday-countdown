// 🎂 Birthday date and time
const birthday = new Date("2026-08-19T17:24:00").getTime();


// ⏳ Countdown
function updateCountdown() {

    const now = new Date().getTime();

    const difference = birthday - now;


    // 🎉 Birthday time reached
    if (difference <= 0) {

        document.getElementById("countdown").style.display = "none";

        document.getElementById("birthday-message").style.display = "block";

        return;
    }


    // 🧮 Calculate remaining time

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


    // 📺 Display countdown

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


// 🚀 Start countdown

updateCountdown();

setInterval(updateCountdown, 1000);



// ❤️ FLOATING HEARTS

const backgroundEffects =
    document.getElementById("backgroundEffects");


function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓"
    ];

    heart.textContent =
        hearts[Math.floor(Math.random() * hearts.length)];


    // Random horizontal position

    heart.style.left =
        Math.random() * 100 + "%";


    // Random size

    heart.style.fontSize =
        (14 + Math.random() * 20) + "px";


    // Random speed

    heart.style.animationDuration =
        (7 + Math.random() * 6) + "s";


    backgroundEffects.appendChild(heart);


    // Remove old heart

    setTimeout(() => {

        heart.remove();

    }, 14000);
}


// Create hearts

setInterval(createHeart, 1200);


// Create some hearts immediately

for (let i = 0; i < 6; i++) {

    setTimeout(createHeart, i * 500);

}



// ✨ PARTICLES

function createParticle() {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");


    particle.style.left =
        Math.random() * 100 + "%";


    particle.style.bottom =
        Math.random() * 100 + "%";


    const size =
        2 + Math.random() * 3;

    particle.style.width =
        size + "px";

    particle.style.height =
        size + "px";


    particle.style.animationDuration =
        (8 + Math.random() * 10) + "s";


    particle.style.animationDelay =
        Math.random() * 5 + "s";


    backgroundEffects.appendChild(particle);
}


// Create 45 particles

for (let i = 0; i < 45; i++) {

    createParticle();

}
