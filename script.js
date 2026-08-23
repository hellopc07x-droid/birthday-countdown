// ==========================================
// 🎂 PREMIUM BIRTHDAY COUNTDOWN ENGINE
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ⚠️ Yahan birthday ki exact date & time set karo
    const birthday = new Date("2026-08-24T00:00:00").getTime();

    // Container Reference
    const backgroundEffects = document.getElementById("backgroundEffects") || document.body;


    // ==========================================
    // 🎆 1. CANVAS FIRECRACKERS SYSTEM
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

    // CSS Override to force visibility
    fireworkCanvas.style.position = "fixed";
    fireworkCanvas.style.top = "0";
    fireworkCanvas.style.left = "0";
    fireworkCanvas.style.width = "100vw";
    fireworkCanvas.style.height = "100vh";
    fireworkCanvas.style.pointerEvents = "none";
    fireworkCanvas.style.zIndex = "999";

    let fwRockets = [];
    let fwParticles = [];
    let isFireworksActive = false;

    class FwRocket {
        constructor() {
            this.x = Math.random() * (fireworkCanvas.width * 0.8) + (fireworkCanvas.width * 0.1);
            this.y = fireworkCanvas.height;
            this.targetY = Math.random() * (fireworkCanvas.height * 0.45) + 60;
            this.speed = 8 + Math.random() * 4;
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
            fwCtx.arc(this.x, this.y, 3, 0, Math.PI * 2);
            fwCtx.fillStyle = this.color;
            fwCtx.fill();
        }
        explode() {
            for (let i = 0; i < 45; i++) {
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
            const speed = Math.random() * 5 + 2;
            this.vx = Math.cos(angle) * speed;
            this.vy = Math.sin(angle) * speed;
            this.alpha = 1;
            this.decay = Math.random() * 0.02 + 0.015;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.vy += 0.06;
            this.alpha -= this.decay;
            return this.alpha > 0;
        }
        draw() {
            fwCtx.save();
            fwCtx.globalAlpha = this.alpha;
            fwCtx.beginPath();
            fwCtx.arc(this.x, this.y, 2.5, 0, Math.PI * 2);
            fwCtx.fillStyle = this.color;
            fwCtx.fill();
            fwCtx.restore();
        }
    }

    function renderFirecrackers() {
        fwCtx.clearRect(0, 0, fireworkCanvas.width, fireworkCanvas.height);

        if (isFireworksActive && Math.random() < 0.1) {
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
    // ❤️ 2. FLOATING HEARTS SYSTEM (ALWAYS ON)
    // ==========================================

    const heartTypes = ["♡", "♥", "❤", "💕", "💗", "💖"];

    function createHeart() {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.textContent = heartTypes[Math.floor(Math.random() * heartTypes.length)];

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 95 + "vw";
        heart.style.bottom = "-40px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "10";
        heart.style.fontSize = (18 + Math.random() * 20) + "px";
        heart.style.animationDuration = (4 + Math.random() * 4) + "s";

        backgroundEffects.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 8000);
    }

    // Har 300ms par continuously hearts floating chalenge
    setInterval(createHeart, 300);

    for (let i = 0; i < 10; i++) {
        setTimeout(createHeart, i * 150);
    }


    // ==========================================
    // ✨ 3. PARTICLES & GLITTER
    // ==========================================

    function createParticle() {
        const particle = document.createElement("div");
        particle.className = "particle";

        particle.style.left = Math.random() * 100 + "%";
        particle.style.bottom = Math.random() * 100 + "%";

        const size = 1.5 + Math.random() * 3;
        particle.style.width = size + "px";
        particle.style.height = size + "px";

        particle.style.animationDuration = (9 + Math.random() * 12) + "s";
        particle.style.animationDelay = Math.random() * 8 + "s";

        backgroundEffects.appendChild(particle);
    }

    for (let i = 0; i < 50; i++) {
        createParticle();
    }

    function createSparkle() {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";
        sparkle.innerHTML = "✦";

        sparkle.style.left = Math.random() * 100 + "%";
        sparkle.style.top = Math.random() * 100 + "%";
        sparkle.style.animationDuration = (2 + Math.random() * 3) + "s";

        backgroundEffects.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 5000);
    }

    setInterval(createSparkle, 800);


    // ==========================================
    // ⏳ 4. COUNTDOWN LOGIC & REVEAL
    // ==========================================

    function updateNumber(id, value) {
        const element = document.getElementById(id);
        if (!element) return;

        const newValue = String(value).padStart(2, "0");

        if (element.textContent !== newValue) {
            element.classList.remove("number-tick");
            void element.offsetWidth;
            element.classList.add("number-tick");
            element.textContent = newValue;
        }
    }

    function updateCountdown() {
        const now = Date.now();
        const difference = birthday - now;

        if (difference <= 0) {
            const countdownEl = document.getElementById("countdown");
            if (countdownEl) {
                countdownEl.classList.add("countdown-finished");
                countdownEl.style.display = "none";
            }

            const message = document.getElementById("birthday-message");
            if (message) {
                message.style.display = "block";
                message.classList.add("birthday-reveal");
            }

            // Always keeping fireworks enabled after birthday
            isFireworksActive = true;
            clearInterval(countdownTimer);
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        updateNumber("days", days);
        updateNumber("hours", hours);
        updateNumber("minutes", minutes);
        updateNumber("seconds", seconds);
    }

    updateCountdown();
    const countdownTimer = setInterval(updateCountdown, 1000);

});
