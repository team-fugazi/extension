"use strict";
// path: ./src/lib/chrome.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.greetChrome = void 0;
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
function getAllPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        const posts = document.querySelectorAll("div[data-testid='post-container']");
        posts.forEach((post) => {
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
        $(".circle").hover(function () {
            $(this).find(".status-container").animate({
                width: "100px",
                transition: "width 2s",
            }, "fast");
        }, function () {
            $(this).find(".status-container").animate({
                width: "0px",
                transition: "width 2s",
            }, "fast");
        });
    });
}
const greetChrome = () => __awaiter(void 0, void 0, void 0, function* () {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", getAllPosts, false);
    }
    else {
        getAllPosts();
    }
});
exports.greetChrome = greetChrome;
