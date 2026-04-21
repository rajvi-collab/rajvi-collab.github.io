// Theme toggle
const toggle = document.getElementById("themeToggle");

toggle.onclick = () => {
  document.body.classList.toggle("light");
};

// Smooth scrolling
document.querySelectorAll("a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});