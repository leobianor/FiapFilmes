"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.js":
/*!***************************!*\
  !*** ./src/middleware.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\nfunction middleware(request) {\n    if (request.cookies.has(\"user_email\")) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/login\", request.url));\n    }\n}\n// See \"Matching Paths\" below to learn more\nconst config = {\n    matcher: [\n        \"/:path\",\n        \"/favoritos:path\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBRXBDLFNBQVNDLFdBQVdDLE9BQU87SUFDOUIsSUFBTUEsUUFBUUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZTtRQUNyQyxPQUFPSixrRkFBWUEsQ0FBQ0ssUUFBUSxDQUFDLElBQUlDLElBQUksVUFBVUosUUFBUUssR0FBRztJQUU5RDtBQUVKO0FBRUEsMkNBQTJDO0FBQ3BDLE1BQU1DLFNBQVM7SUFDbEJDLFNBQVM7UUFBQztRQUFTO0tBQWtCO0FBQ3pDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21pZGRsZXdhcmUuanM/YTQ5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3QpIHtcclxuICAgIGlmICggIHJlcXVlc3QuY29va2llcy5oYXMoJ3VzZXJfZW1haWwnKSApe1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL2xvZ2luJywgcmVxdWVzdC51cmwpKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLy8gU2VlIFwiTWF0Y2hpbmcgUGF0aHNcIiBiZWxvdyB0byBsZWFybiBtb3JlXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgICBtYXRjaGVyOiBbJy86cGF0aCcsJy9mYXZvcml0b3M6cGF0aCddXHJcbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJjb29raWVzIiwiaGFzIiwicmVkaXJlY3QiLCJVUkwiLCJ1cmwiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.js\n");

/***/ })

});