// content.js

// Function to change the background color of all paragraphs to yellow
function changeParagraphColor() {
  const paragraphs = document.querySelectorAll("span");
  paragraphs.forEach((paragraph) => {
    paragraph.style.backgroundColor = "yellow";
  });
}


function getAllPosts() {
  console.log("hello")
  const posts = document.querySelectorAll("div[data-testid='post-container']")
  posts.forEach((post) => {

    const title = post.querySelector("h3")
    const paragraph = post.querySelectorAll("p")
    //console.log(title)
    //console.log(paragraph)
    
    
    const postNodes = post.querySelectorAll("div:not(:has(> div))")
    const lastNode = postNodes[postNodes.length - 1]
    
    var container = document.createElement("div")
    var circle = document.createElement('div');
    var statusContainer = document.createElement('div');
    
    container.className = "container"
    circle.className = "circle"
    statusContainer.className = "status-container"

    
    
    lastNode.appendChild(container)
    container.appendChild(circle)
    
    circle.appendChild(statusContainer)

  });
}

// Execute the function when the DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", changeParagraphColor);
} else {
  //changeParagraphColor();
  getAllPosts()
}
