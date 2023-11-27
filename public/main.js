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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0EsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQW1CLEdBQUcsbUJBQW1CLEdBQUcscUJBQXFCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxtQkFBbUI7Ozs7Ozs7VUM1RG5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUJBQWlCLG1CQUFPLENBQUMseUNBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Z1Z2F6aS1jb250ZW50LW1hcHBlci8uL3NyYy9saWIvY2hyb21lLnRzIiwid2VicGFjazovL2Z1Z2F6aS1jb250ZW50LW1hcHBlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mdWdhemktY29udGVudC1tYXBwZXIvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vIHBhdGg6IC4vc3JjL2xpYi9jaHJvbWUudHNcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5ncmVldENocm9tZSA9IGV4cG9ydHMuZ2V0QWxsUG9zdHMgPSBleHBvcnRzLmFkZFBvc3RNYXJrZXIgPSB2b2lkIDA7XG5jb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlcykgPT4gc2V0VGltZW91dChyZXMsIG1zKSk7XG5mdW5jdGlvbiBhZGRQb3N0TWFya2VyKHBvc3QpIHtcbiAgICBjb25zdCBwb3N0Tm9kZXMgPSBwb3N0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXY6bm90KDpoYXMoPiBkaXYpKVwiKTtcbiAgICBjb25zdCBsYXN0Tm9kZSA9IHBvc3ROb2Rlc1twb3N0Tm9kZXMubGVuZ3RoIC0gMV07XG4gICAgbGFzdE5vZGUuY2xhc3NOYW1lID0gXCJleHRyYVwiO1xuICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHZhciBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHZhciBzdGF0dXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImNvbnRhaW5lclwiO1xuICAgIGNpcmNsZS5jbGFzc05hbWUgPSBcImNpcmNsZVwiO1xuICAgIHN0YXR1c0NvbnRhaW5lci5jbGFzc05hbWUgPSBcInN0YXR1cy1jb250YWluZXJcIjtcbiAgICBsYXN0Tm9kZS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaXJjbGUpO1xuICAgIGNpcmNsZS5hcHBlbmRDaGlsZChzdGF0dXNDb250YWluZXIpO1xufVxuZXhwb3J0cy5hZGRQb3N0TWFya2VyID0gYWRkUG9zdE1hcmtlcjtcbmZ1bmN0aW9uIGdldEFsbFBvc3RzKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHlpZWxkIGRlbGF5KDUwMDApO1xuICAgICAgICBjb25zdCBwb3N0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZbZGF0YS10ZXN0aWQ9J3Bvc3QtY29udGFpbmVyJ11cIik7XG4gICAgICAgIHBvc3RzLmZvckVhY2goKHBvc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gcG9zdC5xdWVyeVNlbGVjdG9yKFwiaDNcIik7XG4gICAgICAgICAgICBjb25zdCBwYXJhZ3JhcGggPSBwb3N0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJwXCIpO1xuICAgICAgICAgICAgYWRkUG9zdE1hcmtlcihwb3N0KTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoXCIuY2lyY2xlXCIpLmhvdmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykuZmluZChcIi5zdGF0dXMtY29udGFpbmVyXCIpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMHB4XCIsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJ3aWR0aCAyc1wiLFxuICAgICAgICAgICAgfSwgXCJmYXN0XCIpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoXCIuc3RhdHVzLWNvbnRhaW5lclwiKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIwcHhcIixcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcIndpZHRoIDJzXCIsXG4gICAgICAgICAgICB9LCBcImZhc3RcIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0cy5nZXRBbGxQb3N0cyA9IGdldEFsbFBvc3RzO1xuY29uc3QgZ3JlZXRDaHJvbWUgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZ2V0QWxsUG9zdHMsIGZhbHNlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGdldEFsbFBvc3RzKCk7XG4gICAgfVxufSk7XG5leHBvcnRzLmdyZWV0Q2hyb21lID0gZ3JlZXRDaHJvbWU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBjaHJvbWVfMSA9IHJlcXVpcmUoXCIuL2xpYi9jaHJvbWVcIik7XG5mdW5jdGlvbiBtYWluKCkge1xuICAgIGxldCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMsIG9ic2VydmVyKSA9PiB7XG4gICAgICAgIGZvciAobGV0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgICAgICAgZm9yIChsZXQgYWRkZWROb2RlIG9mIG11dGF0aW9uLmFkZGVkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWRkZWROb2RlLm5vZGVOYW1lID09PSBcIkRJVlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhZGRlZE5vZGUuaGFzQ2hpbGROb2RlcygpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRlZE5vZGUuY2hpbGROb2Rlcy5sZW5ndGggPT0gMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkZWROb2RlLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWRkZWROb2RlLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5ub2RlTmFtZSA9PT0gXCJESVZcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBhZGRlZE5vZGUuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRlc3RpZFwiKSA9PT0gXCJwb3N0LWNvbnRhaW5lclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDAsIGNocm9tZV8xLmFkZFBvc3RNYXJrZXIpKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQsIHtcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgIH0pO1xuICAgICgwLCBjaHJvbWVfMS5ncmVldENocm9tZSkoKTtcbiAgICAvL2dyZWV0RmlyZWZveCgpO1xufVxubWFpbigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9