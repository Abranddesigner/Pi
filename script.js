// script.js

document.addEventListener("DOMContentLoaded", function () {
  console.log("Pi Ecosystem Page Loaded");

  // Redirect header to PDF in new tab
  const header = document.querySelector(".top-bar");
  if (header) {
    header.addEventListener("click", function () {
      window.open(
        "https://ik.imagekit.io/kamalprp/Pi%20Network%20pdf.pdf?updatedAt=1753691360582",
        "_blank"
      );
    });
  }
});
