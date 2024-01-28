const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

// Open/Close menu functionality
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("nav-toggle");
});

// Auto Scroll
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth" 
        });
    });
});

// Navbar Scroll
window.addEventListener("scroll", () => {
    const header = document.getElementById("navbar");
    header.classList.toggle("sticky", window.scrollY > 0)
});

