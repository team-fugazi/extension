// content.js

// Function to change the background color of all paragraphs to yellow
function changeParagraphColor() {
  const paragraphs = document.querySelectorAll("span");
  paragraphs.forEach((paragraph) => {
    paragraph.style.backgroundColor = "yellow";
  });
}

// Execute the function when the DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", changeParagraphColor);
} else {
  changeParagraphColor();
}
