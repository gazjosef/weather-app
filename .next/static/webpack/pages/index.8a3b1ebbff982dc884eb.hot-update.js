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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _layout_MainWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/MainWindow */ \"./components/layout/MainWindow.js\");\n/* harmony import */ var _layout_Forecast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/Forecast */ \"./components/layout/Forecast.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/garethhind/Documents/Github/weather-app/components/weatherApp/WeatherApp.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar API_KEY = \"4a64ed09d073cdac231c53e1a3b62181\";\nfunction App() {\n  _s();\n\n  // Get Weather State\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"sky-gradient-11\"),\n      background = _useState[0],\n      setBackground = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      city = _useState2[0],\n      setCity = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      country = _useState3[0],\n      setCountry = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      description = _useState4[0],\n      setDescription = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      feelslike = _useState5[0],\n      setFeelslike = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      humidity = _useState6[0],\n      setHumidity = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      icon = _useState7[0],\n      setIcon = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      pressure = _useState8[0],\n      setPressure = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      temperature = _useState9[0],\n      setTemperature = _useState9[1];\n\n  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      time = _useState10[0],\n      setTime = _useState10[1];\n\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      wind = _useState11[0],\n      setWind = _useState11[1];\n\n  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      windDegrees = _useState12[0],\n      setWindDegrees = _useState12[1]; // Get Five Day Forecast\n\n\n  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      list = _useState13[0],\n      setList = _useState13[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var getWeather = /*#__PURE__*/function () {\n      var _ref = (0,_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {\n        var api_call, data;\n        return _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch(\"https://api.openweathermap.org/data/2.5/weather?q=sydney,au&appid=\".concat(API_KEY, \"&units=metric\"));\n\n              case 2:\n                api_call = _context.sent;\n                _context.next = 5;\n                return api_call.json();\n\n              case 5:\n                data = _context.sent;\n                console.log(data);\n                setBackground(backgroundConverter(data.weather[0].icon));\n                setCity(data.name);\n                setCountry(data.sys.country);\n                setDescription(data.weather[0].description);\n                setFeelslike(data.main.feels_like);\n                setHumidity(data.main.humidity);\n                setIcon(iconConverter(data.weather[0].icon));\n                setPressure(data.main.pressure);\n                setTemperature(Math.floor(data.main.temp));\n                setTime(timeConverter(data.dt));\n                setWind(data.wind.speed);\n                setWindDegrees(data.wind.deg);\n\n              case 19:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getWeather(_x) {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    getWeather();\n  }, []);\n\n  var backgroundConverter = function backgroundConverter(icon) {\n    var weatherBackground = {\n      \"01d\": \"sky-gradient-11\",\n      \"02d\": \"sky-gradient-09\",\n      \"03d\": \"sky-gradient-13\",\n      \"04d\": \"sky-gradient-14\",\n      \"09d\": \"sky-gradient-14\",\n      \"10d\": \"sky-gradient-15\",\n      \"11d\": \"sky-gradient-15\",\n      \"13d\": \"sky-gradient-09\",\n      \"50d\": \"sky-gradient-08\",\n      \"01n\": \"sky-gradient-05\",\n      \"02n\": \"sky-gradient-21\",\n      \"03n\": \"sky-gradient-03\",\n      \"04n\": \"sky-gradient-03\",\n      \"09n\": \"sky-gradient-22\",\n      \"10n\": \"sky-gradient-03\",\n      \"11n\": \"sky-gradient-21\",\n      \"13n\": \"sky-gradient-02\",\n      \"50n\": \"sky-gradient-20\"\n    };\n    return weatherBackground[icon];\n  };\n\n  var iconConverter = function iconConverter(icon) {\n    var convertIcon = {\n      \"01d\": \"WiDaySunny\",\n      \"02d\": \"WiDaySunnyOvercast\",\n      \"03d\": \"WiCloud\",\n      \"04d\": \"WiDayCloudy\",\n      \"09d\": \"WiRain\",\n      \"10d\": \"WiDayShowers\",\n      \"11d\": \"WiThunderstorm\",\n      \"13d\": \"WiSnow\",\n      \"50d\": \"WiFog\",\n      \"01n\": \"WiNightClear\",\n      \"02n\": \"WiNightPartlyCloudy\",\n      \"03n\": \"WiCloud\",\n      \"04n\": \"WiNightCloudy\",\n      \"09n\": \"WiRain\",\n      \"10n\": \"WiNightShowers\",\n      \"11n\": \"WiThunderstorm\",\n      \"13n\": \"WiSnow\",\n      \"50n\": \"WiFog\"\n    };\n    return convertIcon[icon];\n  }; // const iconConverter = (icon) => {\n  //   const convertIcon = {\n  //     \"01d\": \"sun-solid\",\n  //     \"02d\": \"cloud-sun-solid\",\n  //     \"03d\": \"cloud-solid\",\n  //     \"04d\": \"cloud-solid\",\n  //     \"09d\": \"cloud-sun-rain-solid\",\n  //     \"10d\": \"cloud-showers-heavy-solid\",\n  //     \"11d\": \"poo-storm-solid\",\n  //     \"13d\": \"snowflake-solid\",\n  //     \"50d\": \"smog-solid\",\n  //     \"01n\": \"moon-solid\",\n  //     \"02n\": \"cloud-moon-solid\",\n  //     \"03n\": \"cloud-solid\",\n  //     \"04n\": \"cloud-solid\",\n  //     \"09n\": \"cloud-moon-rain-solid\",\n  //     \"10n\": \"cloud-showers-heavy-solid\",\n  //     \"11n\": \"poo-storm-solid\",\n  //     \"13n\": \"snowflake-solid\",\n  //     \"50n\": \"smog-solid\",\n  //   };\n  //   return convertIcon[icon];\n  // };\n\n\n  var timeConverter = function timeConverter(UNIX_timestamp) {\n    var a = new Date(UNIX_timestamp * 1000);\n    var months = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"];\n    var year = a.getFullYear();\n    var month = months[a.getMonth()];\n    var day = a.getDate();\n    var hour = a.getHours();\n    var min = (\"0\" + a.getMinutes()).slice(-2); // let sec = a.getSeconds();\n    // let time = day + \" \" + month + \" \" + year + \" \" + hour + \":\" + min;\n\n    var time = day + \" \" + month + \" \" + year;\n    return time;\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var getFiveDay = /*#__PURE__*/function () {\n      var _ref2 = (0,_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(e) {\n        var api_call, fiveDayData;\n        return _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return fetch(\"https://api.openweathermap.org/data/2.5/forecast?q=sydney,nsw&appid=\".concat(API_KEY));\n\n              case 2:\n                api_call = _context2.sent;\n                _context2.next = 5;\n                return api_call.json();\n\n              case 5:\n                fiveDayData = _context2.sent;\n                console.log(\"This first thing ran\", fiveDayData.list);\n                setList(fiveDayData.list);\n                console.log(\"This second thing ran\", list);\n\n              case 9:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function getFiveDay(_x2) {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    getFiveDay();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"screen\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"weather-app\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"weather-app__title\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h1\", {\n          children: [city, \", \", country]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 174,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 173,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_layout_MainWindow__WEBPACK_IMPORTED_MODULE_3__.default, {\n        icon: icon,\n        description: description,\n        time: time,\n        temperature: temperature,\n        wind: wind,\n        feelslike: feelslike,\n        humidity: humidity,\n        pressure: pressure\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 179,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_layout_Forecast__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 190,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 172,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 171,\n    columnNumber: 5\n  }, this);\n}\n\n_s(App, \"bLXBERkQozItmWNuCFXfOPJeeX0=\");\n\n_c = App;\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3dlYXRoZXJBcHAvV2VhdGhlckFwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxJQUFNSyxPQUFPLEdBQUcsa0NBQWhCO0FBRWUsU0FBU0MsR0FBVCxHQUFlO0FBQUE7O0FBQzVCO0FBQ0Esa0JBQW9DTCwrQ0FBUSxDQUFDLGlCQUFELENBQTVDO0FBQUEsTUFBT00sVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBd0JQLCtDQUFRLEVBQWhDO0FBQUEsTUFBT1EsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQThCVCwrQ0FBUSxFQUF0QztBQUFBLE1BQU9VLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQXNDWCwrQ0FBUSxFQUE5QztBQUFBLE1BQU9ZLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQWtDYiwrQ0FBUSxFQUExQztBQUFBLE1BQU9jLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQWdDZiwrQ0FBUSxFQUF4QztBQUFBLE1BQU9nQixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUF3QmpCLCtDQUFRLEVBQWhDO0FBQUEsTUFBT2tCLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG1CQUFnQ25CLCtDQUFRLEVBQXhDO0FBQUEsTUFBT29CLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQXNDckIsK0NBQVEsQ0FBQyxDQUFELENBQTlDO0FBQUEsTUFBT3NCLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0Esb0JBQXdCdkIsK0NBQVEsRUFBaEM7QUFBQSxNQUFPd0IsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0Esb0JBQXdCekIsK0NBQVEsRUFBaEM7QUFBQSxNQUFPMEIsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0Esb0JBQXNDM0IsK0NBQVEsRUFBOUM7QUFBQSxNQUFPNEIsV0FBUDtB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RCxJQURILFFBQ1dFLE9BRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBT0UsOERBQUMsdURBQUQ7QUFDRSxZQUFJLEVBQUVRLElBRFI7QUFFRSxtQkFBVyxFQUFFTixXQUZmO0FBR0UsWUFBSSxFQUFFWSxJQUhSO0FBSUUsbUJBQVcsRUFBRUYsV0FKZjtBQUtFLFlBQUksRUFBRUksSUFMUjtBQU1FLGlCQUFTLEVBQUVaLFNBTmI7QUFPRSxnQkFBUSxFQUFFRSxRQVBaO0FBUUUsZ0JBQVEsRUFBRUk7QUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFrQkUsOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3QkQ7O0dBMUx1QmY7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvd2VhdGhlckFwcC9XZWF0aGVyQXBwLmpzP2U0ZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IE1haW5XaW5kb3cgZnJvbSBcIi4uL2xheW91dC9NYWluV2luZG93XCI7XG5pbXBvcnQgRm9yZWNhc3QgZnJvbSBcIi4uL2xheW91dC9Gb3JlY2FzdFwiO1xuXG5jb25zdCBBUElfS0VZID0gXCI0YTY0ZWQwOWQwNzNjZGFjMjMxYzUzZTFhM2I2MjE4MVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIC8vIEdldCBXZWF0aGVyIFN0YXRlXG4gIGNvbnN0IFtiYWNrZ3JvdW5kLCBzZXRCYWNrZ3JvdW5kXSA9IHVzZVN0YXRlKFwic2t5LWdyYWRpZW50LTExXCIpO1xuICBjb25zdCBbY2l0eSwgc2V0Q2l0eV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbY291bnRyeSwgc2V0Q291bnRyeV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtmZWVsc2xpa2UsIHNldEZlZWxzbGlrZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbaHVtaWRpdHksIHNldEh1bWlkaXR5XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtpY29uLCBzZXRJY29uXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtwcmVzc3VyZSwgc2V0UHJlc3N1cmVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3RlbXBlcmF0dXJlLCBzZXRUZW1wZXJhdHVyZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3dpbmQsIHNldFdpbmRdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3dpbmREZWdyZWVzLCBzZXRXaW5kRGVncmVlc10gPSB1c2VTdGF0ZSgpO1xuXG4gIC8vIEdldCBGaXZlIERheSBGb3JlY2FzdFxuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKGUpID0+IHtcbiAgICAgIGNvbnN0IGFwaV9jYWxsID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPXN5ZG5leSxhdSZhcHBpZD0ke0FQSV9LRVl9JnVuaXRzPW1ldHJpY2BcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGlfY2FsbC5qc29uKCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICBzZXRCYWNrZ3JvdW5kKGJhY2tncm91bmRDb252ZXJ0ZXIoZGF0YS53ZWF0aGVyWzBdLmljb24pKTtcbiAgICAgIHNldENpdHkoZGF0YS5uYW1lKTtcbiAgICAgIHNldENvdW50cnkoZGF0YS5zeXMuY291bnRyeSk7XG4gICAgICBzZXREZXNjcmlwdGlvbihkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24pO1xuICAgICAgc2V0RmVlbHNsaWtlKGRhdGEubWFpbi5mZWVsc19saWtlKTtcbiAgICAgIHNldEh1bWlkaXR5KGRhdGEubWFpbi5odW1pZGl0eSk7XG4gICAgICBzZXRJY29uKGljb25Db252ZXJ0ZXIoZGF0YS53ZWF0aGVyWzBdLmljb24pKTtcbiAgICAgIHNldFByZXNzdXJlKGRhdGEubWFpbi5wcmVzc3VyZSk7XG4gICAgICBzZXRUZW1wZXJhdHVyZShNYXRoLmZsb29yKGRhdGEubWFpbi50ZW1wKSk7XG4gICAgICBzZXRUaW1lKHRpbWVDb252ZXJ0ZXIoZGF0YS5kdCkpO1xuICAgICAgc2V0V2luZChkYXRhLndpbmQuc3BlZWQpO1xuICAgICAgc2V0V2luZERlZ3JlZXMoZGF0YS53aW5kLmRlZyk7XG4gICAgfTtcbiAgICBnZXRXZWF0aGVyKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBiYWNrZ3JvdW5kQ29udmVydGVyID0gKGljb24pID0+IHtcbiAgICBjb25zdCB3ZWF0aGVyQmFja2dyb3VuZCA9IHtcbiAgICAgIFwiMDFkXCI6IFwic2t5LWdyYWRpZW50LTExXCIsXG4gICAgICBcIjAyZFwiOiBcInNreS1ncmFkaWVudC0wOVwiLFxuICAgICAgXCIwM2RcIjogXCJza3ktZ3JhZGllbnQtMTNcIixcbiAgICAgIFwiMDRkXCI6IFwic2t5LWdyYWRpZW50LTE0XCIsXG4gICAgICBcIjA5ZFwiOiBcInNreS1ncmFkaWVudC0xNFwiLFxuICAgICAgXCIxMGRcIjogXCJza3ktZ3JhZGllbnQtMTVcIixcbiAgICAgIFwiMTFkXCI6IFwic2t5LWdyYWRpZW50LTE1XCIsXG4gICAgICBcIjEzZFwiOiBcInNreS1ncmFkaWVudC0wOVwiLFxuICAgICAgXCI1MGRcIjogXCJza3ktZ3JhZGllbnQtMDhcIixcbiAgICAgIFwiMDFuXCI6IFwic2t5LWdyYWRpZW50LTA1XCIsXG4gICAgICBcIjAyblwiOiBcInNreS1ncmFkaWVudC0yMVwiLFxuICAgICAgXCIwM25cIjogXCJza3ktZ3JhZGllbnQtMDNcIixcbiAgICAgIFwiMDRuXCI6IFwic2t5LWdyYWRpZW50LTAzXCIsXG4gICAgICBcIjA5blwiOiBcInNreS1ncmFkaWVudC0yMlwiLFxuICAgICAgXCIxMG5cIjogXCJza3ktZ3JhZGllbnQtMDNcIixcbiAgICAgIFwiMTFuXCI6IFwic2t5LWdyYWRpZW50LTIxXCIsXG4gICAgICBcIjEzblwiOiBcInNreS1ncmFkaWVudC0wMlwiLFxuICAgICAgXCI1MG5cIjogXCJza3ktZ3JhZGllbnQtMjBcIixcbiAgICB9O1xuXG4gICAgcmV0dXJuIHdlYXRoZXJCYWNrZ3JvdW5kW2ljb25dO1xuICB9O1xuXG4gIGNvbnN0IGljb25Db252ZXJ0ZXIgPSAoaWNvbikgPT4ge1xuICAgIGNvbnN0IGNvbnZlcnRJY29uID0ge1xuICAgICAgXCIwMWRcIjogXCJXaURheVN1bm55XCIsXG4gICAgICBcIjAyZFwiOiBcIldpRGF5U3VubnlPdmVyY2FzdFwiLFxuICAgICAgXCIwM2RcIjogXCJXaUNsb3VkXCIsXG4gICAgICBcIjA0ZFwiOiBcIldpRGF5Q2xvdWR5XCIsXG4gICAgICBcIjA5ZFwiOiBcIldpUmFpblwiLFxuICAgICAgXCIxMGRcIjogXCJXaURheVNob3dlcnNcIixcbiAgICAgIFwiMTFkXCI6IFwiV2lUaHVuZGVyc3Rvcm1cIixcbiAgICAgIFwiMTNkXCI6IFwiV2lTbm93XCIsXG4gICAgICBcIjUwZFwiOiBcIldpRm9nXCIsXG4gICAgICBcIjAxblwiOiBcIldpTmlnaHRDbGVhclwiLFxuICAgICAgXCIwMm5cIjogXCJXaU5pZ2h0UGFydGx5Q2xvdWR5XCIsXG4gICAgICBcIjAzblwiOiBcIldpQ2xvdWRcIixcbiAgICAgIFwiMDRuXCI6IFwiV2lOaWdodENsb3VkeVwiLFxuICAgICAgXCIwOW5cIjogXCJXaVJhaW5cIixcbiAgICAgIFwiMTBuXCI6IFwiV2lOaWdodFNob3dlcnNcIixcbiAgICAgIFwiMTFuXCI6IFwiV2lUaHVuZGVyc3Rvcm1cIixcbiAgICAgIFwiMTNuXCI6IFwiV2lTbm93XCIsXG4gICAgICBcIjUwblwiOiBcIldpRm9nXCIsXG4gICAgfTtcbiAgICByZXR1cm4gY29udmVydEljb25baWNvbl07XG4gIH07XG5cbiAgLy8gY29uc3QgaWNvbkNvbnZlcnRlciA9IChpY29uKSA9PiB7XG4gIC8vICAgY29uc3QgY29udmVydEljb24gPSB7XG4gIC8vICAgICBcIjAxZFwiOiBcInN1bi1zb2xpZFwiLFxuICAvLyAgICAgXCIwMmRcIjogXCJjbG91ZC1zdW4tc29saWRcIixcbiAgLy8gICAgIFwiMDNkXCI6IFwiY2xvdWQtc29saWRcIixcbiAgLy8gICAgIFwiMDRkXCI6IFwiY2xvdWQtc29saWRcIixcbiAgLy8gICAgIFwiMDlkXCI6IFwiY2xvdWQtc3VuLXJhaW4tc29saWRcIixcbiAgLy8gICAgIFwiMTBkXCI6IFwiY2xvdWQtc2hvd2Vycy1oZWF2eS1zb2xpZFwiLFxuICAvLyAgICAgXCIxMWRcIjogXCJwb28tc3Rvcm0tc29saWRcIixcbiAgLy8gICAgIFwiMTNkXCI6IFwic25vd2ZsYWtlLXNvbGlkXCIsXG4gIC8vICAgICBcIjUwZFwiOiBcInNtb2ctc29saWRcIixcbiAgLy8gICAgIFwiMDFuXCI6IFwibW9vbi1zb2xpZFwiLFxuICAvLyAgICAgXCIwMm5cIjogXCJjbG91ZC1tb29uLXNvbGlkXCIsXG4gIC8vICAgICBcIjAzblwiOiBcImNsb3VkLXNvbGlkXCIsXG4gIC8vICAgICBcIjA0blwiOiBcImNsb3VkLXNvbGlkXCIsXG4gIC8vICAgICBcIjA5blwiOiBcImNsb3VkLW1vb24tcmFpbi1zb2xpZFwiLFxuICAvLyAgICAgXCIxMG5cIjogXCJjbG91ZC1zaG93ZXJzLWhlYXZ5LXNvbGlkXCIsXG4gIC8vICAgICBcIjExblwiOiBcInBvby1zdG9ybS1zb2xpZFwiLFxuICAvLyAgICAgXCIxM25cIjogXCJzbm93Zmxha2Utc29saWRcIixcbiAgLy8gICAgIFwiNTBuXCI6IFwic21vZy1zb2xpZFwiLFxuICAvLyAgIH07XG4gIC8vICAgcmV0dXJuIGNvbnZlcnRJY29uW2ljb25dO1xuICAvLyB9O1xuXG4gIGNvbnN0IHRpbWVDb252ZXJ0ZXIgPSAoVU5JWF90aW1lc3RhbXApID0+IHtcbiAgICBsZXQgYSA9IG5ldyBEYXRlKFVOSVhfdGltZXN0YW1wICogMTAwMCk7XG4gICAgY29uc3QgbW9udGhzID0gW1xuICAgICAgXCJKYW5cIixcbiAgICAgIFwiRmViXCIsXG4gICAgICBcIk1hclwiLFxuICAgICAgXCJBcHJcIixcbiAgICAgIFwiTWF5XCIsXG4gICAgICBcIkp1blwiLFxuICAgICAgXCJKdWxcIixcbiAgICAgIFwiQXVnXCIsXG4gICAgICBcIlNlcFwiLFxuICAgICAgXCJPY3RcIixcbiAgICAgIFwiTm92XCIsXG4gICAgICBcIkRlY1wiLFxuICAgIF07XG4gICAgbGV0IHllYXIgPSBhLmdldEZ1bGxZZWFyKCk7XG4gICAgbGV0IG1vbnRoID0gbW9udGhzW2EuZ2V0TW9udGgoKV07XG4gICAgbGV0IGRheSA9IGEuZ2V0RGF0ZSgpO1xuICAgIGxldCBob3VyID0gYS5nZXRIb3VycygpO1xuICAgIGxldCBtaW4gPSAoXCIwXCIgKyBhLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpO1xuICAgIC8vIGxldCBzZWMgPSBhLmdldFNlY29uZHMoKTtcbiAgICAvLyBsZXQgdGltZSA9IGRheSArIFwiIFwiICsgbW9udGggKyBcIiBcIiArIHllYXIgKyBcIiBcIiArIGhvdXIgKyBcIjpcIiArIG1pbjtcbiAgICBsZXQgdGltZSA9IGRheSArIFwiIFwiICsgbW9udGggKyBcIiBcIiArIHllYXI7XG5cbiAgICByZXR1cm4gdGltZTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldEZpdmVEYXkgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgY29uc3QgYXBpX2NhbGwgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPXN5ZG5leSxuc3cmYXBwaWQ9JHtBUElfS0VZfWBcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGZpdmVEYXlEYXRhID0gYXdhaXQgYXBpX2NhbGwuanNvbigpO1xuXG4gICAgICBjb25zb2xlLmxvZyhcIlRoaXMgZmlyc3QgdGhpbmcgcmFuXCIsIGZpdmVEYXlEYXRhLmxpc3QpO1xuXG4gICAgICBzZXRMaXN0KGZpdmVEYXlEYXRhLmxpc3QpO1xuXG4gICAgICBjb25zb2xlLmxvZyhcIlRoaXMgc2Vjb25kIHRoaW5nIHJhblwiLCBsaXN0KTtcbiAgICB9O1xuICAgIGdldEZpdmVEYXkoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VhdGhlci1hcHBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWF0aGVyLWFwcF9fdGl0bGVcIj5cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICB7Y2l0eX0sIHtjb3VudHJ5fVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxNYWluV2luZG93XG4gICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgICAgdGltZT17dGltZX1cbiAgICAgICAgICB0ZW1wZXJhdHVyZT17dGVtcGVyYXR1cmV9XG4gICAgICAgICAgd2luZD17d2luZH1cbiAgICAgICAgICBmZWVsc2xpa2U9e2ZlZWxzbGlrZX1cbiAgICAgICAgICBodW1pZGl0eT17aHVtaWRpdHl9XG4gICAgICAgICAgcHJlc3N1cmU9e3ByZXNzdXJlfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxGb3JlY2FzdCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1haW5XaW5kb3ciLCJGb3JlY2FzdCIsIkFQSV9LRVkiLCJBcHAiLCJiYWNrZ3JvdW5kIiwic2V0QmFja2dyb3VuZCIsImNpdHkiLCJzZXRDaXR5IiwiY291bnRyeSIsInNldENvdW50cnkiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiZmVlbHNsaWtlIiwic2V0RmVlbHNsaWtlIiwiaHVtaWRpdHkiLCJzZXRIdW1pZGl0eSIsImljb24iLCJzZXRJY29uIiwicHJlc3N1cmUiLCJzZXRQcmVzc3VyZSIsInRlbXBlcmF0dXJlIiwic2V0VGVtcGVyYXR1cmUiLCJ0aW1lIiwic2V0VGltZSIsIndpbmQiLCJzZXRXaW5kIiwid2luZERlZ3JlZXMiLCJzZXRXaW5kRGVncmVlcyIsImxpc3QiLCJzZXRMaXN0IiwiZ2V0V2VhdGhlciIsImUiLCJmZXRjaCIsImFwaV9jYWxsIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiYmFja2dyb3VuZENvbnZlcnRlciIsIndlYXRoZXIiLCJuYW1lIiwic3lzIiwibWFpbiIsImZlZWxzX2xpa2UiLCJpY29uQ29udmVydGVyIiwiTWF0aCIsImZsb29yIiwidGVtcCIsInRpbWVDb252ZXJ0ZXIiLCJkdCIsInNwZWVkIiwiZGVnIiwid2VhdGhlckJhY2tncm91bmQiLCJjb252ZXJ0SWNvbiIsIlVOSVhfdGltZXN0YW1wIiwiYSIsIkRhdGUiLCJtb250aHMiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImhvdXIiLCJnZXRIb3VycyIsIm1pbiIsImdldE1pbnV0ZXMiLCJzbGljZSIsImdldEZpdmVEYXkiLCJmaXZlRGF5RGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/weatherApp/WeatherApp.js\n");

/***/ })

});