// Loading Screen
window.addEventListener("load", () => {
    document.getElementById("loading").style.display = "none";
});

// Starfield Animation
const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");
let stars = [];

function initStars(count) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = [];
    for (let i = 0; i < count; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.5,
            speed: Math.random() * 0.5 + 0.2
        });
    }
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    for (let s of stars) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        s.y += s.speed;
        if (s.y > canvas.height) {
            s.y = 0;
            s.x = Math.random() * canvas.width;
        }
    }
    requestAnimationFrame(animateStars);
}

window.addEventListener("resize", () => initStars(150));
initStars(150);
animateStars();

// Modal Character Info
document.querySelectorAll(".character").forEach(char => {
    char.addEventListener("click", () => {
        document.getElementById("char-name").textContent = char.dataset.name;
        document.getElementById("char-kar").textContent = char.dataset.kar;
        document.getElementById("char-quote").textContent = char.dataset.quote;
        document.getElementById("character-modal").style.display = "flex";
    });
});
document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("character-modal").style.display = "none";
});