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

/***/ "(app-pages-browser)/./src/components/navbar.jsx":
/*!***********************************!*\
  !*** ./src/components/navbar.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/actions/auth */ \"(app-pages-browser)/./src/actions/auth.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction NavBar() {\n    _s();\n    const { push } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    function logout() {\n        (0,_actions_auth__WEBPACK_IMPORTED_MODULE_1__.serverLogout)();\n        push(\"/login\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bg-neutral-950 p-2 flex gap-3 items-end\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-4xl text-zinc-100 font-bold uppercase mx-8\",\n                    children: \"Fiap Filmes\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\components\\\\navbar.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\components\\\\navbar.jsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"mx-8\",\n                            href: \"/favoritos\",\n                            children: \"Favoritos\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\components\\\\navbar.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"mx-8\",\n                            href: \"#\",\n                            children: \"Lan\\xe7amentos\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\components\\\\navbar.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: logout,\n                            children: \"logout\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\components\\\\navbar.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\components\\\\navbar.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\components\\\\navbar.jsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\leobi\\\\FiapFilmes-1\\\\src\\\\components\\\\navbar.jsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_s(NavBar, \"qsDkn33CqmlEcFEENil8IeDjAvk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = NavBar;\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL25hdmJhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRThDO0FBQ2pCO0FBQ2U7QUFFN0IsU0FBU0c7O0lBQ3BCLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdGLDBEQUFTQTtJQUUxQixTQUFTRztRQUNMTCwyREFBWUE7UUFDWkksS0FBSztJQUVUO0lBQ0EscUJBQ0ksOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDTixrREFBSUE7Z0JBQUNPLE1BQUs7MEJBQ1AsNEVBQUNDO29CQUFHRixXQUFVOzhCQUFrRDs7Ozs7Ozs7Ozs7MEJBT3BFLDhEQUFDRzswQkFDRyw0RUFBQ0M7O3NDQUNHLDhEQUFDQzs0QkFBRUwsV0FBVTs0QkFBT0MsTUFBSztzQ0FBYTs7Ozs7O3NDQUN0Qyw4REFBQ0k7NEJBQUVMLFdBQVU7NEJBQU9DLE1BQUs7c0NBQUk7Ozs7OztzQ0FDN0IsOERBQUNLOzRCQUFPQyxTQUFTVDtzQ0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0M7R0EzQndCRjs7UUFDSEQsc0RBQVNBOzs7S0FETkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyLmpzeD82NGNmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgeyBzZXJ2ZXJMb2dvdXQgfSBmcm9tIFwiQC9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIoKSB7XHJcbiAgICBjb25zdCB7IHB1c2ggfSA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgZnVuY3Rpb24gbG9nb3V0KCkge1xyXG4gICAgICAgIHNlcnZlckxvZ291dCgpXHJcbiAgICAgICAgcHVzaChcIi9sb2dpblwiKVxyXG5cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy1uZXV0cmFsLTk1MCBwLTIgZmxleCBnYXAtMyBpdGVtcy1lbmRcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtNHhsIHRleHQtemluYy0xMDAgZm9udC1ib2xkIHVwcGVyY2FzZSBteC04Jz5cclxuICAgICAgICAgICAgICAgICAgICBGaWFwIEZpbG1lc1xyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdteC04JyBocmVmPVwiL2Zhdm9yaXRvc1wiPkZhdm9yaXRvczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J214LTgnIGhyZWY9XCIjXCI+TGFuw6dhbWVudG9zPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9nb3V0fT5sb2dvdXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsic2VydmVyTG9nb3V0IiwiTGluayIsInVzZVJvdXRlciIsIk5hdkJhciIsInB1c2giLCJsb2dvdXQiLCJuYXYiLCJjbGFzc05hbWUiLCJocmVmIiwiaDEiLCJ1bCIsImxpIiwiYSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/navbar.jsx\n"));

/***/ })

});