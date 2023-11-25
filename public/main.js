/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/lib/chrome.ts":
      /*!***************************!*\
  !*** ./src/lib/chrome.ts ***!
  \***************************/
      /***/ function (__unused_webpack_module, exports) {
        // path: ./src/lib/chrome.ts
        var __awaiter =
          (this && this.__awaiter) ||
          function (thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator["throw"](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done
                  ? resolve(result.value)
                  : adopt(result.value).then(fulfilled, rejected);
              }
              step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
              );
            });
          };
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.greetChrome = void 0;
        const delay = (ms) => new Promise((res) => setTimeout(res, ms));
        function getAllPosts() {
          return __awaiter(this, void 0, void 0, function* () {
            yield delay(5000);
            const posts = document.querySelectorAll(
              "div[data-testid='post-container']"
            );
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
            $(".circle").hover(
              function () {
                $(this).find(".status-container").animate(
                  {
                    width: "100px",
                    transition: "width 2s",
                  },
                  "fast"
                );
              },
              function () {
                $(this).find(".status-container").animate(
                  {
                    width: "0px",
                    transition: "width 2s",
                  },
                  "fast"
                );
              }
            );
          });
        }
        const greetChrome = () =>
          __awaiter(void 0, void 0, void 0, function* () {
            if (document.readyState === "loading") {
              document.addEventListener("DOMContentLoaded", getAllPosts, false);
            } else {
              getAllPosts();
            }
          });
        exports.greetChrome = greetChrome;

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    var exports = __webpack_exports__;
    /*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

    Object.defineProperty(exports, "__esModule", { value: true });
    const chrome_1 = __webpack_require__(
      /*! ./lib/chrome */ "./src/lib/chrome.ts"
    );
    function main() {
      (0, chrome_1.greetChrome)();
      //greetFirefox();
    }
    main();
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0EsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsbUJBQW1COzs7Ozs7O1VDdkRuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQixtQkFBTyxDQUFDLHlDQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdWdhemktY29udGVudC1tYXBwZXIvLi9zcmMvbGliL2Nocm9tZS50cyIsIndlYnBhY2s6Ly9mdWdhemktY29udGVudC1tYXBwZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZnVnYXppLWNvbnRlbnQtbWFwcGVyLy4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBwYXRoOiAuL3NyYy9saWIvY2hyb21lLnRzXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ3JlZXRDaHJvbWUgPSB2b2lkIDA7XG5jb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlcykgPT4gc2V0VGltZW91dChyZXMsIG1zKSk7XG5mdW5jdGlvbiBnZXRBbGxQb3N0cygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBkZWxheSg1MDAwKTtcbiAgICAgICAgY29uc3QgcG9zdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2W2RhdGEtdGVzdGlkPSdwb3N0LWNvbnRhaW5lciddXCIpO1xuICAgICAgICBwb3N0cy5mb3JFYWNoKChwb3N0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IHBvc3QucXVlcnlTZWxlY3RvcihcImgzXCIpO1xuICAgICAgICAgICAgY29uc3QgcGFyYWdyYXBoID0gcG9zdC5xdWVyeVNlbGVjdG9yQWxsKFwicFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHBvc3ROb2RlcyA9IHBvc3QucXVlcnlTZWxlY3RvckFsbChcImRpdjpub3QoOmhhcyg+IGRpdikpXCIpO1xuICAgICAgICAgICAgY29uc3QgbGFzdE5vZGUgPSBwb3N0Tm9kZXNbcG9zdE5vZGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgbGFzdE5vZGUuY2xhc3NOYW1lID0gXCJleHRyYVwiO1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB2YXIgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHZhciBzdGF0dXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiY29udGFpbmVyXCI7XG4gICAgICAgICAgICBjaXJjbGUuY2xhc3NOYW1lID0gXCJjaXJjbGVcIjtcbiAgICAgICAgICAgIHN0YXR1c0NvbnRhaW5lci5jbGFzc05hbWUgPSBcInN0YXR1cy1jb250YWluZXJcIjtcbiAgICAgICAgICAgIGxhc3ROb2RlLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2lyY2xlKTtcbiAgICAgICAgICAgIGNpcmNsZS5hcHBlbmRDaGlsZChzdGF0dXNDb250YWluZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgJChcIi5jaXJjbGVcIikuaG92ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5maW5kKFwiLnN0YXR1cy1jb250YWluZXJcIikuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwcHhcIixcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcIndpZHRoIDJzXCIsXG4gICAgICAgICAgICB9LCBcImZhc3RcIik7XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykuZmluZChcIi5zdGF0dXMtY29udGFpbmVyXCIpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjBweFwiLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwid2lkdGggMnNcIixcbiAgICAgICAgICAgIH0sIFwiZmFzdFwiKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5jb25zdCBncmVldENocm9tZSA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImxvYWRpbmdcIikge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBnZXRBbGxQb3N0cywgZmFsc2UpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZ2V0QWxsUG9zdHMoKTtcbiAgICB9XG59KTtcbmV4cG9ydHMuZ3JlZXRDaHJvbWUgPSBncmVldENocm9tZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGNocm9tZV8xID0gcmVxdWlyZShcIi4vbGliL2Nocm9tZVwiKTtcbmZ1bmN0aW9uIG1haW4oKSB7XG4gICAgKDAsIGNocm9tZV8xLmdyZWV0Q2hyb21lKSgpO1xuICAgIC8vZ3JlZXRGaXJlZm94KCk7XG59XG5tYWluKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
