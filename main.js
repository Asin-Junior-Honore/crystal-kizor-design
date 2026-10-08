const nav = document.getElementById("nav");
window.addEventListener(
    "scroll",
    () => {
        nav.classList.toggle("scrolled", window.scrollY > 20);
    },
    { passive: true }
);

const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
} else {
    revealEls.forEach((el) => el.classList.add("visible"));
}