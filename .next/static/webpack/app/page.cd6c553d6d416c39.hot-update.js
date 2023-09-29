"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/actions/auth */ \"(app-pages-browser)/./src/actions/auth.js\");\n/* harmony import */ var _components_Titulo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Titulo */ \"(app-pages-browser)/./src/components/Titulo.js\");\n/* harmony import */ var _components_cardFilme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/cardFilme */ \"(app-pages-browser)/./src/components/cardFilme.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nasync function carregarDados() {\n    const url = \"https://api.themoviedb.org/3/trending/movie/week?api_key=1e922667481ab207d642450b0efb461e&language=pt-br\";\n    const response = await fetch(url);\n    const json = await response.json();\n    return json.results;\n}\nasync function Home() {\n    _s();\n    const { push } = useRouter();\n    //mock\n    const filmes = await carregarDados();\n    function logout() {\n        (0,_actions_auth__WEBPACK_IMPORTED_MODULE_1__.serverLogout)();\n        push(\"/login\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"bg-neutral-950 p-2 flex gap-3 items-end\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl text-zinc-100 font-bold uppercase mx-8\",\n                        children: \"Fiap Filmes\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"mx-8\",\n                                    href: \"/favoritos\",\n                                    children: \"Favoritos\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"mx-8\",\n                                    href: \"#\",\n                                    children: \"Lan\\xe7amentos\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: logout,\n                                    children: \"logout\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\app\\\\page.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\app\\\\page.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Titulo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: \"Em Alta\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\app\\\\page.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex gap-2 flex-wrap\",\n                children: filmes.map((filme)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cardFilme__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        filme: filme\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 47,\n                        columnNumber: 30\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\app\\\\page.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Titulo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: \"Lan\\xe7amentos\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\app\\\\page.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"XcbUrA/aL/MBnMFoyOqNl+FGIz4=\", true);\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRThDO0FBQ0w7QUFDTTtBQUcvQyxlQUFlRztJQUNiLE1BQU1DLE1BQU07SUFDWixNQUFNQyxXQUFXLE1BQU1DLE1BQU1GO0lBQzdCLE1BQU1HLE9BQU8sTUFBTUYsU0FBU0UsSUFBSTtJQUNoQyxPQUFPQSxLQUFLQyxPQUFPO0FBQ3JCO0FBR2UsZUFBZUM7O0lBQzVCLE1BQU0sRUFBQ0MsSUFBSSxFQUFDLEdBQUdDO0lBQ2YsTUFBTTtJQUVOLE1BQU1DLFNBQVMsTUFBTVQ7SUFFckIsU0FBU1U7UUFDUGIsMkRBQVlBO1FBQ1pVLEtBQUs7SUFFUDtJQUdBLHFCQUNFOzswQkFDRSw4REFBQ0k7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBa0Q7Ozs7OztrQ0FJaEUsOERBQUNFO2tDQUNDLDRFQUFDQzs7OENBQ0MsOERBQUNDO29DQUFFSixXQUFVO29DQUFPSyxNQUFLOzhDQUFhOzs7Ozs7OENBQ3RDLDhEQUFDRDtvQ0FBRUosV0FBVTtvQ0FBT0ssTUFBSzs4Q0FBSTs7Ozs7OzhDQUM3Qiw4REFBQ0M7b0NBQU9DLFNBQVNUOzhDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJL0IsOERBQUNaLDBEQUFNQTswQkFBQzs7Ozs7OzBCQUVSLDhEQUFDc0I7Z0JBQVFSLFdBQVU7MEJBQ2hCSCxPQUFPWSxHQUFHLENBQUNDLENBQUFBLHNCQUFTLDhEQUFDdkIsNkRBQVNBO3dCQUFDdUIsT0FBT0E7Ozs7Ozs7Ozs7OzBCQUl6Qyw4REFBQ3hCLDBEQUFNQTswQkFBQzs7Ozs7Ozs7QUFHZDtHQXRDOEJRO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IHsgc2VydmVyTG9nb3V0IH0gZnJvbSBcIkAvYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCBUaXR1bG8gZnJvbSBcIkAvY29tcG9uZW50cy9UaXR1bG9cIjtcclxuaW1wb3J0IENhcmRGaWxtZSBmcm9tIFwiQC9jb21wb25lbnRzL2NhcmRGaWxtZVwiO1xyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNhcnJlZ2FyRGFkb3MoKSB7XHJcbiAgY29uc3QgdXJsID0gXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3RyZW5kaW5nL21vdmllL3dlZWs/YXBpX2tleT0xZTkyMjY2NzQ4MWFiMjA3ZDY0MjQ1MGIwZWZiNDYxZSZsYW5ndWFnZT1wdC1iclwiXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpXHJcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gIHJldHVybiBqc29uLnJlc3VsdHNcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3Qge3B1c2h9ID0gdXNlUm91dGVyKClcclxuICAvL21vY2tcclxuXHJcbiAgY29uc3QgZmlsbWVzID0gYXdhaXQgY2FycmVnYXJEYWRvcygpXHJcblxyXG4gIGZ1bmN0aW9uIGxvZ291dCgpe1xyXG4gICAgc2VydmVyTG9nb3V0KClcclxuICAgIHB1c2goXCIvbG9naW5cIilcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctbmV1dHJhbC05NTAgcC0yIGZsZXggZ2FwLTMgaXRlbXMtZW5kXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC00eGwgdGV4dC16aW5jLTEwMCBmb250LWJvbGQgdXBwZXJjYXNlIG14LTgnPlxyXG4gICAgICAgICAgRmlhcCBGaWxtZXNcclxuICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbXgtOCcgaHJlZj1cIi9mYXZvcml0b3NcIj5GYXZvcml0b3M8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbXgtOCcgaHJlZj1cIiNcIj5MYW7Dp2FtZW50b3M8L2E+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9nb3V0fT5sb2dvdXQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICAgIDxUaXR1bG8+RW0gQWx0YTwvVGl0dWxvPlxyXG5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBmbGV4LXdyYXBcIj5cclxuICAgICAgICB7ZmlsbWVzLm1hcChmaWxtZSA9PiA8Q2FyZEZpbG1lIGZpbG1lPXtmaWxtZX0gLz4pfVxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG5cclxuICAgICAgPFRpdHVsbz5MYW7Dp2FtZW50b3M8L1RpdHVsbz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsic2VydmVyTG9nb3V0IiwiVGl0dWxvIiwiQ2FyZEZpbG1lIiwiY2FycmVnYXJEYWRvcyIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwicmVzdWx0cyIsIkhvbWUiLCJwdXNoIiwidXNlUm91dGVyIiwiZmlsbWVzIiwibG9nb3V0IiwibmF2IiwiY2xhc3NOYW1lIiwiaDEiLCJ1bCIsImxpIiwiYSIsImhyZWYiLCJidXR0b24iLCJvbkNsaWNrIiwic2VjdGlvbiIsIm1hcCIsImZpbG1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});