gsap.registerPlugin(ScrollTrigger);

// Hero Animations
gsap.from(".hero-content", {
  opacity: 0,
  y: 80,
  duration: 1.5,
  ease: "power4.out"
});
gsap.from(".watch-main", {
  opacity: 0,
  x: 100,
  duration: 1.5
});
gsap.from(".watch-side", {
  opacity: 0,
  x: -100,
  duration: 1.5,
  delay: 0.3
});

// Reveal Sections on Scroll
gsap.utils.toArray(".reveal").forEach((el) => {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out"
  });
});

// Animated Counters
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
  ScrollTrigger.create({
    trigger: counter,
    start: "top 80%",
    onEnter: () => {
      let target = +counter.getAttribute("data-target");
      let count = 0;
      let increment = target / 60;

      const update = () => {
        count += increment;
        if (count < target) {
          counter.innerText = Math.floor(count);
          requestAnimationFrame(update);
        } else {
          counter.innerText = target;
        }
      };
      update();
    }
  });
});

// Botão flutuante scroll
document.querySelector(".floating-btn").addEventListener("click", () => {
  document.querySelector(".hero").scrollIntoView({ behavior: "smooth" });
});

// Parallax nas imagens do hero (scroll)
gsap.to(".watch-main", {
  y: 30,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

gsap.to(".watch-side", {
  y: -30,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

// Parallax nas imagens do hero (mouse move)
const hero = document.querySelector(".hero");
hero.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;
  gsap.to(".watch-main", { x: x, y: y, duration: 0.5 });
  gsap.to(".watch-side", { x: x * 0.5, y: y * 0.5, duration: 0.5 });
});

// Partículas leves no background (canvas)
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.pointerEvents = "none";
canvas.style.zIndex = "0";
const ctx = canvas.getContext("2d");

let w, h;
function resizeCanvas() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const particles = [];
const particleCount = 50;
for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 3 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
    alpha: Math.random() * 0.5 + 0.2
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, w, h);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(30,144,255,${p.alpha})`;
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > w) p.x = Math.random() * w;
    if (p.y < 0 || p.y > h) p.y = Math.random() * h;
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();