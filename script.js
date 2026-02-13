gsap.registerPlugin(ScrollTrigger);

// Hero Animations
gsap.from(".hero-content", {
  opacity: 0,
  y: 80,
  duration: 1.5,
  ease: "power4.out"
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

// Partículas futuristas
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});

const particles = [];
const particleCount = 100; // mais partículas
for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.3, // movimento mais suave
    dy: (Math.random() - 0.5) * 0.3,
    alpha: Math.random() * 0.5 + 0.3,
    glow: Math.random() * 10 + 5
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, w, h);
  particles.forEach(p => {
    const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.glow);
    gradient.addColorStop(0, `rgba(30,144,255,${p.alpha})`);
    gradient.addColorStop(1, "rgba(30,144,255,0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > w) p.x = Math.random() * w;
    if (p.y < 0 || p.y > h) p.y = Math.random() * h;
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();