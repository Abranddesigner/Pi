// script.js

document.addEventListener("DOMContentLoaded", function () {
  console.log("Pi Ecosystem Page Loaded");

  // Redirect home header to PDF
  const header = document.querySelector(".top-bar");
  if (header) {
    header.style.cursor = "pointer";
    header.addEventListener("click", function () {
      window.location.href = "https://ik.imagekit.io/kamalprp/Pi%20Network%20pdf.pdf?updatedAt=1753691360582";
    });
  }
});
