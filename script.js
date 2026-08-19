// 🎂 Birthday date and time
const birthday = new Date("2026-08-19T16:35:00").getTime();


// ⏳ Countdown function
function updateCountdown() {

    const now = new Date().getTime();

    const difference = birthday - now;


    // 🎉 If countdown is finished
    if (difference <= 0) {

        document.getElementById("countdown").style.display = "none";

        document.getElementById("birthday-message").style.display = "block";

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


    // 📺 Show values on screen
    document.getElementById("days").textContent = days;

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