// content.js

// Function to change the background color of all paragraphs to yellow
function changeParagraphColor() {
  const paragraphs = document.querySelectorAll("span");
  paragraphs.forEach((paragraph) => {
    paragraph.style.backgroundColor = "yellow";
  });
}

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

/*chrome.runtime.sendMessage("get-user-data", (response) => {
  console.log(response);
  console.log("hello");
  getAllPosts();
});
*/

// Run script again once dom changes

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Hello");

  return true;
});
async function getAllPosts() {
  await delay(6000);

  console.log("hello");
  const posts = document.querySelectorAll("div[data-testid='post-container']");
  posts.forEach((post) => {
    console.log("being called");

    const title = post.querySelector("h3");
    const paragraph = post.querySelectorAll("p");

    const postNodes = post.querySelectorAll("div:not(:has(> div))");
    const lastNode = postNodes[postNodes.length - 1];
    lastNode.className = "extra";

    var container = document.createElement("div");
    var circle = document.createElement("div");
    var statusContainer = document.createElement("div");

    container.className = "container";
    circle.className = "circle";
    statusContainer.className = "status-container";

    lastNode.appendChild(container);
    container.appendChild(circle);

    circle.appendChild(statusContainer);
  });

  $(".circle").hover(
    function () {
      $(this).find(".status-container").animate(
        {
          width: "100px",
        },
        "fast"
      );
    },
    function () {
      $(this).find(".status-container").animate(
        {
          width: "0px",
        },
        "fast"
      );
    }
  );
}

// Execute the function when the DOM is ready
if (document.readyState === "loading") {
  //getAllPosts()
  //document.addEventListener("DOMContentLoaded", changeParagraphColor);
  document.addEventListener("DOMContentLoaded", getAllPosts, false);
} else {
  //changeParagraphColor();
  //document.addEventListener("load", getAllPosts, false);
  getAllPosts();
}
