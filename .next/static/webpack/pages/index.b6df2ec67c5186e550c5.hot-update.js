"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layout/Forecast.js":
/*!***************************************!*\
  !*** ./components/layout/Forecast.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Forecast; }\n/* harmony export */ });\n/* harmony import */ var react_icons_wi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/wi */ \"./node_modules/react-icons/wi/index.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/garethhind/Documents/Github/weather-app/components/layout/Forecast.js\";\n\n\nfunction Forecast(_ref) {\n  var _this = this;\n\n  var celciusConverter = _ref.celciusConverter,\n      fiveHour = _ref.fiveHour,\n      iconConverter = _ref.iconConverter,\n      timeConverter = _ref.timeConverter;\n  console.log(celciusConverter());\n  var displayHour = fiveHour.map(function (hour, index) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"hour\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hour__time\",\n        children: timeConverter(hour.dt)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hour__icon\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_1__.WiDaySunny, {\n          size: \"2.5rem\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hour__temp\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this)]\n    }, index, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"forecast\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"forecast__header\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Today\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Next 7 Days > \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"forecast__hours\",\n      children: displayHour\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, this);\n}\n_c = Forecast;\n\nvar _c;\n\n$RefreshReg$(_c, \"Forecast\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9Gb3JlY2FzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFnQmUsU0FBU2EsUUFBVCxPQUtaO0FBQUE7O0FBQUEsTUFKREMsZ0JBSUMsUUFKREEsZ0JBSUM7QUFBQSxNQUhEQyxRQUdDLFFBSERBLFFBR0M7QUFBQSxNQUZEQyxhQUVDLFFBRkRBLGFBRUM7QUFBQSxNQUREQyxhQUNDLFFBRERBLGFBQ0M7QUFDREMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLGdCQUFnQixFQUE1QjtBQUNBLE1BQU1NLFdBQVcsR0FBR0wsUUFBUSxDQUFDTSxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ2hELHdCQUNFO0FBQWlCLGVBQVMsRUFBQyxNQUEzQjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsa0JBQTZCTixhQUFhLENBQUNLLElBQUksQ0FBQ0UsRUFBTjtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLCtCQUNFLDhEQUFDLHNEQUFEO0FBQVksY0FBSSxFQUFDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFNRTtBQUFLLGlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkY7QUFBQSxPQUFVRCxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQVlELEdBYm1CLENBQXBCO0FBZUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLGdCQUFrQ0g7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7S0EvQnVCUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9Gb3JlY2FzdC5qcz9lZmU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFdpRGF5U3VubnksXG4gIFdpTmlnaHRDbGVhcixcbiAgV2lEYXlTdW5ueU92ZXJjYXN0LFxuICBXaU5pZ2h0UGFydGx5Q2xvdWR5LFxuICBXaUNsb3VkLFxuICBXaURheUNsb3VkeSxcbiAgV2lOaWdodENsb3VkeSxcbiAgV2lSYWluLFxuICBXaURheVNob3dlcnMsXG4gIFdpTmlnaHRTaG93ZXJzLFxuICBXaVRodW5kZXJzdG9ybSxcbiAgV2lTbm93LFxuICBXaUZvZyxcbn0gZnJvbSBcInJlYWN0LWljb25zL3dpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcmVjYXN0KHtcbiAgY2VsY2l1c0NvbnZlcnRlcixcbiAgZml2ZUhvdXIsXG4gIGljb25Db252ZXJ0ZXIsXG4gIHRpbWVDb252ZXJ0ZXIsXG59KSB7XG4gIGNvbnNvbGUubG9nKGNlbGNpdXNDb252ZXJ0ZXIoKSk7XG4gIGNvbnN0IGRpc3BsYXlIb3VyID0gZml2ZUhvdXIubWFwKChob3VyLCBpbmRleCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImhvdXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3VyX190aW1lXCI+e3RpbWVDb252ZXJ0ZXIoaG91ci5kdCl9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG91cl9faWNvblwiPlxuICAgICAgICAgIDxXaURheVN1bm55IHNpemU9XCIyLjVyZW1cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiaG91cl9faWNvblwiPntpY29uQ29udmVydGVyKGhvdXIud2VhdGhlclswXS5pY29uKX08L2Rpdj4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG91cl9fdGVtcFwiPlxuICAgICAgICAgIHsvKiB7Y2VsY2l1c0NvbnZlcnRlcihob3VyLm1haW4udGVtcCl9JiM4NDUxOyAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9yZWNhc3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9yZWNhc3RfX2hlYWRlclwiPlxuICAgICAgICA8aDE+VG9kYXk8L2gxPlxuICAgICAgICA8aDE+TmV4dCA3IERheXMgJiM2MjsgPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JlY2FzdF9faG91cnNcIj57ZGlzcGxheUhvdXJ9PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiV2lEYXlTdW5ueSIsIldpTmlnaHRDbGVhciIsIldpRGF5U3VubnlPdmVyY2FzdCIsIldpTmlnaHRQYXJ0bHlDbG91ZHkiLCJXaUNsb3VkIiwiV2lEYXlDbG91ZHkiLCJXaU5pZ2h0Q2xvdWR5IiwiV2lSYWluIiwiV2lEYXlTaG93ZXJzIiwiV2lOaWdodFNob3dlcnMiLCJXaVRodW5kZXJzdG9ybSIsIldpU25vdyIsIldpRm9nIiwiRm9yZWNhc3QiLCJjZWxjaXVzQ29udmVydGVyIiwiZml2ZUhvdXIiLCJpY29uQ29udmVydGVyIiwidGltZUNvbnZlcnRlciIsImNvbnNvbGUiLCJsb2ciLCJkaXNwbGF5SG91ciIsIm1hcCIsImhvdXIiLCJpbmRleCIsImR0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/Forecast.js\n");

/***/ })

});