// Navbar section switching
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

navLinks.forEach((btn) => {
    btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-section");

        // update nav active
        navLinks.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        // update visible section
        sections.forEach((sec) => {
            if (sec.id === target) {
                sec.classList.add("section-active");
            } else {
                sec.classList.remove("section-active");
            }
        });

        // scroll to top on section change (nice for mobile)
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

// Set current year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
