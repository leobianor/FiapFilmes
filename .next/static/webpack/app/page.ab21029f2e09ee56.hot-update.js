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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/actions/auth */ \"(app-pages-browser)/./src/actions/auth.js\");\n/* harmony import */ var _components_Titulo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Titulo */ \"(app-pages-browser)/./src/components/Titulo.js\");\n/* harmony import */ var _components_cardFilme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/cardFilme */ \"(app-pages-browser)/./src/components/cardFilme.jsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nasync function carregarDados() {\n    const url = \"https://api.themoviedb.org/3/trending/movie/week?api_key=1e922667481ab207d642450b0efb461e&language=pt-br\";\n    const response = await fetch(url);\n    const json = await response.json();\n    return json.results;\n}\nasync function Home() {\n    _s();\n    const { push } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    //mock\n    const filmes = await carregarDados();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"bg-neutral-950 p-2 flex gap-3 items-end\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl text-zinc-100 font-bold uppercase mx-8\",\n                        children: \"Fiap Filmes\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"mx-8\",\n                                    href: \"/favoritos\",\n                                    children: \"Favoritos\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"mx-8\",\n                                    href: \"#\",\n                                    children: \"Lan\\xe7amentos\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: logout,\n                                    children: \"logout\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\app\\\\page.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\app\\\\page.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Titulo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: \"Em Alta\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\app\\\\page.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex gap-2 flex-wrap\",\n                children: filmes.map((filme)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cardFilme__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        filme: filme\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 43,\n                        columnNumber: 30\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\app\\\\page.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Titulo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: \"Lan\\xe7amentos\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\app\\\\page.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"XcbUrA/aL/MBnMFoyOqNl+FGIz4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFOEM7QUFDTDtBQUNNO0FBQ0g7QUFFNUMsZUFBZUk7SUFDYixNQUFNQyxNQUFNO0lBQ1osTUFBTUMsV0FBVyxNQUFNQyxNQUFNRjtJQUM3QixNQUFNRyxPQUFPLE1BQU1GLFNBQVNFLElBQUk7SUFDaEMsT0FBT0EsS0FBS0MsT0FBTztBQUNyQjtBQUdlLGVBQWVDOztJQUM1QixNQUFNLEVBQUNDLElBQUksRUFBQyxHQUFHUiwwREFBU0E7SUFDeEIsTUFBTTtJQUVOLE1BQU1TLFNBQVMsTUFBTVI7SUFLckIscUJBQ0U7OzBCQUNFLDhEQUFDUztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFrRDs7Ozs7O2tDQUloRSw4REFBQ0U7a0NBQ0MsNEVBQUNDOzs4Q0FDQyw4REFBQ0M7b0NBQUVKLFdBQVU7b0NBQU9LLE1BQUs7OENBQWE7Ozs7Ozs4Q0FDdEMsOERBQUNEO29DQUFFSixXQUFVO29DQUFPSyxNQUFLOzhDQUFJOzs7Ozs7OENBQzdCLDhEQUFDQztvQ0FBT0MsU0FBU0M7OENBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUkvQiw4REFBQ3JCLDBEQUFNQTswQkFBQzs7Ozs7OzBCQUVSLDhEQUFDc0I7Z0JBQVFULFdBQVU7MEJBQ2hCRixPQUFPWSxHQUFHLENBQUNDLENBQUFBLHNCQUFTLDhEQUFDdkIsNkRBQVNBO3dCQUFDdUIsT0FBT0E7Ozs7Ozs7Ozs7OzBCQUl6Qyw4REFBQ3hCLDBEQUFNQTswQkFBQzs7Ozs7Ozs7QUFHZDtHQWxDOEJTOztRQUNiUCxzREFBU0E7OztLQURJTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IHsgc2VydmVyTG9nb3V0IH0gZnJvbSBcIkAvYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCBUaXR1bG8gZnJvbSBcIkAvY29tcG9uZW50cy9UaXR1bG9cIjtcclxuaW1wb3J0IENhcmRGaWxtZSBmcm9tIFwiQC9jb21wb25lbnRzL2NhcmRGaWxtZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjYXJyZWdhckRhZG9zKCkge1xyXG4gIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy90cmVuZGluZy9tb3ZpZS93ZWVrP2FwaV9rZXk9MWU5MjI2Njc0ODFhYjIwN2Q2NDI0NTBiMGVmYjQ2MWUmbGFuZ3VhZ2U9cHQtYnJcIlxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKVxyXG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICByZXR1cm4ganNvbi5yZXN1bHRzXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IHtwdXNofSA9IHVzZVJvdXRlcigpXHJcbiAgLy9tb2NrXHJcblxyXG4gIGNvbnN0IGZpbG1lcyA9IGF3YWl0IGNhcnJlZ2FyRGFkb3MoKVxyXG5cclxuICBcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImJnLW5ldXRyYWwtOTUwIHAtMiBmbGV4IGdhcC0zIGl0ZW1zLWVuZFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtNHhsIHRleHQtemluYy0xMDAgZm9udC1ib2xkIHVwcGVyY2FzZSBteC04Jz5cclxuICAgICAgICAgIEZpYXAgRmlsbWVzXHJcbiAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9J214LTgnIGhyZWY9XCIvZmF2b3JpdG9zXCI+RmF2b3JpdG9zPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9J214LTgnIGhyZWY9XCIjXCI+TGFuw6dhbWVudG9zPC9hPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ291dH0+bG9nb3V0PC9idXR0b24+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICA8VGl0dWxvPkVtIEFsdGE8L1RpdHVsbz5cclxuXHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgZmxleC13cmFwXCI+XHJcbiAgICAgICAge2ZpbG1lcy5tYXAoZmlsbWUgPT4gPENhcmRGaWxtZSBmaWxtZT17ZmlsbWV9IC8+KX1cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuXHJcbiAgICAgIDxUaXR1bG8+TGFuw6dhbWVudG9zPC9UaXR1bG8+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInNlcnZlckxvZ291dCIsIlRpdHVsbyIsIkNhcmRGaWxtZSIsInVzZVJvdXRlciIsImNhcnJlZ2FyRGFkb3MiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsInJlc3VsdHMiLCJIb21lIiwicHVzaCIsImZpbG1lcyIsIm5hdiIsImNsYXNzTmFtZSIsImgxIiwidWwiLCJsaSIsImEiLCJocmVmIiwiYnV0dG9uIiwib25DbGljayIsImxvZ291dCIsInNlY3Rpb24iLCJtYXAiLCJmaWxtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});