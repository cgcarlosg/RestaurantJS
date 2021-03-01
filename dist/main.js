/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\r\n    const contact = document.createElement(\"div\");\r\n    contact.classList.add(\"contact\");\r\n  \r\n    const phoneNumber = document.createElement(\"p\");\r\n    phoneNumber.textContent = \"Phone: 111 111 111 111\";\r\n  \r\n    const address = document.createElement(\"p\");\r\n    address.textContent = \"Bogota, Andinos Mall\";\r\n  \r\n    const restaurantLocation = document.createElement(\"img\");\r\n    restaurantLocation.src = \"images/restaurant-location.jpg\";\r\n    restaurantLocation.alt = \"Mozzafiato restaurant location\";\r\n  \r\n    contact.appendChild(phoneNumber);\r\n    contact.appendChild(address);\r\n    contact.appendChild(restaurantLocation);\r\n  \r\n    return contact;\r\n  }\r\n  \r\n  function loadContact() {\r\n    const main = document.getElementById(\"main\");\r\n    main.textContent = \"\";\r\n    main.appendChild(createContact());\r\n  }\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurantjs/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\r\n    const home = document.createElement(\"div\");\r\n    home.classList.add(\"home\");\r\n  \r\n    const chefImage = document.createElement(\"img\");\r\n    chefImage.src = \"images/chef.png\";\r\n    chefImage.alt = \"Chef\";\r\n  \r\n    home.appendChild(createParagraph(\"Best colombian beans\"));\r\n    home.appendChild(createParagraph(\"Made with love\"));\r\n    home.appendChild(chefImage);\r\n    home.appendChild(createParagraph(\"Order online or visit us!\"));\r\n  \r\n    return home;\r\n  }\r\n  \r\n  function createParagraph(text) {\r\n    const paragraph = document.createElement(\"p\");\r\n    paragraph.textContent = text;\r\n    return paragraph;\r\n  }\r\n  \r\n  function loadHome() {\r\n    const main = document.getElementById(\"main\");\r\n    main.textContent = \"\";\r\n    main.appendChild(createHome());\r\n  }\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurantjs/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\r\n\r\n(0,_website__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://restaurantjs/./src/index.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\nfunction createHeader() {\r\n    const header = document.createElement(\"header\");\r\n    header.classList.add(\"header\");\r\n  \r\n    const restaurantName = document.createElement(\"h1\");\r\n    restaurantName.classList.add(\"restaurant-name\");\r\n    restaurantName.textContent = \"Frijolada\";\r\n  \r\n    header.appendChild(restaurantName);\r\n    header.appendChild(createNav());\r\n  \r\n    return header;\r\n  }\r\n  \r\n  function createNav() {\r\n    const nav = document.createElement(\"nav\");\r\n  \r\n    const homeButton = document.createElement(\"button\");\r\n    homeButton.classList.add(\"button-nav\");\r\n    homeButton.textContent = \"Home\";\r\n    homeButton.addEventListener(\"click\", (e) => {\r\n      if (e.target.classList.contains(\"active\")) return;\r\n      setActiveButton(homeButton);\r\n      (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n    });\r\n  \r\n    const menuButton = document.createElement(\"button\");\r\n    menuButton.classList.add(\"button-nav\");\r\n    menuButton.textContent = \"Menu\";\r\n    menuButton.addEventListener(\"click\", (e) => {\r\n      if (e.target.classList.contains(\"active\")) return;\r\n      setActiveButton(menuButton);\r\n      loadMenu();\r\n    });\r\n  \r\n    const contactButton = document.createElement(\"button\");\r\n    contactButton.classList.add(\"button-nav\");\r\n    contactButton.textContent = \"Contact\";\r\n    contactButton.addEventListener(\"click\", (e) => {\r\n      if (e.target.classList.contains(\"active\")) return;\r\n      setActiveButton(contactButton);\r\n      (0,_contact__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n    });\r\n  \r\n    nav.appendChild(homeButton);\r\n    nav.appendChild(menuButton);\r\n    nav.appendChild(contactButton);\r\n  \r\n    return nav;\r\n  }\r\n  \r\n  function setActiveButton(button) {\r\n    const buttons = document.querySelectorAll(\".button-nav\");\r\n  \r\n    buttons.forEach((button) => {\r\n      if (button !== this) {\r\n        button.classList.remove(\"active\");\r\n      }\r\n    });\r\n  \r\n    button.classList.add(\"active\");\r\n  }\r\n  \r\n  function createMain() {\r\n    const main = document.createElement(\"main\");\r\n    main.classList.add(\"main\");\r\n    main.setAttribute(\"id\", \"main\");\r\n    return main;\r\n  }\r\n  \r\n  function createFooter() {\r\n    const footer = document.createElement(\"footer\");\r\n    footer.classList.add(\"footer\");\r\n  \r\n    const copyright = document.createElement(\"p\");\r\n    copyright.textContent = \"Copyright © 2021 Carlos Gutierrez\";\r\n  \r\n    const githubLink = document.createElement(\"a\");\r\n    githubLink.href = \"https://github.com/cgcarlosg\";\r\n  \r\n    const githubIcon = document.createElement(\"i\");\r\n    githubIcon.classList.add(\"fab\");\r\n    githubIcon.classList.add(\"fa-github\");\r\n  \r\n    githubLink.appendChild(githubIcon);\r\n    footer.appendChild(copyright);\r\n    footer.appendChild(githubLink);\r\n  \r\n    return footer;\r\n  }\r\n  \r\n  function initializeWebsite() {\r\n    const content = document.getElementById(\"content\");\r\n  \r\n    content.appendChild(createHeader());\r\n    content.appendChild(createMain());\r\n    content.appendChild(createFooter());\r\n  \r\n    setActiveButton(document.querySelector(\".button-nav\"));\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n  }\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\n\n//# sourceURL=webpack://restaurantjs/./src/website.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;