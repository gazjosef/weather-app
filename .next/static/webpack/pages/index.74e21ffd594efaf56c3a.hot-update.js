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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _layout_MainWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/MainWindow */ \"./components/layout/MainWindow.js\");\n/* harmony import */ var _layout_Forecast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/Forecast */ \"./components/layout/Forecast.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/garethhind/Documents/Github/weather-app/components/weatherApp/WeatherApp.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar API_KEY = \"4a64ed09d073cdac231c53e1a3b62181\";\nfunction App() {\n  _s();\n\n  // Get Weather State\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"sky-gradient-11\"),\n      background = _useState[0],\n      setBackground = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      city = _useState2[0],\n      setCity = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      country = _useState3[0],\n      setCountry = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      description = _useState4[0],\n      setDescription = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      feelslike = _useState5[0],\n      setFeelslike = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      humidity = _useState6[0],\n      setHumidity = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      icon = _useState7[0],\n      setIcon = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      pressure = _useState8[0],\n      setPressure = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      temperature = _useState9[0],\n      setTemperature = _useState9[1];\n\n  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      time = _useState10[0],\n      setTime = _useState10[1];\n\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      wind = _useState11[0],\n      setWind = _useState11[1];\n\n  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      windDegrees = _useState12[0],\n      setWindDegrees = _useState12[1]; // Get Five Day Forecast\n\n\n  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      fiveDay = _useState13[0],\n      setFiveDay = _useState13[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var getWeather = /*#__PURE__*/function () {\n      var _ref = (0,_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {\n        var api_call, data;\n        return _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch(\"https://api.openweathermap.org/data/2.5/weather?q=sydney,au&appid=\".concat(API_KEY, \"&units=metric\"));\n\n              case 2:\n                api_call = _context.sent;\n                _context.next = 5;\n                return api_call.json();\n\n              case 5:\n                data = _context.sent;\n                // console.log(data);\n                setBackground(backgroundConverter(data.weather[0].icon));\n                setCity(data.name);\n                setCountry(data.sys.country);\n                setDescription(data.weather[0].description);\n                setFeelslike(data.main.feels_like);\n                setHumidity(data.main.humidity);\n                setIcon(iconConverter(data.weather[0].icon));\n                setPressure(data.main.pressure);\n                setTemperature(Math.floor(data.main.temp));\n                setTime(timeConverter(data.dt));\n                setWind(data.wind.speed);\n                setWindDegrees(data.wind.deg);\n\n              case 18:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getWeather(_x) {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    getWeather();\n  }, []);\n\n  var backgroundConverter = function backgroundConverter(icon) {\n    var weatherBackground = {\n      \"01d\": \"sky-gradient-11\",\n      \"02d\": \"sky-gradient-09\",\n      \"03d\": \"sky-gradient-13\",\n      \"04d\": \"sky-gradient-14\",\n      \"09d\": \"sky-gradient-14\",\n      \"10d\": \"sky-gradient-15\",\n      \"11d\": \"sky-gradient-15\",\n      \"13d\": \"sky-gradient-09\",\n      \"50d\": \"sky-gradient-08\",\n      \"01n\": \"sky-gradient-05\",\n      \"02n\": \"sky-gradient-21\",\n      \"03n\": \"sky-gradient-03\",\n      \"04n\": \"sky-gradient-03\",\n      \"09n\": \"sky-gradient-22\",\n      \"10n\": \"sky-gradient-03\",\n      \"11n\": \"sky-gradient-21\",\n      \"13n\": \"sky-gradient-02\",\n      \"50n\": \"sky-gradient-20\"\n    };\n    return weatherBackground[icon];\n  };\n\n  var iconConverter = function iconConverter(icon) {\n    var convertIcon = {\n      \"01d\": \"WiDaySunny\",\n      \"02d\": \"WiDaySunnyOvercast\",\n      \"03d\": \"WiCloud\",\n      \"04d\": \"WiDayCloudy\",\n      \"09d\": \"WiRain\",\n      \"10d\": \"WiDayShowers\",\n      \"11d\": \"WiThunderstorm\",\n      \"13d\": \"WiSnow\",\n      \"50d\": \"WiFog\",\n      \"01n\": \"WiNightClear\",\n      \"02n\": \"WiNightPartlyCloudy\",\n      \"03n\": \"WiCloud\",\n      \"04n\": \"WiNightCloudy\",\n      \"09n\": \"WiRain\",\n      \"10n\": \"WiNightShowers\",\n      \"11n\": \"WiThunderstorm\",\n      \"13n\": \"WiSnow\",\n      \"50n\": \"WiFog\"\n    };\n    return convertIcon[icon];\n  };\n\n  var timeConverter = function timeConverter(UNIX_timestamp) {\n    var a = new Date(UNIX_timestamp * 1000);\n    var months = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"];\n    var year = a.getFullYear();\n    var month = months[a.getMonth()];\n    var day = a.getDate();\n    var hour = a.getHours();\n    var min = (\"0\" + a.getMinutes()).slice(-2); // let sec = a.getSeconds();\n    // let time = day + \" \" + month + \" \" + year + \" \" + hour + \":\" + min;\n\n    var time = day + \" \" + month + \" \" + year;\n    return time;\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var getFiveDay = /*#__PURE__*/function () {\n      var _ref2 = (0,_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(e) {\n        var api_call, fiveDayData;\n        return _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return fetch(\"https://api.openweathermap.org/data/2.5/forecast?q=sydney,nsw&appid=\".concat(API_KEY));\n\n              case 2:\n                api_call = _context2.sent;\n                _context2.next = 5;\n                return api_call.json();\n\n              case 5:\n                fiveDayData = _context2.sent;\n                console.log(\"This first thing ran\", fiveDayData.list);\n                setFiveDay(fiveDayData.list);\n                console.log(\"This second thing ran\", fiveDay);\n\n              case 9:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function getFiveDay(_x2) {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    getFiveDay();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"screen\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"weather-app\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"weather-app__title\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h1\", {\n          children: [city, \", \", country]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 150,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 149,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_layout_MainWindow__WEBPACK_IMPORTED_MODULE_3__.default, {\n        icon: icon,\n        description: description,\n        time: time,\n        temperature: temperature,\n        wind: wind,\n        feelslike: feelslike,\n        humidity: humidity,\n        pressure: pressure\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 155,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_layout_Forecast__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 166,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 147,\n    columnNumber: 5\n  }, this);\n}\n\n_s(App, \"gRsdaWJ6X/cWrBmX4q9OwWHfoiA=\");\n\n_c = App;\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3dlYXRoZXJBcHAvV2VhdGhlckFwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxJQUFNSyxPQUFPLEdBQUcsa0NBQWhCO0FBRWUsU0FBU0MsR0FBVCxHQUFlO0FBQUE7O0FBQzVCO0FBQ0Esa0JBQW9DTCwrQ0FBUSxDQUFDLGlCQUFELENBQTVDO0FBQUEsTUFBT00sVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBd0JQLCtDQUFRLEVBQWhDO0FBQUEsTUFBT1EsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQThCVCwrQ0FBUSxFQUF0QztBQUFBLE1BQU9VLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQXNDWCwrQ0FBUSxFQUE5QztBQUFBLE1BQU9ZLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQWtDYiwrQ0FBUSxFQUExQztBQUFBLE1BQU9jLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQWdDZiwrQ0FBUSxFQUF4QztBQUFBLE1BQU9nQixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUF3QmpCLCtDQUFRLEVBQWhDO0FBQUEsTUFBT2tCLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG1CQUFnQ25CLCtDQUFRLEVBQXhDO0FBQUEsTUFBT29CLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQXNDckIsK0NBQVEsQ0FBQyxDQUFELENBQTlDO0FBQUEsTUFBT3NCLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0Esb0JBQXdCdkIsK0NBQVEsRUFBaEM7QUFBQSxNQUFPd0IsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0Esb0JBQXdCekIsK0NBQVEsRUFBaEM7QUFBQSxNQUFPMEIsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0Esb0JBQXNDM0IsK0NBQVEsRUFBOUM7QUFBQSxNQUFPNEIsV0FBUDtB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bUJBQVcsRUFBRUYsV0FKZjtBQUtFLFlBQUksRUFBRUksSUFMUjtBQU1FLGlCQUFTLEVBQUVaLFNBTmI7QUFPRSxnQkFBUSxFQUFFRSxRQVBaO0FBUUUsZ0JBQVEsRUFBRUk7QUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFrQkUsOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3QkQ7O0dBbEt1QmY7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvd2VhdGhlckFwcC9XZWF0aGVyQXBwLmpzP2U0ZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IE1haW5XaW5kb3cgZnJvbSBcIi4uL2xheW91dC9NYWluV2luZG93XCI7XG5pbXBvcnQgRm9yZWNhc3QgZnJvbSBcIi4uL2xheW91dC9Gb3JlY2FzdFwiO1xuXG5jb25zdCBBUElfS0VZID0gXCI0YTY0ZWQwOWQwNzNjZGFjMjMxYzUzZTFhM2I2MjE4MVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIC8vIEdldCBXZWF0aGVyIFN0YXRlXG4gIGNvbnN0IFtiYWNrZ3JvdW5kLCBzZXRCYWNrZ3JvdW5kXSA9IHVzZVN0YXRlKFwic2t5LWdyYWRpZW50LTExXCIpO1xuICBjb25zdCBbY2l0eSwgc2V0Q2l0eV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbY291bnRyeSwgc2V0Q291bnRyeV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtmZWVsc2xpa2UsIHNldEZlZWxzbGlrZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbaHVtaWRpdHksIHNldEh1bWlkaXR5XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtpY29uLCBzZXRJY29uXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtwcmVzc3VyZSwgc2V0UHJlc3N1cmVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3RlbXBlcmF0dXJlLCBzZXRUZW1wZXJhdHVyZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3dpbmQsIHNldFdpbmRdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3dpbmREZWdyZWVzLCBzZXRXaW5kRGVncmVlc10gPSB1c2VTdGF0ZSgpO1xuXG4gIC8vIEdldCBGaXZlIERheSBGb3JlY2FzdFxuICBjb25zdCBbZml2ZURheSwgc2V0Rml2ZURheV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKGUpID0+IHtcbiAgICAgIGNvbnN0IGFwaV9jYWxsID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPXN5ZG5leSxhdSZhcHBpZD0ke0FQSV9LRVl9JnVuaXRzPW1ldHJpY2BcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGlfY2FsbC5qc29uKCk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICBzZXRCYWNrZ3JvdW5kKGJhY2tncm91bmRDb252ZXJ0ZXIoZGF0YS53ZWF0aGVyWzBdLmljb24pKTtcbiAgICAgIHNldENpdHkoZGF0YS5uYW1lKTtcbiAgICAgIHNldENvdW50cnkoZGF0YS5zeXMuY291bnRyeSk7XG4gICAgICBzZXREZXNjcmlwdGlvbihkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24pO1xuICAgICAgc2V0RmVlbHNsaWtlKGRhdGEubWFpbi5mZWVsc19saWtlKTtcbiAgICAgIHNldEh1bWlkaXR5KGRhdGEubWFpbi5odW1pZGl0eSk7XG4gICAgICBzZXRJY29uKGljb25Db252ZXJ0ZXIoZGF0YS53ZWF0aGVyWzBdLmljb24pKTtcbiAgICAgIHNldFByZXNzdXJlKGRhdGEubWFpbi5wcmVzc3VyZSk7XG4gICAgICBzZXRUZW1wZXJhdHVyZShNYXRoLmZsb29yKGRhdGEubWFpbi50ZW1wKSk7XG4gICAgICBzZXRUaW1lKHRpbWVDb252ZXJ0ZXIoZGF0YS5kdCkpO1xuICAgICAgc2V0V2luZChkYXRhLndpbmQuc3BlZWQpO1xuICAgICAgc2V0V2luZERlZ3JlZXMoZGF0YS53aW5kLmRlZyk7XG4gICAgfTtcbiAgICBnZXRXZWF0aGVyKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBiYWNrZ3JvdW5kQ29udmVydGVyID0gKGljb24pID0+IHtcbiAgICBjb25zdCB3ZWF0aGVyQmFja2dyb3VuZCA9IHtcbiAgICAgIFwiMDFkXCI6IFwic2t5LWdyYWRpZW50LTExXCIsXG4gICAgICBcIjAyZFwiOiBcInNreS1ncmFkaWVudC0wOVwiLFxuICAgICAgXCIwM2RcIjogXCJza3ktZ3JhZGllbnQtMTNcIixcbiAgICAgIFwiMDRkXCI6IFwic2t5LWdyYWRpZW50LTE0XCIsXG4gICAgICBcIjA5ZFwiOiBcInNreS1ncmFkaWVudC0xNFwiLFxuICAgICAgXCIxMGRcIjogXCJza3ktZ3JhZGllbnQtMTVcIixcbiAgICAgIFwiMTFkXCI6IFwic2t5LWdyYWRpZW50LTE1XCIsXG4gICAgICBcIjEzZFwiOiBcInNreS1ncmFkaWVudC0wOVwiLFxuICAgICAgXCI1MGRcIjogXCJza3ktZ3JhZGllbnQtMDhcIixcbiAgICAgIFwiMDFuXCI6IFwic2t5LWdyYWRpZW50LTA1XCIsXG4gICAgICBcIjAyblwiOiBcInNreS1ncmFkaWVudC0yMVwiLFxuICAgICAgXCIwM25cIjogXCJza3ktZ3JhZGllbnQtMDNcIixcbiAgICAgIFwiMDRuXCI6IFwic2t5LWdyYWRpZW50LTAzXCIsXG4gICAgICBcIjA5blwiOiBcInNreS1ncmFkaWVudC0yMlwiLFxuICAgICAgXCIxMG5cIjogXCJza3ktZ3JhZGllbnQtMDNcIixcbiAgICAgIFwiMTFuXCI6IFwic2t5LWdyYWRpZW50LTIxXCIsXG4gICAgICBcIjEzblwiOiBcInNreS1ncmFkaWVudC0wMlwiLFxuICAgICAgXCI1MG5cIjogXCJza3ktZ3JhZGllbnQtMjBcIixcbiAgICB9O1xuXG4gICAgcmV0dXJuIHdlYXRoZXJCYWNrZ3JvdW5kW2ljb25dO1xuICB9O1xuXG4gIGNvbnN0IGljb25Db252ZXJ0ZXIgPSAoaWNvbikgPT4ge1xuICAgIGNvbnN0IGNvbnZlcnRJY29uID0ge1xuICAgICAgXCIwMWRcIjogXCJXaURheVN1bm55XCIsXG4gICAgICBcIjAyZFwiOiBcIldpRGF5U3VubnlPdmVyY2FzdFwiLFxuICAgICAgXCIwM2RcIjogXCJXaUNsb3VkXCIsXG4gICAgICBcIjA0ZFwiOiBcIldpRGF5Q2xvdWR5XCIsXG4gICAgICBcIjA5ZFwiOiBcIldpUmFpblwiLFxuICAgICAgXCIxMGRcIjogXCJXaURheVNob3dlcnNcIixcbiAgICAgIFwiMTFkXCI6IFwiV2lUaHVuZGVyc3Rvcm1cIixcbiAgICAgIFwiMTNkXCI6IFwiV2lTbm93XCIsXG4gICAgICBcIjUwZFwiOiBcIldpRm9nXCIsXG4gICAgICBcIjAxblwiOiBcIldpTmlnaHRDbGVhclwiLFxuICAgICAgXCIwMm5cIjogXCJXaU5pZ2h0UGFydGx5Q2xvdWR5XCIsXG4gICAgICBcIjAzblwiOiBcIldpQ2xvdWRcIixcbiAgICAgIFwiMDRuXCI6IFwiV2lOaWdodENsb3VkeVwiLFxuICAgICAgXCIwOW5cIjogXCJXaVJhaW5cIixcbiAgICAgIFwiMTBuXCI6IFwiV2lOaWdodFNob3dlcnNcIixcbiAgICAgIFwiMTFuXCI6IFwiV2lUaHVuZGVyc3Rvcm1cIixcbiAgICAgIFwiMTNuXCI6IFwiV2lTbm93XCIsXG4gICAgICBcIjUwblwiOiBcIldpRm9nXCIsXG4gICAgfTtcbiAgICByZXR1cm4gY29udmVydEljb25baWNvbl07XG4gIH07XG5cbiAgY29uc3QgdGltZUNvbnZlcnRlciA9IChVTklYX3RpbWVzdGFtcCkgPT4ge1xuICAgIGxldCBhID0gbmV3IERhdGUoVU5JWF90aW1lc3RhbXAgKiAxMDAwKTtcbiAgICBjb25zdCBtb250aHMgPSBbXG4gICAgICBcIkphblwiLFxuICAgICAgXCJGZWJcIixcbiAgICAgIFwiTWFyXCIsXG4gICAgICBcIkFwclwiLFxuICAgICAgXCJNYXlcIixcbiAgICAgIFwiSnVuXCIsXG4gICAgICBcIkp1bFwiLFxuICAgICAgXCJBdWdcIixcbiAgICAgIFwiU2VwXCIsXG4gICAgICBcIk9jdFwiLFxuICAgICAgXCJOb3ZcIixcbiAgICAgIFwiRGVjXCIsXG4gICAgXTtcbiAgICBsZXQgeWVhciA9IGEuZ2V0RnVsbFllYXIoKTtcbiAgICBsZXQgbW9udGggPSBtb250aHNbYS5nZXRNb250aCgpXTtcbiAgICBsZXQgZGF5ID0gYS5nZXREYXRlKCk7XG4gICAgbGV0IGhvdXIgPSBhLmdldEhvdXJzKCk7XG4gICAgbGV0IG1pbiA9IChcIjBcIiArIGEuZ2V0TWludXRlcygpKS5zbGljZSgtMik7XG4gICAgLy8gbGV0IHNlYyA9IGEuZ2V0U2Vjb25kcygpO1xuICAgIC8vIGxldCB0aW1lID0gZGF5ICsgXCIgXCIgKyBtb250aCArIFwiIFwiICsgeWVhciArIFwiIFwiICsgaG91ciArIFwiOlwiICsgbWluO1xuICAgIGxldCB0aW1lID0gZGF5ICsgXCIgXCIgKyBtb250aCArIFwiIFwiICsgeWVhcjtcblxuICAgIHJldHVybiB0aW1lO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0Rml2ZURheSA9IGFzeW5jIChlKSA9PiB7XG4gICAgICBjb25zdCBhcGlfY2FsbCA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9c3lkbmV5LG5zdyZhcHBpZD0ke0FQSV9LRVl9YFxuICAgICAgKTtcblxuICAgICAgY29uc3QgZml2ZURheURhdGEgPSBhd2FpdCBhcGlfY2FsbC5qc29uKCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBmaXJzdCB0aGluZyByYW5cIiwgZml2ZURheURhdGEubGlzdCk7XG5cbiAgICAgIHNldEZpdmVEYXkoZml2ZURheURhdGEubGlzdCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBzZWNvbmQgdGhpbmcgcmFuXCIsIGZpdmVEYXkpO1xuICAgIH07XG4gICAgZ2V0Rml2ZURheSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWF0aGVyLWFwcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlYXRoZXItYXBwX190aXRsZVwiPlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIHtjaXR5fSwge2NvdW50cnl9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPE1haW5XaW5kb3dcbiAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICB0aW1lPXt0aW1lfVxuICAgICAgICAgIHRlbXBlcmF0dXJlPXt0ZW1wZXJhdHVyZX1cbiAgICAgICAgICB3aW5kPXt3aW5kfVxuICAgICAgICAgIGZlZWxzbGlrZT17ZmVlbHNsaWtlfVxuICAgICAgICAgIGh1bWlkaXR5PXtodW1pZGl0eX1cbiAgICAgICAgICBwcmVzc3VyZT17cHJlc3N1cmV9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPEZvcmVjYXN0IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTWFpbldpbmRvdyIsIkZvcmVjYXN0IiwiQVBJX0tFWSIsIkFwcCIsImJhY2tncm91bmQiLCJzZXRCYWNrZ3JvdW5kIiwiY2l0eSIsInNldENpdHkiLCJjb3VudHJ5Iiwic2V0Q291bnRyeSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJmZWVsc2xpa2UiLCJzZXRGZWVsc2xpa2UiLCJodW1pZGl0eSIsInNldEh1bWlkaXR5IiwiaWNvbiIsInNldEljb24iLCJwcmVzc3VyZSIsInNldFByZXNzdXJlIiwidGVtcGVyYXR1cmUiLCJzZXRUZW1wZXJhdHVyZSIsInRpbWUiLCJzZXRUaW1lIiwid2luZCIsInNldFdpbmQiLCJ3aW5kRGVncmVlcyIsInNldFdpbmREZWdyZWVzIiwiZml2ZURheSIsInNldEZpdmVEYXkiLCJnZXRXZWF0aGVyIiwiZSIsImZldGNoIiwiYXBpX2NhbGwiLCJqc29uIiwiZGF0YSIsImJhY2tncm91bmRDb252ZXJ0ZXIiLCJ3ZWF0aGVyIiwibmFtZSIsInN5cyIsIm1haW4iLCJmZWVsc19saWtlIiwiaWNvbkNvbnZlcnRlciIsIk1hdGgiLCJmbG9vciIsInRlbXAiLCJ0aW1lQ29udmVydGVyIiwiZHQiLCJzcGVlZCIsImRlZyIsIndlYXRoZXJCYWNrZ3JvdW5kIiwiY29udmVydEljb24iLCJVTklYX3RpbWVzdGFtcCIsImEiLCJEYXRlIiwibW9udGhzIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJob3VyIiwiZ2V0SG91cnMiLCJtaW4iLCJnZXRNaW51dGVzIiwic2xpY2UiLCJnZXRGaXZlRGF5IiwiZml2ZURheURhdGEiLCJjb25zb2xlIiwibG9nIiwibGlzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/weatherApp/WeatherApp.js\n");

/***/ })

});