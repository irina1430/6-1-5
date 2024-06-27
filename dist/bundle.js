/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/script/script.js":
/*!*********************************!*\
  !*** ./assets/script/script.js ***!
  \*********************************/
/***/ (() => {

eval("var init = false;\r\nvar swiper;\r\nfunction swiperCard() {\r\n  if (window.innerWidth < 768) {\r\n    if (!init) {\r\n      init = true;\r\n      swiper = new Swiper(\".swiper\", {\r\n        slidesPerView: \"auto\",\r\n        direction: \"horizontal\",\r\n        pagination: {\r\n          el: \".swiper-pagination\",\r\n          clickable: true,\r\n        },\r\n      });\r\n    }\r\n  }\r\n}\r\n\r\nswiperCard();\r\nwindow.addEventListener(\"resize\", swiperCard);\r\n\r\nconst btnShowMore = document.querySelector(\".btn__show-more\");\r\nconst showBrands = document.querySelector(\".swiper-wrapper\");\r\nconst windowWidth = window.innerWidth;\r\nconsole.log(showBrands.scrollHeight);\r\nbtnShowMore.addEventListener(\"click\", () => {\r\n  if (showBrands.classList.contains(\"expanded\")) {\r\n    showBrands.style.height = \"160px\";\r\n    btnShowMore.textContent = \"Показать все\";\r\n    btnShowMore.classList.remove(\"rotate\");\r\n    showBrands.classList.remove(\"expanded\");\r\n  } else {\r\n    showBrands.style.height = `${showBrands.scrollHeight}px`;\r\n    btnShowMore.textContent = \"Скрыть\";\r\n    btnShowMore.classList.add(\"rotate\");\r\n    showBrands.classList.add(\"expanded\");\r\n  }\r\n});\r\n\r\nconst btnShowMore2 = document.querySelector(\".btn__show-more2\");\r\nconst showBrands2 = document.querySelector(\".tech-repair__list\");\r\nconst windowWidth2 = window.innerWidth;\r\nconsole.log(showBrands2.scrollHeight);\r\nbtnShowMore2.addEventListener(\"click\", () => {\r\n  if (showBrands2.classList.contains(\"expanded\")) {\r\n    showBrands2.style.height = \"160px\";\r\n    btnShowMore2.textContent = \"Показать все\";\r\n    btnShowMore2.classList.remove(\"rotate\");\r\n    showBrands2.classList.remove(\"expanded\");\r\n  } else {\r\n    showBrands2.style.height = `${showBrands2.scrollHeight}px`;\r\n    btnShowMore2.textContent = \"Скрыть\";\r\n    btnShowMore2.classList.add(\"rotate\");\r\n    showBrands2.classList.add(\"expanded\");\r\n  }\r\n});\r\n\r\nfunction toggleMenu() {\r\n  const menu = document.querySelector(\".main__sidebar\");\r\n  menu.style.display = menu.style.display === \"block\" ? \"none\" : \"block\";\r\n}\r\n\r\ndocument.getElementById(\"hideButton\").addEventListener(\"click\", function () {\r\n  document.getElementById(\"sidebar\").style.display = \"none\";\r\n});\r\n\r\nfunction readMore() {\r\n  var dots = document.getElementById(\"dots\");\r\n  var moreText = document.getElementById(\"read-more-text\");\r\n  var btnText = document.getElementById(\"read-more-btn\");\r\n\r\n  if (dots.style.display === \"none\") {\r\n    dots.style.display = \"inline\";\r\n    btnText.innerHTML = \"Читать далее\";\r\n    moreText.style.display = \"none\";\r\n  } else {\r\n    dots.style.display = \"none\";\r\n    btnText.innerHTML = \"Читать меньше\";\r\n    moreText.style.display = \"inline\";\r\n  }\r\n}\r\n\r\ndocument\r\n  .getElementById(\"callbackButton\")\r\n  .addEventListener(\"click\", function () {\r\n    document.getElementById(\"callbackForm\").classList.add(\"callback--open\");\r\n  });\r\n\r\ndocument\r\n  .getElementById(\"callbackButton1\")\r\n  .addEventListener(\"click\", function () {\r\n    document.getElementById(\"callbackForm\").classList.add(\"callback--open\");\r\n  });\r\n\r\ndocument.getElementById(\"closeCallback\").addEventListener(\"click\", function () {\r\n  document.getElementById(\"callbackForm\").classList.remove(\"callback--open\");\r\n});\r\n\n\n//# sourceURL=webpack://6.1.5/./assets/script/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/script/script.js"]();
/******/ 	
/******/ })()
;