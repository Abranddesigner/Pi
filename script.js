// script.js

document.addEventListener("DOMContentLoaded", () => {
  const appCards = document.querySelectorAll(".app-card");

  appCards.forEach(card => {
    card.addEventListener("click", () => {
      const appName = card.querySelector("p").textContent;
      console.log(`Opening: ${appName}`);
    });
  });

  const footerLink = document.querySelector("footer a");
  footerLink.addEventListener("click", () => {
    console.log("Navigating to Privacy Policy");
  });
});
