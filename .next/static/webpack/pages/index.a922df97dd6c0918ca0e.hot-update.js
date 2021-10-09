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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Forecast; }\n/* harmony export */ });\n/* harmony import */ var react_icons_wi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/wi */ \"./node_modules/react-icons/wi/index.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/garethhind/Documents/Github/weather-app/components/layout/Forecast.js\";\n\n\nfunction Forecast(_ref) {\n  var _this = this;\n\n  var fiveHour = _ref.fiveHour,\n      iconConverter = _ref.iconConverter,\n      timeConverter = _ref.timeConverter;\n  var displayHour = fiveHour.map(function (hour, index) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"hour\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hour__time\",\n        children: timeConverter(hour.dt)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hour__icon\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_1__.WiDaySunny, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hour__temp\",\n        children: [hour.main.temp.toString().slice(0, 2), \"\\u2103\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, _this)]\n    }, index, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"forecast\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"forecast__header\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Today\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Next 7 Days > \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"forecast__hours\",\n      children: displayHour\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, this);\n}\n_c = Forecast;\n\nvar _c;\n\n$RefreshReg$(_c, \"Forecast\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9Gb3JlY2FzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFnQmUsU0FBU2EsUUFBVCxPQUE4RDtBQUFBOztBQUFBLE1BQTFDQyxRQUEwQyxRQUExQ0EsUUFBMEM7QUFBQSxNQUFoQ0MsYUFBZ0MsUUFBaENBLGFBQWdDO0FBQUEsTUFBakJDLGFBQWlCLFFBQWpCQSxhQUFpQjtBQUMzRSxNQUFNQyxXQUFXLEdBQUdILFFBQVEsQ0FBQ0ksR0FBVCxDQUFhLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUNoRCx3QkFDRTtBQUFpQixlQUFTLEVBQUMsTUFBM0I7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLGtCQUE2QkosYUFBYSxDQUFDRyxJQUFJLENBQUNFLEVBQU47QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSwrQkFDRSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBTUU7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSxtQkFDR0YsSUFBSSxDQUFDRyxJQUFMLENBQVVDLElBQVYsQ0FBZUMsUUFBZixHQUEwQkMsS0FBMUIsQ0FBZ0MsQ0FBaEMsRUFBbUMsQ0FBbkMsQ0FESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORjtBQUFBLE9BQVVMLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBWUQsR0FibUIsQ0FBcEI7QUFlQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsZ0JBQWtDSDtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDtLQXpCdUJKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L0ZvcmVjYXN0LmpzP2VmZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgV2lEYXlTdW5ueSxcbiAgV2lOaWdodENsZWFyLFxuICBXaURheVN1bm55T3ZlcmNhc3QsXG4gIFdpTmlnaHRQYXJ0bHlDbG91ZHksXG4gIFdpQ2xvdWQsXG4gIFdpRGF5Q2xvdWR5LFxuICBXaU5pZ2h0Q2xvdWR5LFxuICBXaVJhaW4sXG4gIFdpRGF5U2hvd2VycyxcbiAgV2lOaWdodFNob3dlcnMsXG4gIFdpVGh1bmRlcnN0b3JtLFxuICBXaVNub3csXG4gIFdpRm9nLFxufSBmcm9tIFwicmVhY3QtaWNvbnMvd2lcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9yZWNhc3QoeyBmaXZlSG91ciwgaWNvbkNvbnZlcnRlciwgdGltZUNvbnZlcnRlciB9KSB7XG4gIGNvbnN0IGRpc3BsYXlIb3VyID0gZml2ZUhvdXIubWFwKChob3VyLCBpbmRleCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImhvdXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3VyX190aW1lXCI+e3RpbWVDb252ZXJ0ZXIoaG91ci5kdCl9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG91cl9faWNvblwiPlxuICAgICAgICAgIDxXaURheVN1bm55IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJob3VyX19pY29uXCI+e2ljb25Db252ZXJ0ZXIoaG91ci53ZWF0aGVyWzBdLmljb24pfTwvZGl2PiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3VyX190ZW1wXCI+XG4gICAgICAgICAge2hvdXIubWFpbi50ZW1wLnRvU3RyaW5nKCkuc2xpY2UoMCwgMil9JiM4NDUxO1xuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JlY2FzdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JlY2FzdF9faGVhZGVyXCI+XG4gICAgICAgIDxoMT5Ub2RheTwvaDE+XG4gICAgICAgIDxoMT5OZXh0IDcgRGF5cyAmIzYyOyA8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcmVjYXN0X19ob3Vyc1wiPntkaXNwbGF5SG91cn08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJXaURheVN1bm55IiwiV2lOaWdodENsZWFyIiwiV2lEYXlTdW5ueU92ZXJjYXN0IiwiV2lOaWdodFBhcnRseUNsb3VkeSIsIldpQ2xvdWQiLCJXaURheUNsb3VkeSIsIldpTmlnaHRDbG91ZHkiLCJXaVJhaW4iLCJXaURheVNob3dlcnMiLCJXaU5pZ2h0U2hvd2VycyIsIldpVGh1bmRlcnN0b3JtIiwiV2lTbm93IiwiV2lGb2ciLCJGb3JlY2FzdCIsImZpdmVIb3VyIiwiaWNvbkNvbnZlcnRlciIsInRpbWVDb252ZXJ0ZXIiLCJkaXNwbGF5SG91ciIsIm1hcCIsImhvdXIiLCJpbmRleCIsImR0IiwibWFpbiIsInRlbXAiLCJ0b1N0cmluZyIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/Forecast.js\n");

/***/ })

});