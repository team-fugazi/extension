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
function makeid(length) {
    let result = "";
    const characters = "abcdefghijklmnopqrstuvwxyz";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
function addPostMarker(post) {
    if (post.querySelectorAll(".circle").length >= 1) {
        return;
    }
    const postNodes = post.querySelectorAll("div:not(:has(> div))");
    const lastNode = postNodes[postNodes.length - 1];
    lastNode.className = "extra";
    var container = document.createElement("div");
    var span = document.createElement("span");
    var labelSpan = document.createTextNode("Not AI Generated");
    var circle = document.createElement("div");
    var statusContainer = document.createElement("div");
    const randomId = makeid(5);
    container.className = "container ";
    circle.className = "circle " + randomId;
    statusContainer.className = "status-container " + randomId;
    span.className = "span-container " + randomId;
    lastNode.appendChild(container);
    container.appendChild(circle);
    circle.appendChild(statusContainer);
    //statusContainer.appendChild(label);
    $(".circle." + randomId).hover(function () {
        span.appendChild(labelSpan);
        circle.appendChild(span);
        $(this)
            .find(".status-container." + randomId)
            .animate({
            width: "130px",
            transition: "width 2s",
        }, "fast");
    }, function () {
        span.removeChild(labelSpan);
        circle.removeChild(span);
        $(this)
            .find(".status-container." + randomId)
            .animate({
            width: "0px",
            transition: "width 2s",
        }, "fast");
    });
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
/*global chrome*/
function main() {
    let numberOfAnalysedPosts = 0;
    let observer = new MutationObserver((mutations, observer) => {
        for (let mutation of mutations) {
            for (let addedNode of mutation.addedNodes) {
                if (addedNode.nodeName === "DIV") {
                    if (addedNode.hasChildNodes() &&
                        addedNode.childNodes.length == 1 &&
                        addedNode.childNodes[0].childNodes[0] !== undefined) {
                        if (addedNode.childNodes[0].childNodes[0].nodeName === "DIV") {
                            const node = addedNode.childNodes[0].childNodes[0];
                            // @ts-ignore
                            if (node.getAttribute("data-testid") === "post-container") {
                                // @ts-ignore
                                (0, chrome_1.addPostMarker)(node);
                                numberOfAnalysedPosts += 1;
                                // @ts-ignore
                                chrome.storage.local.set({
                                    numberOfAnalysedPosts: numberOfAnalysedPosts,
                                });
                            }
                        }
                    }
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
function addLocationObserver(callback) {
    // Options for the observer (which mutations to observe)
    const config = { attributes: false, childList: true, subtree: false };
    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);
    // Start observing the target node for configured mutations
    observer.observe(document.body, config);
}
function observerCallback() {
    main();
}
addLocationObserver(observerCallback);
observerCallback();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0EsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQW1CLEdBQUcsbUJBQW1CLEdBQUcscUJBQXFCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxtQkFBbUI7Ozs7Ozs7VUN2Rm5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUJBQWlCLG1CQUFPLENBQUMseUNBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Z1Z2F6aS1jb250ZW50LW1hcHBlci8uL3NyYy9saWIvY2hyb21lLnRzIiwid2VicGFjazovL2Z1Z2F6aS1jb250ZW50LW1hcHBlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mdWdhemktY29udGVudC1tYXBwZXIvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vIHBhdGg6IC4vc3JjL2xpYi9jaHJvbWUudHNcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5ncmVldENocm9tZSA9IGV4cG9ydHMuZ2V0QWxsUG9zdHMgPSBleHBvcnRzLmFkZFBvc3RNYXJrZXIgPSB2b2lkIDA7XG5jb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlcykgPT4gc2V0VGltZW91dChyZXMsIG1zKSk7XG5mdW5jdGlvbiBtYWtlaWQobGVuZ3RoKSB7XG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gICAgY29uc3QgY2hhcmFjdGVycyA9IFwiYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcIjtcbiAgICBjb25zdCBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIHdoaWxlIChjb3VudGVyIDwgbGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdCArPSBjaGFyYWN0ZXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzTGVuZ3RoKSk7XG4gICAgICAgIGNvdW50ZXIgKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGFkZFBvc3RNYXJrZXIocG9zdCkge1xuICAgIGlmIChwb3N0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2lyY2xlXCIpLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcG9zdE5vZGVzID0gcG9zdC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2Om5vdCg6aGFzKD4gZGl2KSlcIik7XG4gICAgY29uc3QgbGFzdE5vZGUgPSBwb3N0Tm9kZXNbcG9zdE5vZGVzLmxlbmd0aCAtIDFdO1xuICAgIGxhc3ROb2RlLmNsYXNzTmFtZSA9IFwiZXh0cmFcIjtcbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB2YXIgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHZhciBsYWJlbFNwYW4gPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIk5vdCBBSSBHZW5lcmF0ZWRcIik7XG4gICAgdmFyIGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdmFyIHN0YXR1c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcmFuZG9tSWQgPSBtYWtlaWQoNSk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiY29udGFpbmVyIFwiO1xuICAgIGNpcmNsZS5jbGFzc05hbWUgPSBcImNpcmNsZSBcIiArIHJhbmRvbUlkO1xuICAgIHN0YXR1c0NvbnRhaW5lci5jbGFzc05hbWUgPSBcInN0YXR1cy1jb250YWluZXIgXCIgKyByYW5kb21JZDtcbiAgICBzcGFuLmNsYXNzTmFtZSA9IFwic3Bhbi1jb250YWluZXIgXCIgKyByYW5kb21JZDtcbiAgICBsYXN0Tm9kZS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaXJjbGUpO1xuICAgIGNpcmNsZS5hcHBlbmRDaGlsZChzdGF0dXNDb250YWluZXIpO1xuICAgIC8vc3RhdHVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAkKFwiLmNpcmNsZS5cIiArIHJhbmRvbUlkKS5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNwYW4uYXBwZW5kQ2hpbGQobGFiZWxTcGFuKTtcbiAgICAgICAgY2lyY2xlLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAuZmluZChcIi5zdGF0dXMtY29udGFpbmVyLlwiICsgcmFuZG9tSWQpXG4gICAgICAgICAgICAuYW5pbWF0ZSh7XG4gICAgICAgICAgICB3aWR0aDogXCIxMzBweFwiLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJ3aWR0aCAyc1wiLFxuICAgICAgICB9LCBcImZhc3RcIik7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBzcGFuLnJlbW92ZUNoaWxkKGxhYmVsU3Bhbik7XG4gICAgICAgIGNpcmNsZS5yZW1vdmVDaGlsZChzcGFuKTtcbiAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgLmZpbmQoXCIuc3RhdHVzLWNvbnRhaW5lci5cIiArIHJhbmRvbUlkKVxuICAgICAgICAgICAgLmFuaW1hdGUoe1xuICAgICAgICAgICAgd2lkdGg6IFwiMHB4XCIsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBcIndpZHRoIDJzXCIsXG4gICAgICAgIH0sIFwiZmFzdFwiKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuYWRkUG9zdE1hcmtlciA9IGFkZFBvc3RNYXJrZXI7XG5mdW5jdGlvbiBnZXRBbGxQb3N0cygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBkZWxheSg1MDAwKTtcbiAgICAgICAgY29uc3QgcG9zdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2W2RhdGEtdGVzdGlkPSdwb3N0LWNvbnRhaW5lciddXCIpO1xuICAgICAgICBwb3N0cy5mb3JFYWNoKChwb3N0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IHBvc3QucXVlcnlTZWxlY3RvcihcImgzXCIpO1xuICAgICAgICAgICAgY29uc3QgcGFyYWdyYXBoID0gcG9zdC5xdWVyeVNlbGVjdG9yQWxsKFwicFwiKTtcbiAgICAgICAgICAgIGFkZFBvc3RNYXJrZXIocG9zdCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0cy5nZXRBbGxQb3N0cyA9IGdldEFsbFBvc3RzO1xuY29uc3QgZ3JlZXRDaHJvbWUgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZ2V0QWxsUG9zdHMsIGZhbHNlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGdldEFsbFBvc3RzKCk7XG4gICAgfVxufSk7XG5leHBvcnRzLmdyZWV0Q2hyb21lID0gZ3JlZXRDaHJvbWU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBjaHJvbWVfMSA9IHJlcXVpcmUoXCIuL2xpYi9jaHJvbWVcIik7XG4vKmdsb2JhbCBjaHJvbWUqL1xuZnVuY3Rpb24gbWFpbigpIHtcbiAgICBsZXQgbnVtYmVyT2ZBbmFseXNlZFBvc3RzID0gMDtcbiAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zLCBvYnNlcnZlcikgPT4ge1xuICAgICAgICBmb3IgKGxldCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGFkZGVkTm9kZSBvZiBtdXRhdGlvbi5hZGRlZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFkZGVkTm9kZS5ub2RlTmFtZSA9PT0gXCJESVZcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWRkZWROb2RlLmhhc0NoaWxkTm9kZXMoKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkZWROb2RlLmNoaWxkTm9kZXMubGVuZ3RoID09IDEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZGVkTm9kZS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkZGVkTm9kZS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0ubm9kZU5hbWUgPT09IFwiRElWXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gYWRkZWROb2RlLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS10ZXN0aWRcIikgPT09IFwicG9zdC1jb250YWluZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgwLCBjaHJvbWVfMS5hZGRQb3N0TWFya2VyKShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZBbmFseXNlZFBvc3RzICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlck9mQW5hbHlzZWRQb3N0czogbnVtYmVyT2ZBbmFseXNlZFBvc3RzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LCB7XG4gICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICB9KTtcbiAgICAoMCwgY2hyb21lXzEuZ3JlZXRDaHJvbWUpKCk7XG4gICAgLy9ncmVldEZpcmVmb3goKTtcbn1cbmZ1bmN0aW9uIGFkZExvY2F0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spIHtcbiAgICAvLyBPcHRpb25zIGZvciB0aGUgb2JzZXJ2ZXIgKHdoaWNoIG11dGF0aW9ucyB0byBvYnNlcnZlKVxuICAgIGNvbnN0IGNvbmZpZyA9IHsgYXR0cmlidXRlczogZmFsc2UsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogZmFsc2UgfTtcbiAgICAvLyBDcmVhdGUgYW4gb2JzZXJ2ZXIgaW5zdGFuY2UgbGlua2VkIHRvIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICAgIC8vIFN0YXJ0IG9ic2VydmluZyB0aGUgdGFyZ2V0IG5vZGUgZm9yIGNvbmZpZ3VyZWQgbXV0YXRpb25zXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCBjb25maWcpO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZXJDYWxsYmFjaygpIHtcbiAgICBtYWluKCk7XG59XG5hZGRMb2NhdGlvbk9ic2VydmVyKG9ic2VydmVyQ2FsbGJhY2spO1xub2JzZXJ2ZXJDYWxsYmFjaygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9