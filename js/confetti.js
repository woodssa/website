document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const confettiContainer = document.getElementById("confettiContainer");
  
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Display confetti
      for (let i = 0; i < 100; i++) {
        createConfetti(confettiContainer);
      }
  
      // Temporary message for demonstration
      setTimeout(() => {
        alert("Thank you for your message! Confetti celebration!");
        confettiContainer.innerHTML = "";
        contactForm.reset();
      }, 2000);
    });
  
    function createConfetti(container) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.backgroundColor = randomColor();
      confetti.style.left = randomPosition();
      confetti.style.animationDuration = randomDuration();
      container.appendChild(confetti);
  
      confetti.addEventListener("animationend", () => {
        confetti.remove();
      });
    }
  
    function randomColor() {
      const colors = ["#ff9999", "#66cc66", "#ffcc66", "#9999ff", "#ff66cc"];
      return colors[Math.floor(Math.random() * colors.length)];
    }
  
    function randomPosition() {
      return Math.random() * 100 + "vw";
    }
  
    function randomDuration() {
      return Math.random() * 3 + 2 + "s";
    }
  });
  