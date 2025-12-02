// Navbar section switching
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

function showSection(target) {
    // update nav active
    navLinks.forEach((b) => {
        b.classList.toggle("active", b.getAttribute("data-section") === target);
    });

    // update visible section
    sections.forEach((sec) => {
        sec.classList.toggle("section-active", sec.id === target);
    });

    // scroll to top on section change (nice for mobile)
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Handle clicks on navbar
navLinks.forEach((btn) => {
    btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-section");
        showSection(target);

        // update URL hash so each tab has its own link
        history.replaceState(null, "", "#" + target);
    });
});

// Initialize from URL hash (e.g., #projects_skills_experience)
function initFromHash() {
    const hash = window.location.hash.replace("#", "");
    if (hash && document.getElementById(hash)) {
        showSection(hash);
    } else {
        showSection("home"); // default
    }
}

initFromHash();

// Update section if user uses back/forward buttons
window.addEventListener("hashchange", () => {
    const hash = window.location.hash.replace("#", "");
    if (hash && document.getElementById(hash)) {
        showSection(hash);
    }
});

// Set current year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
