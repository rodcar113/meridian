/* MENÚ HAMBURGUESA */
const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

/* ANIMACIONES ON SCROLL */
const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

elements.forEach(el => observer.observe(el));
