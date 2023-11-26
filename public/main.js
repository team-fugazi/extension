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
exports.greetChrome = exports.getAllPosts = exports.addPostMarker = void 0;
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
function addPostMarker(post) {
    console.log("___________");
    console.log(post);
    console.log("___________");
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
}
exports.addPostMarker = addPostMarker;
function getAllPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        yield delay(5000);
        const posts = document.querySelectorAll("div[data-testid='post-container']");
        posts.forEach((post) => {
            const title = post.querySelector("h3");
            const paragraph = post.querySelectorAll("p");
            addPostMarker(post);
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
                //console.log(addedNode.nodeName);
                //console.log(addedNode);
                if (addedNode.nodeName === "DIV") {
                    if (addedNode.hasChildNodes() &&
                        addedNode.childNodes.length == 1 &&
                        addedNode.childNodes[0].nodeName === "DIV") {
                        console.log(addedNode.childNodes);
                    }
                    //getAllPosts();
                    // If div has no name or id and a nested div with an class then get the div inside the nested name with an class
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0EsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQW1CLEdBQUcsbUJBQW1CLEdBQUcscUJBQXFCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxtQkFBbUI7Ozs7Ozs7VUMvRG5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUJBQWlCLG1CQUFPLENBQUMseUNBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Z1Z2F6aS1jb250ZW50LW1hcHBlci8uL3NyYy9saWIvY2hyb21lLnRzIiwid2VicGFjazovL2Z1Z2F6aS1jb250ZW50LW1hcHBlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mdWdhemktY29udGVudC1tYXBwZXIvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vIHBhdGg6IC4vc3JjL2xpYi9jaHJvbWUudHNcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5ncmVldENocm9tZSA9IGV4cG9ydHMuZ2V0QWxsUG9zdHMgPSBleHBvcnRzLmFkZFBvc3RNYXJrZXIgPSB2b2lkIDA7XG5jb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlcykgPT4gc2V0VGltZW91dChyZXMsIG1zKSk7XG5mdW5jdGlvbiBhZGRQb3N0TWFya2VyKHBvc3QpIHtcbiAgICBjb25zb2xlLmxvZyhcIl9fX19fX19fX19fXCIpO1xuICAgIGNvbnNvbGUubG9nKHBvc3QpO1xuICAgIGNvbnNvbGUubG9nKFwiX19fX19fX19fX19cIik7XG4gICAgY29uc3QgcG9zdE5vZGVzID0gcG9zdC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2Om5vdCg6aGFzKD4gZGl2KSlcIik7XG4gICAgY29uc3QgbGFzdE5vZGUgPSBwb3N0Tm9kZXNbcG9zdE5vZGVzLmxlbmd0aCAtIDFdO1xuICAgIGxhc3ROb2RlLmNsYXNzTmFtZSA9IFwiZXh0cmFcIjtcbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB2YXIgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB2YXIgc3RhdHVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJjb250YWluZXJcIjtcbiAgICBjaXJjbGUuY2xhc3NOYW1lID0gXCJjaXJjbGVcIjtcbiAgICBzdGF0dXNDb250YWluZXIuY2xhc3NOYW1lID0gXCJzdGF0dXMtY29udGFpbmVyXCI7XG4gICAgbGFzdE5vZGUuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2lyY2xlKTtcbiAgICBjaXJjbGUuYXBwZW5kQ2hpbGQoc3RhdHVzQ29udGFpbmVyKTtcbn1cbmV4cG9ydHMuYWRkUG9zdE1hcmtlciA9IGFkZFBvc3RNYXJrZXI7XG5mdW5jdGlvbiBnZXRBbGxQb3N0cygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBkZWxheSg1MDAwKTtcbiAgICAgICAgY29uc3QgcG9zdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2W2RhdGEtdGVzdGlkPSdwb3N0LWNvbnRhaW5lciddXCIpO1xuICAgICAgICBwb3N0cy5mb3JFYWNoKChwb3N0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IHBvc3QucXVlcnlTZWxlY3RvcihcImgzXCIpO1xuICAgICAgICAgICAgY29uc3QgcGFyYWdyYXBoID0gcG9zdC5xdWVyeVNlbGVjdG9yQWxsKFwicFwiKTtcbiAgICAgICAgICAgIGFkZFBvc3RNYXJrZXIocG9zdCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKFwiLmNpcmNsZVwiKS5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoXCIuc3RhdHVzLWNvbnRhaW5lclwiKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDBweFwiLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwid2lkdGggMnNcIixcbiAgICAgICAgICAgIH0sIFwiZmFzdFwiKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5maW5kKFwiLnN0YXR1cy1jb250YWluZXJcIikuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMHB4XCIsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJ3aWR0aCAyc1wiLFxuICAgICAgICAgICAgfSwgXCJmYXN0XCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZ2V0QWxsUG9zdHMgPSBnZXRBbGxQb3N0cztcbmNvbnN0IGdyZWV0Q2hyb21lID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwibG9hZGluZ1wiKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGdldEFsbFBvc3RzLCBmYWxzZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBnZXRBbGxQb3N0cygpO1xuICAgIH1cbn0pO1xuZXhwb3J0cy5ncmVldENocm9tZSA9IGdyZWV0Q2hyb21lO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgY2hyb21lXzEgPSByZXF1aXJlKFwiLi9saWIvY2hyb21lXCIpO1xuZnVuY3Rpb24gbWFpbigpIHtcbiAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zLCBvYnNlcnZlcikgPT4ge1xuICAgICAgICBmb3IgKGxldCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGFkZGVkTm9kZSBvZiBtdXRhdGlvbi5hZGRlZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhhZGRlZE5vZGUubm9kZU5hbWUpO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYWRkZWROb2RlKTtcbiAgICAgICAgICAgICAgICBpZiAoYWRkZWROb2RlLm5vZGVOYW1lID09PSBcIkRJVlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhZGRlZE5vZGUuaGFzQ2hpbGROb2RlcygpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRlZE5vZGUuY2hpbGROb2Rlcy5sZW5ndGggPT0gMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkZWROb2RlLmNoaWxkTm9kZXNbMF0ubm9kZU5hbWUgPT09IFwiRElWXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkZGVkTm9kZS5jaGlsZE5vZGVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL2dldEFsbFBvc3RzKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGRpdiBoYXMgbm8gbmFtZSBvciBpZCBhbmQgYSBuZXN0ZWQgZGl2IHdpdGggYW4gY2xhc3MgdGhlbiBnZXQgdGhlIGRpdiBpbnNpZGUgdGhlIG5lc3RlZCBuYW1lIHdpdGggYW4gY2xhc3NcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LCB7XG4gICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICB9KTtcbiAgICAoMCwgY2hyb21lXzEuZ3JlZXRDaHJvbWUpKCk7XG4gICAgLy9ncmVldEZpcmVmb3goKTtcbn1cbm1haW4oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==