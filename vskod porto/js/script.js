// Typing effect
const text = "Halo, Saya Rioyaa";
const typingElement = document.getElementById("typing-text");

let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  if (!isDeleting) {
    typingElement.textContent = text.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === text.length) {
      isDeleting = true;
      setTimeout(typeLoop, 1500);
      return;
    }
  } else {
    typingElement.textContent = text.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
    }
  }
  setTimeout(typeLoop, isDeleting ? 50 : 100);
}
document.addEventListener("DOMContentLoaded", typeLoop);

// Navbar scroll effect
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});
