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

/***/ "./components/weatherApp/WeatherApp.js":
/*!*********************************************!*\
  !*** ./components/weatherApp/WeatherApp.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _layout_MainWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/MainWindow */ \"./components/layout/MainWindow.js\");\n/* harmony import */ var _layout_Forecast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/Forecast */ \"./components/layout/Forecast.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/garethhind/Documents/Github/weather-app/components/weatherApp/WeatherApp.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar API_KEY = \"4a64ed09d073cdac231c53e1a3b62181\";\nfunction App() {\n  _s();\n\n  // Get Weather State\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"sky-gradient-11\"),\n      background = _useState[0],\n      setBackground = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      city = _useState2[0],\n      setCity = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      country = _useState3[0],\n      setCountry = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      date = _useState4[0],\n      setDate = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      description = _useState5[0],\n      setDescription = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      feelslike = _useState6[0],\n      setFeelslike = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      humidity = _useState7[0],\n      setHumidity = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      icon = _useState8[0],\n      setIcon = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      pressure = _useState9[0],\n      setPressure = _useState9[1];\n\n  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      temperature = _useState10[0],\n      setTemperature = _useState10[1];\n\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      time = _useState11[0],\n      setTime = _useState11[1];\n\n  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      wind = _useState12[0],\n      setWind = _useState12[1]; // Get Five Hour Forecast\n\n\n  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      fiveHour = _useState13[0],\n      setFiveHour = _useState13[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var getWeather = /*#__PURE__*/function () {\n      var _ref = (0,_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {\n        var api_call, data;\n        return _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch(\"https://api.openweathermap.org/data/2.5/weather?q=sydney,au&appid=\".concat(API_KEY, \"&units=metric\"));\n\n              case 2:\n                api_call = _context.sent;\n                _context.next = 5;\n                return api_call.json();\n\n              case 5:\n                data = _context.sent;\n                console.log(\"Get Weather Data\", data);\n                setBackground(backgroundConverter(data.weather[0].icon));\n                setCity(data.name);\n                setCountry(data.sys.country);\n                setDate(dateConverter(data.dt));\n                setDescription(data.weather[0].description);\n                setFeelslike(data.main.feels_like);\n                setHumidity(data.main.humidity);\n                setIcon(iconConverter(data.weather[0].icon));\n                setPressure(data.main.pressure);\n                setTemperature(Math.floor(data.main.temp));\n                setTime(timeConverter(data.dt));\n                setWind(data.wind.speed);\n\n              case 19:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getWeather(_x) {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    getWeather();\n  }, []);\n\n  var backgroundConverter = function backgroundConverter(icon) {\n    var weatherBackground = {\n      \"01d\": \"sky-gradient-11\",\n      \"02d\": \"sky-gradient-09\",\n      \"03d\": \"sky-gradient-13\",\n      \"04d\": \"sky-gradient-14\",\n      \"09d\": \"sky-gradient-14\",\n      \"10d\": \"sky-gradient-15\",\n      \"11d\": \"sky-gradient-15\",\n      \"13d\": \"sky-gradient-09\",\n      \"50d\": \"sky-gradient-08\",\n      \"01n\": \"sky-gradient-05\",\n      \"02n\": \"sky-gradient-21\",\n      \"03n\": \"sky-gradient-03\",\n      \"04n\": \"sky-gradient-03\",\n      \"09n\": \"sky-gradient-22\",\n      \"10n\": \"sky-gradient-03\",\n      \"11n\": \"sky-gradient-21\",\n      \"13n\": \"sky-gradient-02\",\n      \"50n\": \"sky-gradient-20\"\n    };\n    return weatherBackground[icon];\n  };\n\n  var iconConverter = function iconConverter(icon) {\n    var convertIcon = {\n      \"01d\": \"WiDaySunny\",\n      \"02d\": \"WiDaySunnyOvercast\",\n      \"03d\": \"WiCloud\",\n      \"04d\": \"WiDayCloudy\",\n      \"09d\": \"WiRain\",\n      \"10d\": \"WiDayShowers\",\n      \"11d\": \"WiThunderstorm\",\n      \"13d\": \"WiSnow\",\n      \"50d\": \"WiFog\",\n      \"01n\": \"WiNightClear\",\n      \"02n\": \"WiNightPartlyCloudy\",\n      \"03n\": \"WiCloud\",\n      \"04n\": \"WiNightCloudy\",\n      \"09n\": \"WiRain\",\n      \"10n\": \"WiNightShowers\",\n      \"11n\": \"WiThunderstorm\",\n      \"13n\": \"WiSnow\",\n      \"50n\": \"WiFog\"\n    };\n    return \"<\".concat(convertIcon[icon], \" />\");\n  };\n\n  var dateConverter = function dateConverter(UNIX_timestamp) {\n    var a = new Date(UNIX_timestamp * 1000);\n    var months = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"];\n    var year = a.getFullYear();\n    var month = months[a.getMonth()];\n    var day = a.getDate();\n    var date = day + \" \" + month + \" \" + year;\n    return date;\n  };\n\n  var timeConverter = function timeConverter(UNIX_timestamp) {\n    var a = new Date(UNIX_timestamp * 1000);\n    var hour = a.getHours();\n    var min = (\"0\" + a.getMinutes()).slice(-2); // let sec = a.getSeconds();\n\n    var time = hour + \":\" + min;\n    return time;\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var getHourForecast = /*#__PURE__*/function () {\n      var _ref2 = (0,_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(e) {\n        var api_call, fiveHourData;\n        return _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return fetch(\"https://api.openweathermap.org/data/2.5/forecast?q=sydney,nsw&appid=\".concat(API_KEY));\n\n              case 2:\n                api_call = _context2.sent;\n                _context2.next = 5;\n                return api_call.json();\n\n              case 5:\n                fiveHourData = _context2.sent;\n                console.log(\"Get Hour Data\", fiveHourData.list);\n                setFiveHour(fiveHourData.list.slice(0, 5));\n\n              case 8:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function getHourForecast(_x2) {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    getHourForecast();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"screen\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"weather-app\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"weather-app__title\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h1\", {\n          children: [city, \", \", country]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 155,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 154,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_layout_MainWindow__WEBPACK_IMPORTED_MODULE_3__.default, {\n        icon: icon,\n        description: description,\n        date: date,\n        time: time,\n        temperature: temperature,\n        wind: wind,\n        feelslike: feelslike,\n        humidity: humidity,\n        pressure: pressure\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 160,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_layout_Forecast__WEBPACK_IMPORTED_MODULE_4__.default, {\n        fiveHour: fiveHour,\n        iconConverter: iconConverter,\n        timeConverter: timeConverter\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 172,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 152,\n    columnNumber: 5\n  }, this);\n}\n\n_s(App, \"jl8isMyg/WxTgWCsqXVKGpM20hc=\");\n\n_c = App;\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3dlYXRoZXJBcHAvV2VhdGhlckFwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxJQUFNSyxPQUFPLEdBQUcsa0NBQWhCO0FBRWUsU0FBU0MsR0FBVCxHQUFlO0FBQUE7O0FBQzVCO0FBQ0Esa0JBQW9DTCwrQ0FBUSxDQUFDLGlCQUFELENBQTVDO0FBQUEsTUFBT00sVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBd0JQLCtDQUFRLEVBQWhDO0FBQUEsTUFBT1EsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQThCVCwrQ0FBUSxFQUF0QztBQUFBLE1BQU9VLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQXdCWCwrQ0FBUSxFQUFoQztBQUFBLE1BQU9ZLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG1CQUFzQ2IsK0NBQVEsRUFBOUM7QUFBQSxNQUFPYyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG1CQUFrQ2YsK0NBQVEsRUFBMUM7QUFBQSxNQUFPZ0IsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBZ0NqQiwrQ0FBUSxFQUF4QztBQUFBLE1BQU9rQixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUF3Qm5CLCtDQUFRLEVBQWhDO0FBQUEsTUFBT29CLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG1CQUFnQ3JCLCtDQUFRLEVBQXhDO0FBQUEsTUFBT3NCLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0Esb0JBQXNDdkIsK0NBQVEsQ0FBQyxDQUFELENBQTlDO0FBQUEsTUFBT3dCLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0Esb0JBQXdCekIsK0NBQVEsRUFBaEM7QUFBQSxNQUFPMEIsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0Esb0JBQXdCM0IsK0NBQVEsRUFBaEM7QUFBQSxNQUFPNEIsSUFBUDtB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QVMsRUFBQyxhQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLG9CQUFmO0FBQUEsK0JBQ0U7QUFBQSxxQkFDRy9ELElBREgsUUFDV0UsT0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFPRSw4REFBQyx1REFBRDtBQUNFLFlBQUksRUFBRVUsSUFEUjtBQUVFLG1CQUFXLEVBQUVOLFdBRmY7QUFHRSxZQUFJLEVBQUVGLElBSFI7QUFJRSxZQUFJLEVBQUVjLElBSlI7QUFLRSxtQkFBVyxFQUFFRixXQUxmO0FBTUUsWUFBSSxFQUFFSSxJQU5SO0FBT0UsaUJBQVMsRUFBRVosU0FQYjtBQVFFLGdCQUFRLEVBQUVFLFFBUlo7QUFTRSxnQkFBUSxFQUFFSTtBQVRaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQW1CRSw4REFBQyxxREFBRDtBQUNFLGdCQUFRLEVBQUVRLFFBRFo7QUFFRSxxQkFBYSxFQUFFa0IsYUFGakI7QUFHRSxxQkFBYSxFQUFFSTtBQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTZCRDs7R0E1S3VCL0M7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvd2VhdGhlckFwcC9XZWF0aGVyQXBwLmpzP2U0ZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IE1haW5XaW5kb3cgZnJvbSBcIi4uL2xheW91dC9NYWluV2luZG93XCI7XG5pbXBvcnQgRm9yZWNhc3QgZnJvbSBcIi4uL2xheW91dC9Gb3JlY2FzdFwiO1xuXG5jb25zdCBBUElfS0VZID0gXCI0YTY0ZWQwOWQwNzNjZGFjMjMxYzUzZTFhM2I2MjE4MVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIC8vIEdldCBXZWF0aGVyIFN0YXRlXG4gIGNvbnN0IFtiYWNrZ3JvdW5kLCBzZXRCYWNrZ3JvdW5kXSA9IHVzZVN0YXRlKFwic2t5LWdyYWRpZW50LTExXCIpO1xuICBjb25zdCBbY2l0eSwgc2V0Q2l0eV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbY291bnRyeSwgc2V0Q291bnRyeV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtmZWVsc2xpa2UsIHNldEZlZWxzbGlrZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbaHVtaWRpdHksIHNldEh1bWlkaXR5XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtpY29uLCBzZXRJY29uXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtwcmVzc3VyZSwgc2V0UHJlc3N1cmVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3RlbXBlcmF0dXJlLCBzZXRUZW1wZXJhdHVyZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3dpbmQsIHNldFdpbmRdID0gdXNlU3RhdGUoKTtcblxuICAvLyBHZXQgRml2ZSBIb3VyIEZvcmVjYXN0XG4gIGNvbnN0IFtmaXZlSG91ciwgc2V0Rml2ZUhvdXJdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChlKSA9PiB7XG4gICAgICBjb25zdCBhcGlfY2FsbCA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1zeWRuZXksYXUmYXBwaWQ9JHtBUElfS0VZfSZ1bml0cz1tZXRyaWNgXG4gICAgICApO1xuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpX2NhbGwuanNvbigpO1xuXG4gICAgICBjb25zb2xlLmxvZyhcIkdldCBXZWF0aGVyIERhdGFcIiwgZGF0YSk7XG5cbiAgICAgIHNldEJhY2tncm91bmQoYmFja2dyb3VuZENvbnZlcnRlcihkYXRhLndlYXRoZXJbMF0uaWNvbikpO1xuICAgICAgc2V0Q2l0eShkYXRhLm5hbWUpO1xuICAgICAgc2V0Q291bnRyeShkYXRhLnN5cy5jb3VudHJ5KTtcbiAgICAgIHNldERhdGUoZGF0ZUNvbnZlcnRlcihkYXRhLmR0KSk7XG4gICAgICBzZXREZXNjcmlwdGlvbihkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24pO1xuICAgICAgc2V0RmVlbHNsaWtlKGRhdGEubWFpbi5mZWVsc19saWtlKTtcbiAgICAgIHNldEh1bWlkaXR5KGRhdGEubWFpbi5odW1pZGl0eSk7XG4gICAgICBzZXRJY29uKGljb25Db252ZXJ0ZXIoZGF0YS53ZWF0aGVyWzBdLmljb24pKTtcbiAgICAgIHNldFByZXNzdXJlKGRhdGEubWFpbi5wcmVzc3VyZSk7XG4gICAgICBzZXRUZW1wZXJhdHVyZShNYXRoLmZsb29yKGRhdGEubWFpbi50ZW1wKSk7XG4gICAgICBzZXRUaW1lKHRpbWVDb252ZXJ0ZXIoZGF0YS5kdCkpO1xuICAgICAgc2V0V2luZChkYXRhLndpbmQuc3BlZWQpO1xuICAgIH07XG4gICAgZ2V0V2VhdGhlcigpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgYmFja2dyb3VuZENvbnZlcnRlciA9IChpY29uKSA9PiB7XG4gICAgY29uc3Qgd2VhdGhlckJhY2tncm91bmQgPSB7XG4gICAgICBcIjAxZFwiOiBcInNreS1ncmFkaWVudC0xMVwiLFxuICAgICAgXCIwMmRcIjogXCJza3ktZ3JhZGllbnQtMDlcIixcbiAgICAgIFwiMDNkXCI6IFwic2t5LWdyYWRpZW50LTEzXCIsXG4gICAgICBcIjA0ZFwiOiBcInNreS1ncmFkaWVudC0xNFwiLFxuICAgICAgXCIwOWRcIjogXCJza3ktZ3JhZGllbnQtMTRcIixcbiAgICAgIFwiMTBkXCI6IFwic2t5LWdyYWRpZW50LTE1XCIsXG4gICAgICBcIjExZFwiOiBcInNreS1ncmFkaWVudC0xNVwiLFxuICAgICAgXCIxM2RcIjogXCJza3ktZ3JhZGllbnQtMDlcIixcbiAgICAgIFwiNTBkXCI6IFwic2t5LWdyYWRpZW50LTA4XCIsXG4gICAgICBcIjAxblwiOiBcInNreS1ncmFkaWVudC0wNVwiLFxuICAgICAgXCIwMm5cIjogXCJza3ktZ3JhZGllbnQtMjFcIixcbiAgICAgIFwiMDNuXCI6IFwic2t5LWdyYWRpZW50LTAzXCIsXG4gICAgICBcIjA0blwiOiBcInNreS1ncmFkaWVudC0wM1wiLFxuICAgICAgXCIwOW5cIjogXCJza3ktZ3JhZGllbnQtMjJcIixcbiAgICAgIFwiMTBuXCI6IFwic2t5LWdyYWRpZW50LTAzXCIsXG4gICAgICBcIjExblwiOiBcInNreS1ncmFkaWVudC0yMVwiLFxuICAgICAgXCIxM25cIjogXCJza3ktZ3JhZGllbnQtMDJcIixcbiAgICAgIFwiNTBuXCI6IFwic2t5LWdyYWRpZW50LTIwXCIsXG4gICAgfTtcblxuICAgIHJldHVybiB3ZWF0aGVyQmFja2dyb3VuZFtpY29uXTtcbiAgfTtcblxuICBjb25zdCBpY29uQ29udmVydGVyID0gKGljb24pID0+IHtcbiAgICBjb25zdCBjb252ZXJ0SWNvbiA9IHtcbiAgICAgIFwiMDFkXCI6IFwiV2lEYXlTdW5ueVwiLFxuICAgICAgXCIwMmRcIjogXCJXaURheVN1bm55T3ZlcmNhc3RcIixcbiAgICAgIFwiMDNkXCI6IFwiV2lDbG91ZFwiLFxuICAgICAgXCIwNGRcIjogXCJXaURheUNsb3VkeVwiLFxuICAgICAgXCIwOWRcIjogXCJXaVJhaW5cIixcbiAgICAgIFwiMTBkXCI6IFwiV2lEYXlTaG93ZXJzXCIsXG4gICAgICBcIjExZFwiOiBcIldpVGh1bmRlcnN0b3JtXCIsXG4gICAgICBcIjEzZFwiOiBcIldpU25vd1wiLFxuICAgICAgXCI1MGRcIjogXCJXaUZvZ1wiLFxuICAgICAgXCIwMW5cIjogXCJXaU5pZ2h0Q2xlYXJcIixcbiAgICAgIFwiMDJuXCI6IFwiV2lOaWdodFBhcnRseUNsb3VkeVwiLFxuICAgICAgXCIwM25cIjogXCJXaUNsb3VkXCIsXG4gICAgICBcIjA0blwiOiBcIldpTmlnaHRDbG91ZHlcIixcbiAgICAgIFwiMDluXCI6IFwiV2lSYWluXCIsXG4gICAgICBcIjEwblwiOiBcIldpTmlnaHRTaG93ZXJzXCIsXG4gICAgICBcIjExblwiOiBcIldpVGh1bmRlcnN0b3JtXCIsXG4gICAgICBcIjEzblwiOiBcIldpU25vd1wiLFxuICAgICAgXCI1MG5cIjogXCJXaUZvZ1wiLFxuICAgIH07XG4gICAgcmV0dXJuIGA8JHtjb252ZXJ0SWNvbltpY29uXX0gLz5gO1xuICB9O1xuXG4gIGNvbnN0IGRhdGVDb252ZXJ0ZXIgPSAoVU5JWF90aW1lc3RhbXApID0+IHtcbiAgICBsZXQgYSA9IG5ldyBEYXRlKFVOSVhfdGltZXN0YW1wICogMTAwMCk7XG4gICAgY29uc3QgbW9udGhzID0gW1xuICAgICAgXCJKYW5cIixcbiAgICAgIFwiRmViXCIsXG4gICAgICBcIk1hclwiLFxuICAgICAgXCJBcHJcIixcbiAgICAgIFwiTWF5XCIsXG4gICAgICBcIkp1blwiLFxuICAgICAgXCJKdWxcIixcbiAgICAgIFwiQXVnXCIsXG4gICAgICBcIlNlcFwiLFxuICAgICAgXCJPY3RcIixcbiAgICAgIFwiTm92XCIsXG4gICAgICBcIkRlY1wiLFxuICAgIF07XG4gICAgbGV0IHllYXIgPSBhLmdldEZ1bGxZZWFyKCk7XG4gICAgbGV0IG1vbnRoID0gbW9udGhzW2EuZ2V0TW9udGgoKV07XG4gICAgbGV0IGRheSA9IGEuZ2V0RGF0ZSgpO1xuICAgIGxldCBkYXRlID0gZGF5ICsgXCIgXCIgKyBtb250aCArIFwiIFwiICsgeWVhcjtcblxuICAgIHJldHVybiBkYXRlO1xuICB9O1xuXG4gIGNvbnN0IHRpbWVDb252ZXJ0ZXIgPSAoVU5JWF90aW1lc3RhbXApID0+IHtcbiAgICBsZXQgYSA9IG5ldyBEYXRlKFVOSVhfdGltZXN0YW1wICogMTAwMCk7XG5cbiAgICBsZXQgaG91ciA9IGEuZ2V0SG91cnMoKTtcbiAgICBsZXQgbWluID0gKFwiMFwiICsgYS5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKTtcbiAgICAvLyBsZXQgc2VjID0gYS5nZXRTZWNvbmRzKCk7XG4gICAgbGV0IHRpbWUgPSBob3VyICsgXCI6XCIgKyBtaW47XG5cbiAgICByZXR1cm4gdGltZTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldEhvdXJGb3JlY2FzdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICBjb25zdCBhcGlfY2FsbCA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9c3lkbmV5LG5zdyZhcHBpZD0ke0FQSV9LRVl9YFxuICAgICAgKTtcblxuICAgICAgY29uc3QgZml2ZUhvdXJEYXRhID0gYXdhaXQgYXBpX2NhbGwuanNvbigpO1xuXG4gICAgICBjb25zb2xlLmxvZyhcIkdldCBIb3VyIERhdGFcIiwgZml2ZUhvdXJEYXRhLmxpc3QpO1xuXG4gICAgICBzZXRGaXZlSG91cihmaXZlSG91ckRhdGEubGlzdC5zbGljZSgwLCA1KSk7XG4gICAgfTtcbiAgICBnZXRIb3VyRm9yZWNhc3QoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VhdGhlci1hcHBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWF0aGVyLWFwcF9fdGl0bGVcIj5cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICB7Y2l0eX0sIHtjb3VudHJ5fVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxNYWluV2luZG93XG4gICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgICAgICB0aW1lPXt0aW1lfVxuICAgICAgICAgIHRlbXBlcmF0dXJlPXt0ZW1wZXJhdHVyZX1cbiAgICAgICAgICB3aW5kPXt3aW5kfVxuICAgICAgICAgIGZlZWxzbGlrZT17ZmVlbHNsaWtlfVxuICAgICAgICAgIGh1bWlkaXR5PXtodW1pZGl0eX1cbiAgICAgICAgICBwcmVzc3VyZT17cHJlc3N1cmV9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPEZvcmVjYXN0XG4gICAgICAgICAgZml2ZUhvdXI9e2ZpdmVIb3VyfVxuICAgICAgICAgIGljb25Db252ZXJ0ZXI9e2ljb25Db252ZXJ0ZXJ9XG4gICAgICAgICAgdGltZUNvbnZlcnRlcj17dGltZUNvbnZlcnRlcn1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNYWluV2luZG93IiwiRm9yZWNhc3QiLCJBUElfS0VZIiwiQXBwIiwiYmFja2dyb3VuZCIsInNldEJhY2tncm91bmQiLCJjaXR5Iiwic2V0Q2l0eSIsImNvdW50cnkiLCJzZXRDb3VudHJ5IiwiZGF0ZSIsInNldERhdGUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiZmVlbHNsaWtlIiwic2V0RmVlbHNsaWtlIiwiaHVtaWRpdHkiLCJzZXRIdW1pZGl0eSIsImljb24iLCJzZXRJY29uIiwicHJlc3N1cmUiLCJzZXRQcmVzc3VyZSIsInRlbXBlcmF0dXJlIiwic2V0VGVtcGVyYXR1cmUiLCJ0aW1lIiwic2V0VGltZSIsIndpbmQiLCJzZXRXaW5kIiwiZml2ZUhvdXIiLCJzZXRGaXZlSG91ciIsImdldFdlYXRoZXIiLCJlIiwiZmV0Y2giLCJhcGlfY2FsbCIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImJhY2tncm91bmRDb252ZXJ0ZXIiLCJ3ZWF0aGVyIiwibmFtZSIsInN5cyIsImRhdGVDb252ZXJ0ZXIiLCJkdCIsIm1haW4iLCJmZWVsc19saWtlIiwiaWNvbkNvbnZlcnRlciIsIk1hdGgiLCJmbG9vciIsInRlbXAiLCJ0aW1lQ29udmVydGVyIiwic3BlZWQiLCJ3ZWF0aGVyQmFja2dyb3VuZCIsImNvbnZlcnRJY29uIiwiVU5JWF90aW1lc3RhbXAiLCJhIiwiRGF0ZSIsIm1vbnRocyIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwiaG91ciIsImdldEhvdXJzIiwibWluIiwiZ2V0TWludXRlcyIsInNsaWNlIiwiZ2V0SG91ckZvcmVjYXN0IiwiZml2ZUhvdXJEYXRhIiwibGlzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/weatherApp/WeatherApp.js\n");

/***/ })

});