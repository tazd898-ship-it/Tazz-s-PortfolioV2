const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");
const soundBtn = document.getElementById("soundBtn");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

soundBtn.addEventListener("click", () => {
  soundBtn.textContent = soundBtn.textContent === "⌁" ? "♪" : "⌁";
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelectorAll(".project-card, .service").forEach(card => {
  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - .5) * 4;
    const y = ((e.clientY - r.top) / r.height - .5) * -4;
    card.style.transform = `perspective(700px) rotateX(${y}deg) rotateY(${x}deg) translateY(-5px)`;
  });
  card.addEventListener("mouseleave", () => card.style.transform = "");
});
