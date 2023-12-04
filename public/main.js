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
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
function addPostMarker(post) {
    const postNodes = post.querySelectorAll("div:not(:has(> div))");
    const lastNode = postNodes[postNodes.length - 1];
    lastNode.className = "extra";
    var container = document.createElement("div");
    var circle = document.createElement("div");
    var statusContainer = document.createElement("div");
    const randomId = makeid(5);
    container.className = "container " + randomId;
    circle.className = "circle " + randomId;
    statusContainer.className = "status-container " + randomId;
    lastNode.appendChild(container);
    container.appendChild(circle);
    circle.appendChild(statusContainer);
    $(".circle" + randomId).hover(function () {
        $(this)
            .find(".status-container" + randomId)
            .animate({
            width: "100px",
            transition: "width 2s",
        }, "fast");
    }, function () {
        $(this)
            .find(".status-container" + randomId)
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
                                // numberOfAnalysedPosts += 1;
                                // // @ts-ignore
                                // chrome.storage.local.set({
                                //   numberOfAnalysedPosts: numberOfAnalysedPosts,
                                // });
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
main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0EsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQW1CLEdBQUcsbUJBQW1CLEdBQUcscUJBQXFCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELG1CQUFtQjs7Ozs7OztVQzVFbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxpQkFBaUIsbUJBQU8sQ0FBQyx5Q0FBYztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Z1Z2F6aS1jb250ZW50LW1hcHBlci8uL3NyYy9saWIvY2hyb21lLnRzIiwid2VicGFjazovL2Z1Z2F6aS1jb250ZW50LW1hcHBlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mdWdhemktY29udGVudC1tYXBwZXIvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vIHBhdGg6IC4vc3JjL2xpYi9jaHJvbWUudHNcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5ncmVldENocm9tZSA9IGV4cG9ydHMuZ2V0QWxsUG9zdHMgPSBleHBvcnRzLmFkZFBvc3RNYXJrZXIgPSB2b2lkIDA7XG5jb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlcykgPT4gc2V0VGltZW91dChyZXMsIG1zKSk7XG5mdW5jdGlvbiBtYWtlaWQobGVuZ3RoKSB7XG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gICAgY29uc3QgY2hhcmFjdGVycyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlcIjtcbiAgICBjb25zdCBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIHdoaWxlIChjb3VudGVyIDwgbGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdCArPSBjaGFyYWN0ZXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzTGVuZ3RoKSk7XG4gICAgICAgIGNvdW50ZXIgKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGFkZFBvc3RNYXJrZXIocG9zdCkge1xuICAgIGNvbnN0IHBvc3ROb2RlcyA9IHBvc3QucXVlcnlTZWxlY3RvckFsbChcImRpdjpub3QoOmhhcyg+IGRpdikpXCIpO1xuICAgIGNvbnN0IGxhc3ROb2RlID0gcG9zdE5vZGVzW3Bvc3ROb2Rlcy5sZW5ndGggLSAxXTtcbiAgICBsYXN0Tm9kZS5jbGFzc05hbWUgPSBcImV4dHJhXCI7XG4gICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdmFyIGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdmFyIHN0YXR1c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcmFuZG9tSWQgPSBtYWtlaWQoNSk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiY29udGFpbmVyIFwiICsgcmFuZG9tSWQ7XG4gICAgY2lyY2xlLmNsYXNzTmFtZSA9IFwiY2lyY2xlIFwiICsgcmFuZG9tSWQ7XG4gICAgc3RhdHVzQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwic3RhdHVzLWNvbnRhaW5lciBcIiArIHJhbmRvbUlkO1xuICAgIGxhc3ROb2RlLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNpcmNsZSk7XG4gICAgY2lyY2xlLmFwcGVuZENoaWxkKHN0YXR1c0NvbnRhaW5lcik7XG4gICAgJChcIi5jaXJjbGVcIiArIHJhbmRvbUlkKS5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcylcbiAgICAgICAgICAgIC5maW5kKFwiLnN0YXR1cy1jb250YWluZXJcIiArIHJhbmRvbUlkKVxuICAgICAgICAgICAgLmFuaW1hdGUoe1xuICAgICAgICAgICAgd2lkdGg6IFwiMTAwcHhcIixcbiAgICAgICAgICAgIHRyYW5zaXRpb246IFwid2lkdGggMnNcIixcbiAgICAgICAgfSwgXCJmYXN0XCIpO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgLmZpbmQoXCIuc3RhdHVzLWNvbnRhaW5lclwiICsgcmFuZG9tSWQpXG4gICAgICAgICAgICAuYW5pbWF0ZSh7XG4gICAgICAgICAgICB3aWR0aDogXCIwcHhcIixcbiAgICAgICAgICAgIHRyYW5zaXRpb246IFwid2lkdGggMnNcIixcbiAgICAgICAgfSwgXCJmYXN0XCIpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5hZGRQb3N0TWFya2VyID0gYWRkUG9zdE1hcmtlcjtcbmZ1bmN0aW9uIGdldEFsbFBvc3RzKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHlpZWxkIGRlbGF5KDUwMDApO1xuICAgICAgICBjb25zdCBwb3N0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZbZGF0YS10ZXN0aWQ9J3Bvc3QtY29udGFpbmVyJ11cIik7XG4gICAgICAgIHBvc3RzLmZvckVhY2goKHBvc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gcG9zdC5xdWVyeVNlbGVjdG9yKFwiaDNcIik7XG4gICAgICAgICAgICBjb25zdCBwYXJhZ3JhcGggPSBwb3N0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJwXCIpO1xuICAgICAgICAgICAgYWRkUG9zdE1hcmtlcihwb3N0KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnRzLmdldEFsbFBvc3RzID0gZ2V0QWxsUG9zdHM7XG5jb25zdCBncmVldENocm9tZSA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImxvYWRpbmdcIikge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBnZXRBbGxQb3N0cywgZmFsc2UpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZ2V0QWxsUG9zdHMoKTtcbiAgICB9XG59KTtcbmV4cG9ydHMuZ3JlZXRDaHJvbWUgPSBncmVldENocm9tZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGNocm9tZV8xID0gcmVxdWlyZShcIi4vbGliL2Nocm9tZVwiKTtcbi8qZ2xvYmFsIGNocm9tZSovXG5mdW5jdGlvbiBtYWluKCkge1xuICAgIGxldCBudW1iZXJPZkFuYWx5c2VkUG9zdHMgPSAwO1xuICAgIGxldCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMsIG9ic2VydmVyKSA9PiB7XG4gICAgICAgIGZvciAobGV0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgICAgICAgZm9yIChsZXQgYWRkZWROb2RlIG9mIG11dGF0aW9uLmFkZGVkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWRkZWROb2RlLm5vZGVOYW1lID09PSBcIkRJVlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhZGRlZE5vZGUuaGFzQ2hpbGROb2RlcygpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRlZE5vZGUuY2hpbGROb2Rlcy5sZW5ndGggPT0gMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkZWROb2RlLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWRkZWROb2RlLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5ub2RlTmFtZSA9PT0gXCJESVZcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBhZGRlZE5vZGUuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRlc3RpZFwiKSA9PT0gXCJwb3N0LWNvbnRhaW5lclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDAsIGNocm9tZV8xLmFkZFBvc3RNYXJrZXIpKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBudW1iZXJPZkFuYWx5c2VkUG9zdHMgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIG51bWJlck9mQW5hbHlzZWRQb3N0czogbnVtYmVyT2ZBbmFseXNlZFBvc3RzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LCB7XG4gICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICB9KTtcbiAgICAoMCwgY2hyb21lXzEuZ3JlZXRDaHJvbWUpKCk7XG4gICAgLy9ncmVldEZpcmVmb3goKTtcbn1cbm1haW4oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==