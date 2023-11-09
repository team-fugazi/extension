// content.js

// Function to change the background color of all paragraphs to yellow
function changeParagraphColor() {
  const paragraphs = document.querySelectorAll("span");
  paragraphs.forEach((paragraph) => {
    paragraph.style.backgroundColor = "yellow";
  });
}

function getAllPosts() {
  const posts = document.querySelectorAll("div[data-testid='post-container']")
  posts.forEach((post) => {

    const title = post.querySelector("h3")
    const paragraph = post.querySelectorAll("p")
    //console.log(title)
    //console.log(paragraph)
    console.log(post)
    console.log(post.querySelector("div:last-child:not(:has(> div))"))
  });
}

// Execute the function when the DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", changeParagraphColor);
} else {
  //changeParagraphColor();
  getAllPosts()
}
