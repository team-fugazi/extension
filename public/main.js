/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lib/chrome.ts":
/*!***************************!*\
  !*** ./src/lib/chrome.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.greetChrome = exports.getAllPosts = void 0;
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
exports.getAllPosts = getAllPosts;
const greetChrome = () => __awaiter(void 0, void 0, void 0, function* () {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", getAllPosts, false);
    }
    else {
        getAllPosts();
    }
});
exports.greetChrome = greetChrome;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const chrome_1 = __webpack_require__(/*! ./lib/chrome */ "./src/lib/chrome.ts");
function main() {
    let observer = new MutationObserver((mutations, observer) => {
        for (let mutation of mutations) {
            for (let addedNode of mutation.addedNodes) {
                if (addedNode.nodeName === "DIV") {
                    (0, chrome_1.greetChrome)();
                }
            }
        }
    });
    observer.observe(document, {
        childList: true,
        subtree: true,
        attributes: true,
    });
    (0, chrome_1.greetChrome)();
    //greetFirefox();
}
main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0EsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQW1CLEdBQUcsbUJBQW1CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELG1CQUFtQjs7Ozs7OztVQ3hEbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxpQkFBaUIsbUJBQU8sQ0FBQyx5Q0FBYztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdWdhemktY29udGVudC1tYXBwZXIvLi9zcmMvbGliL2Nocm9tZS50cyIsIndlYnBhY2s6Ly9mdWdhemktY29udGVudC1tYXBwZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZnVnYXppLWNvbnRlbnQtbWFwcGVyLy4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBwYXRoOiAuL3NyYy9saWIvY2hyb21lLnRzXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ3JlZXRDaHJvbWUgPSBleHBvcnRzLmdldEFsbFBvc3RzID0gdm9pZCAwO1xuY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXMpID0+IHNldFRpbWVvdXQocmVzLCBtcykpO1xuZnVuY3Rpb24gZ2V0QWxsUG9zdHMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgeWllbGQgZGVsYXkoNTAwMCk7XG4gICAgICAgIGNvbnN0IHBvc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdltkYXRhLXRlc3RpZD0ncG9zdC1jb250YWluZXInXVwiKTtcbiAgICAgICAgcG9zdHMuZm9yRWFjaCgocG9zdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBwb3N0LnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFncmFwaCA9IHBvc3QucXVlcnlTZWxlY3RvckFsbChcInBcIik7XG4gICAgICAgICAgICBjb25zdCBwb3N0Tm9kZXMgPSBwb3N0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXY6bm90KDpoYXMoPiBkaXYpKVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGxhc3ROb2RlID0gcG9zdE5vZGVzW3Bvc3ROb2Rlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGxhc3ROb2RlLmNsYXNzTmFtZSA9IFwiZXh0cmFcIjtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdmFyIGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB2YXIgc3RhdHVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImNvbnRhaW5lclwiO1xuICAgICAgICAgICAgY2lyY2xlLmNsYXNzTmFtZSA9IFwiY2lyY2xlXCI7XG4gICAgICAgICAgICBzdGF0dXNDb250YWluZXIuY2xhc3NOYW1lID0gXCJzdGF0dXMtY29udGFpbmVyXCI7XG4gICAgICAgICAgICBsYXN0Tm9kZS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNpcmNsZSk7XG4gICAgICAgICAgICBjaXJjbGUuYXBwZW5kQ2hpbGQoc3RhdHVzQ29udGFpbmVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoXCIuY2lyY2xlXCIpLmhvdmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykuZmluZChcIi5zdGF0dXMtY29udGFpbmVyXCIpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMHB4XCIsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJ3aWR0aCAyc1wiLFxuICAgICAgICAgICAgfSwgXCJmYXN0XCIpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoXCIuc3RhdHVzLWNvbnRhaW5lclwiKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIwcHhcIixcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcIndpZHRoIDJzXCIsXG4gICAgICAgICAgICB9LCBcImZhc3RcIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0cy5nZXRBbGxQb3N0cyA9IGdldEFsbFBvc3RzO1xuY29uc3QgZ3JlZXRDaHJvbWUgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZ2V0QWxsUG9zdHMsIGZhbHNlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGdldEFsbFBvc3RzKCk7XG4gICAgfVxufSk7XG5leHBvcnRzLmdyZWV0Q2hyb21lID0gZ3JlZXRDaHJvbWU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBjaHJvbWVfMSA9IHJlcXVpcmUoXCIuL2xpYi9jaHJvbWVcIik7XG5mdW5jdGlvbiBtYWluKCkge1xuICAgIGxldCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMsIG9ic2VydmVyKSA9PiB7XG4gICAgICAgIGZvciAobGV0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgICAgICAgZm9yIChsZXQgYWRkZWROb2RlIG9mIG11dGF0aW9uLmFkZGVkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWRkZWROb2RlLm5vZGVOYW1lID09PSBcIkRJVlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICgwLCBjaHJvbWVfMS5ncmVldENocm9tZSkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LCB7XG4gICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICB9KTtcbiAgICAoMCwgY2hyb21lXzEuZ3JlZXRDaHJvbWUpKCk7XG4gICAgLy9ncmVldEZpcmVmb3goKTtcbn1cbm1haW4oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==