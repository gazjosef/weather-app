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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _layout_MainWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/MainWindow */ \"./components/layout/MainWindow.js\");\n/* harmony import */ var _layout_Forecast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/Forecast */ \"./components/layout/Forecast.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/garethhind/Documents/Github/weather-app/components/weatherApp/WeatherApp.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar API_KEY = \"4a64ed09d073cdac231c53e1a3b62181\";\nfunction App() {\n  _s();\n\n  // Get Weather State\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"sky-gradient-11\"),\n      background = _useState[0],\n      setBackground = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      city = _useState2[0],\n      setCity = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      country = _useState3[0],\n      setCountry = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      date = _useState4[0],\n      setDate = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      description = _useState5[0],\n      setDescription = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      feelslike = _useState6[0],\n      setFeelslike = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      humidity = _useState7[0],\n      setHumidity = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      icon = _useState8[0],\n      setIcon = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      pressure = _useState9[0],\n      setPressure = _useState9[1];\n\n  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      temperature = _useState10[0],\n      setTemperature = _useState10[1];\n\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      time = _useState11[0],\n      setTime = _useState11[1];\n\n  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      wind = _useState12[0],\n      setWind = _useState12[1]; // Get Five Hour Forecast\n\n\n  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      fiveHour = _useState13[0],\n      setFiveHour = _useState13[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var getWeather = /*#__PURE__*/function () {\n      var _ref = (0,_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {\n        var api_call, data;\n        return _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch(\"https://api.openweathermap.org/data/2.5/weather?q=sydney,au&appid=\".concat(API_KEY, \"&units=metric\"));\n\n              case 2:\n                api_call = _context.sent;\n                _context.next = 5;\n                return api_call.json();\n\n              case 5:\n                data = _context.sent;\n                console.log(\"Get Weather Data\", data);\n                setBackground(backgroundConverter(data.weather[0].icon));\n                setCity(data.name);\n                setCountry(data.sys.country);\n                setDate(dateConverter(data.dt));\n                setDescription(data.weather[0].description);\n                setFeelslike(data.main.feels_like);\n                setHumidity(data.main.humidity);\n                setIcon(iconConverter(data.weather[0].icon));\n                setPressure(data.main.pressure);\n                setTemperature(Math.floor(data.main.temp));\n                setTime(timeConverter(data.dt));\n                setWind(data.wind.speed);\n\n              case 19:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getWeather(_x) {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    getWeather();\n  }, []);\n\n  var backgroundConverter = function backgroundConverter(icon) {\n    var weatherBackground = {\n      \"01d\": \"sky-gradient-11\",\n      \"02d\": \"sky-gradient-09\",\n      \"03d\": \"sky-gradient-13\",\n      \"04d\": \"sky-gradient-14\",\n      \"09d\": \"sky-gradient-14\",\n      \"10d\": \"sky-gradient-15\",\n      \"11d\": \"sky-gradient-15\",\n      \"13d\": \"sky-gradient-09\",\n      \"50d\": \"sky-gradient-08\",\n      \"01n\": \"sky-gradient-05\",\n      \"02n\": \"sky-gradient-21\",\n      \"03n\": \"sky-gradient-03\",\n      \"04n\": \"sky-gradient-03\",\n      \"09n\": \"sky-gradient-22\",\n      \"10n\": \"sky-gradient-03\",\n      \"11n\": \"sky-gradient-21\",\n      \"13n\": \"sky-gradient-02\",\n      \"50n\": \"sky-gradient-20\"\n    };\n    return weatherBackground[icon];\n  };\n\n  var iconConverter = function iconConverter(icon) {\n    var convertIcon = {\n      \"01d\": \"WiDaySunny\",\n      \"02d\": \"WiDaySunnyOvercast\",\n      \"03d\": \"WiCloud\",\n      \"04d\": \"WiDayCloudy\",\n      \"09d\": \"WiRain\",\n      \"10d\": \"WiDayShowers\",\n      \"11d\": \"WiThunderstorm\",\n      \"13d\": \"WiSnow\",\n      \"50d\": \"WiFog\",\n      \"01n\": \"WiNightClear\",\n      \"02n\": \"WiNightPartlyCloudy\",\n      \"03n\": \"WiCloud\",\n      \"04n\": \"WiNightCloudy\",\n      \"09n\": \"WiRain\",\n      \"10n\": \"WiNightShowers\",\n      \"11n\": \"WiThunderstorm\",\n      \"13n\": \"WiSnow\",\n      \"50n\": \"WiFog\"\n    };\n    return convertIcon[icon];\n  };\n\n  var dateConverter = function dateConverter(UNIX_timestamp) {\n    var a = new Date(UNIX_timestamp * 1000);\n    var months = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"];\n    var year = a.getFullYear();\n    var month = months[a.getMonth()];\n    var day = a.getDate();\n    var date = day + \" \" + month + \" \" + year;\n    return date;\n  };\n\n  var timeConverter = function timeConverter(UNIX_timestamp) {\n    var a = new Date(UNIX_timestamp * 1000);\n    var hour = a.getHours();\n    var min = (\"0\" + a.getMinutes()).slice(-2); // let sec = a.getSeconds();\n\n    var time = hour + \":\" + min;\n    return time;\n  };\n\n  var celciusConverter = function celciusConverter(k) {\n    var kelvin = 273.15; // return kelvin.slice(0, 2);\n    // return kelvin;\n\n    return k - 273.15;\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var getHourForecast = /*#__PURE__*/function () {\n      var _ref2 = (0,_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(e) {\n        var api_call, fiveHourData;\n        return _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return fetch(\"https://api.openweathermap.org/data/2.5/forecast?q=sydney,nsw&appid=\".concat(API_KEY));\n\n              case 2:\n                api_call = _context2.sent;\n                _context2.next = 5;\n                return api_call.json();\n\n              case 5:\n                fiveHourData = _context2.sent;\n                console.log(\"Get Hour Data\", fiveHourData.list.slice(0, 5));\n                setFiveHour(fiveHourData.list.slice(0, 5));\n\n              case 8:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function getHourForecast(_x2) {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    getHourForecast();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"screen\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"weather-app\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"weather-app__title\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h1\", {\n          children: [city, \", \", country]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 163,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 162,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_layout_MainWindow__WEBPACK_IMPORTED_MODULE_3__.default, {\n        icon: icon,\n        description: description,\n        date: date,\n        temperature: temperature,\n        wind: wind,\n        feelslike: feelslike,\n        humidity: humidity,\n        pressure: pressure\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 168,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_layout_Forecast__WEBPACK_IMPORTED_MODULE_4__.default, {\n        fiveHour: fiveHour,\n        celciusConverter: celciusConverter,\n        iconConverter: iconConverter,\n        timeConverter: timeConverter\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 179,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 160,\n    columnNumber: 5\n  }, this);\n}\n\n_s(App, \"jl8isMyg/WxTgWCsqXVKGpM20hc=\");\n\n_c = App;\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3dlYXRoZXJBcHAvV2VhdGhlckFwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxJQUFNSyxPQUFPLEdBQUcsa0NBQWhCO0FBRWUsU0FBU0MsR0FBVCxHQUFlO0FBQUE7O0FBQzVCO0FBQ0Esa0JBQW9DTCwrQ0FBUSxDQUFDLGlCQUFELENBQTVDO0FBQUEsTUFBT00sVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBd0JQLCtDQUFRLEVBQWhDO0FBQUEsTUFBT1EsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQThCVCwrQ0FBUSxFQUF0QztBQUFBLE1BQU9VLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQXdCWCwrQ0FBUSxFQUFoQztBQUFBLE1BQU9ZLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG1CQUFzQ2IsK0NBQVEsRUFBOUM7QUFBQSxNQUFPYyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG1CQUFrQ2YsK0NBQVEsRUFBMUM7QUFBQSxNQUFPZ0IsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBZ0NqQiwrQ0FBUSxFQUF4QztBQUFBLE1BQU9rQixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUF3Qm5CLCtDQUFRLEVBQWhDO0FBQUEsTUFBT29CLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG1CQUFnQ3JCLCtDQUFRLEVBQXhDO0FBQUEsTUFBT3NCLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0Esb0JBQXNDdkIsK0NBQVEsQ0FBQyxDQUFELENBQTlDO0FBQUEsTUFBT3dCLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0Esb0JBQXdCekIsK0NBQVEsRUFBaEM7QUFBQSxNQUFPMEIsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0Esb0JBQXdCM0IsK0NBQVEsRUFBaEM7QUFBQSxNQUFPNEIsSUFBUDtB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QVg7O0FBVHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQWZJLGVBQWU7QUFBQTtBQUFBO0FBQUEsT0FBckI7O0FBV0FBLElBQUFBLGVBQWU7QUFDaEIsR0FiUSxFQWFOLEVBYk0sQ0FBVDtBQWVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLG9CQUFmO0FBQUEsK0JBQ0U7QUFBQSxxQkFDR2xFLElBREgsUUFDV0UsT0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFPRSw4REFBQyx1REFBRDtBQUNFLFlBQUksRUFBRVUsSUFEUjtBQUVFLG1CQUFXLEVBQUVOLFdBRmY7QUFHRSxZQUFJLEVBQUVGLElBSFI7QUFJRSxtQkFBVyxFQUFFWSxXQUpmO0FBS0UsWUFBSSxFQUFFSSxJQUxSO0FBTUUsaUJBQVMsRUFBRVosU0FOYjtBQU9FLGdCQUFRLEVBQUVFLFFBUFo7QUFRRSxnQkFBUSxFQUFFSTtBQVJaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQWtCRSw4REFBQyxxREFBRDtBQUNFLGdCQUFRLEVBQUVRLFFBRFo7QUFFRSx3QkFBZ0IsRUFBRXlDLGdCQUZwQjtBQUdFLHFCQUFhLEVBQUV2QixhQUhqQjtBQUlFLHFCQUFhLEVBQUVJO0FBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkJEOztHQXBMdUIvQzs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy93ZWF0aGVyQXBwL1dlYXRoZXJBcHAuanM/ZTRlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTWFpbldpbmRvdyBmcm9tIFwiLi4vbGF5b3V0L01haW5XaW5kb3dcIjtcbmltcG9ydCBGb3JlY2FzdCBmcm9tIFwiLi4vbGF5b3V0L0ZvcmVjYXN0XCI7XG5cbmNvbnN0IEFQSV9LRVkgPSBcIjRhNjRlZDA5ZDA3M2NkYWMyMzFjNTNlMWEzYjYyMTgxXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgLy8gR2V0IFdlYXRoZXIgU3RhdGVcbiAgY29uc3QgW2JhY2tncm91bmQsIHNldEJhY2tncm91bmRdID0gdXNlU3RhdGUoXCJza3ktZ3JhZGllbnQtMTFcIik7XG4gIGNvbnN0IFtjaXR5LCBzZXRDaXR5XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtjb3VudHJ5LCBzZXRDb3VudHJ5XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2ZlZWxzbGlrZSwgc2V0RmVlbHNsaWtlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtodW1pZGl0eSwgc2V0SHVtaWRpdHldID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2ljb24sIHNldEljb25dID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3ByZXNzdXJlLCBzZXRQcmVzc3VyZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdGVtcGVyYXR1cmUsIHNldFRlbXBlcmF0dXJlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbd2luZCwgc2V0V2luZF0gPSB1c2VTdGF0ZSgpO1xuXG4gIC8vIEdldCBGaXZlIEhvdXIgRm9yZWNhc3RcbiAgY29uc3QgW2ZpdmVIb3VyLCBzZXRGaXZlSG91cl0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKGUpID0+IHtcbiAgICAgIGNvbnN0IGFwaV9jYWxsID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPXN5ZG5leSxhdSZhcHBpZD0ke0FQSV9LRVl9JnVuaXRzPW1ldHJpY2BcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGlfY2FsbC5qc29uKCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiR2V0IFdlYXRoZXIgRGF0YVwiLCBkYXRhKTtcblxuICAgICAgc2V0QmFja2dyb3VuZChiYWNrZ3JvdW5kQ29udmVydGVyKGRhdGEud2VhdGhlclswXS5pY29uKSk7XG4gICAgICBzZXRDaXR5KGRhdGEubmFtZSk7XG4gICAgICBzZXRDb3VudHJ5KGRhdGEuc3lzLmNvdW50cnkpO1xuICAgICAgc2V0RGF0ZShkYXRlQ29udmVydGVyKGRhdGEuZHQpKTtcbiAgICAgIHNldERlc2NyaXB0aW9uKGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbik7XG4gICAgICBzZXRGZWVsc2xpa2UoZGF0YS5tYWluLmZlZWxzX2xpa2UpO1xuICAgICAgc2V0SHVtaWRpdHkoZGF0YS5tYWluLmh1bWlkaXR5KTtcbiAgICAgIHNldEljb24oaWNvbkNvbnZlcnRlcihkYXRhLndlYXRoZXJbMF0uaWNvbikpO1xuICAgICAgc2V0UHJlc3N1cmUoZGF0YS5tYWluLnByZXNzdXJlKTtcbiAgICAgIHNldFRlbXBlcmF0dXJlKE1hdGguZmxvb3IoZGF0YS5tYWluLnRlbXApKTtcbiAgICAgIHNldFRpbWUodGltZUNvbnZlcnRlcihkYXRhLmR0KSk7XG4gICAgICBzZXRXaW5kKGRhdGEud2luZC5zcGVlZCk7XG4gICAgfTtcbiAgICBnZXRXZWF0aGVyKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBiYWNrZ3JvdW5kQ29udmVydGVyID0gKGljb24pID0+IHtcbiAgICBjb25zdCB3ZWF0aGVyQmFja2dyb3VuZCA9IHtcbiAgICAgIFwiMDFkXCI6IFwic2t5LWdyYWRpZW50LTExXCIsXG4gICAgICBcIjAyZFwiOiBcInNreS1ncmFkaWVudC0wOVwiLFxuICAgICAgXCIwM2RcIjogXCJza3ktZ3JhZGllbnQtMTNcIixcbiAgICAgIFwiMDRkXCI6IFwic2t5LWdyYWRpZW50LTE0XCIsXG4gICAgICBcIjA5ZFwiOiBcInNreS1ncmFkaWVudC0xNFwiLFxuICAgICAgXCIxMGRcIjogXCJza3ktZ3JhZGllbnQtMTVcIixcbiAgICAgIFwiMTFkXCI6IFwic2t5LWdyYWRpZW50LTE1XCIsXG4gICAgICBcIjEzZFwiOiBcInNreS1ncmFkaWVudC0wOVwiLFxuICAgICAgXCI1MGRcIjogXCJza3ktZ3JhZGllbnQtMDhcIixcbiAgICAgIFwiMDFuXCI6IFwic2t5LWdyYWRpZW50LTA1XCIsXG4gICAgICBcIjAyblwiOiBcInNreS1ncmFkaWVudC0yMVwiLFxuICAgICAgXCIwM25cIjogXCJza3ktZ3JhZGllbnQtMDNcIixcbiAgICAgIFwiMDRuXCI6IFwic2t5LWdyYWRpZW50LTAzXCIsXG4gICAgICBcIjA5blwiOiBcInNreS1ncmFkaWVudC0yMlwiLFxuICAgICAgXCIxMG5cIjogXCJza3ktZ3JhZGllbnQtMDNcIixcbiAgICAgIFwiMTFuXCI6IFwic2t5LWdyYWRpZW50LTIxXCIsXG4gICAgICBcIjEzblwiOiBcInNreS1ncmFkaWVudC0wMlwiLFxuICAgICAgXCI1MG5cIjogXCJza3ktZ3JhZGllbnQtMjBcIixcbiAgICB9O1xuXG4gICAgcmV0dXJuIHdlYXRoZXJCYWNrZ3JvdW5kW2ljb25dO1xuICB9O1xuXG4gIGNvbnN0IGljb25Db252ZXJ0ZXIgPSAoaWNvbikgPT4ge1xuICAgIGNvbnN0IGNvbnZlcnRJY29uID0ge1xuICAgICAgXCIwMWRcIjogXCJXaURheVN1bm55XCIsXG4gICAgICBcIjAyZFwiOiBcIldpRGF5U3VubnlPdmVyY2FzdFwiLFxuICAgICAgXCIwM2RcIjogXCJXaUNsb3VkXCIsXG4gICAgICBcIjA0ZFwiOiBcIldpRGF5Q2xvdWR5XCIsXG4gICAgICBcIjA5ZFwiOiBcIldpUmFpblwiLFxuICAgICAgXCIxMGRcIjogXCJXaURheVNob3dlcnNcIixcbiAgICAgIFwiMTFkXCI6IFwiV2lUaHVuZGVyc3Rvcm1cIixcbiAgICAgIFwiMTNkXCI6IFwiV2lTbm93XCIsXG4gICAgICBcIjUwZFwiOiBcIldpRm9nXCIsXG4gICAgICBcIjAxblwiOiBcIldpTmlnaHRDbGVhclwiLFxuICAgICAgXCIwMm5cIjogXCJXaU5pZ2h0UGFydGx5Q2xvdWR5XCIsXG4gICAgICBcIjAzblwiOiBcIldpQ2xvdWRcIixcbiAgICAgIFwiMDRuXCI6IFwiV2lOaWdodENsb3VkeVwiLFxuICAgICAgXCIwOW5cIjogXCJXaVJhaW5cIixcbiAgICAgIFwiMTBuXCI6IFwiV2lOaWdodFNob3dlcnNcIixcbiAgICAgIFwiMTFuXCI6IFwiV2lUaHVuZGVyc3Rvcm1cIixcbiAgICAgIFwiMTNuXCI6IFwiV2lTbm93XCIsXG4gICAgICBcIjUwblwiOiBcIldpRm9nXCIsXG4gICAgfTtcbiAgICByZXR1cm4gY29udmVydEljb25baWNvbl07XG4gIH07XG5cbiAgY29uc3QgZGF0ZUNvbnZlcnRlciA9IChVTklYX3RpbWVzdGFtcCkgPT4ge1xuICAgIGxldCBhID0gbmV3IERhdGUoVU5JWF90aW1lc3RhbXAgKiAxMDAwKTtcbiAgICBjb25zdCBtb250aHMgPSBbXG4gICAgICBcIkphblwiLFxuICAgICAgXCJGZWJcIixcbiAgICAgIFwiTWFyXCIsXG4gICAgICBcIkFwclwiLFxuICAgICAgXCJNYXlcIixcbiAgICAgIFwiSnVuXCIsXG4gICAgICBcIkp1bFwiLFxuICAgICAgXCJBdWdcIixcbiAgICAgIFwiU2VwXCIsXG4gICAgICBcIk9jdFwiLFxuICAgICAgXCJOb3ZcIixcbiAgICAgIFwiRGVjXCIsXG4gICAgXTtcbiAgICBsZXQgeWVhciA9IGEuZ2V0RnVsbFllYXIoKTtcbiAgICBsZXQgbW9udGggPSBtb250aHNbYS5nZXRNb250aCgpXTtcbiAgICBsZXQgZGF5ID0gYS5nZXREYXRlKCk7XG4gICAgbGV0IGRhdGUgPSBkYXkgKyBcIiBcIiArIG1vbnRoICsgXCIgXCIgKyB5ZWFyO1xuXG4gICAgcmV0dXJuIGRhdGU7XG4gIH07XG5cbiAgY29uc3QgdGltZUNvbnZlcnRlciA9IChVTklYX3RpbWVzdGFtcCkgPT4ge1xuICAgIGxldCBhID0gbmV3IERhdGUoVU5JWF90aW1lc3RhbXAgKiAxMDAwKTtcblxuICAgIGxldCBob3VyID0gYS5nZXRIb3VycygpO1xuICAgIGxldCBtaW4gPSAoXCIwXCIgKyBhLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpO1xuICAgIC8vIGxldCBzZWMgPSBhLmdldFNlY29uZHMoKTtcbiAgICBsZXQgdGltZSA9IGhvdXIgKyBcIjpcIiArIG1pbjtcblxuICAgIHJldHVybiB0aW1lO1xuICB9O1xuXG4gIGNvbnN0IGNlbGNpdXNDb252ZXJ0ZXIgPSAoaykgPT4ge1xuICAgIGxldCBrZWx2aW4gPSAyNzMuMTU7XG5cbiAgICAvLyByZXR1cm4ga2VsdmluLnNsaWNlKDAsIDIpO1xuICAgIC8vIHJldHVybiBrZWx2aW47XG4gICAgcmV0dXJuIGsgLSAyNzMuMTU7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRIb3VyRm9yZWNhc3QgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgY29uc3QgYXBpX2NhbGwgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPXN5ZG5leSxuc3cmYXBwaWQ9JHtBUElfS0VZfWBcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGZpdmVIb3VyRGF0YSA9IGF3YWl0IGFwaV9jYWxsLmpzb24oKTtcblxuICAgICAgY29uc29sZS5sb2coXCJHZXQgSG91ciBEYXRhXCIsIGZpdmVIb3VyRGF0YS5saXN0LnNsaWNlKDAsIDUpKTtcblxuICAgICAgc2V0Rml2ZUhvdXIoZml2ZUhvdXJEYXRhLmxpc3Quc2xpY2UoMCwgNSkpO1xuICAgIH07XG4gICAgZ2V0SG91ckZvcmVjYXN0KCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlYXRoZXItYXBwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VhdGhlci1hcHBfX3RpdGxlXCI+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAge2NpdHl9LCB7Y291bnRyeX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8TWFpbldpbmRvd1xuICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIGRhdGU9e2RhdGV9XG4gICAgICAgICAgdGVtcGVyYXR1cmU9e3RlbXBlcmF0dXJlfVxuICAgICAgICAgIHdpbmQ9e3dpbmR9XG4gICAgICAgICAgZmVlbHNsaWtlPXtmZWVsc2xpa2V9XG4gICAgICAgICAgaHVtaWRpdHk9e2h1bWlkaXR5fVxuICAgICAgICAgIHByZXNzdXJlPXtwcmVzc3VyZX1cbiAgICAgICAgLz5cblxuICAgICAgICA8Rm9yZWNhc3RcbiAgICAgICAgICBmaXZlSG91cj17Zml2ZUhvdXJ9XG4gICAgICAgICAgY2VsY2l1c0NvbnZlcnRlcj17Y2VsY2l1c0NvbnZlcnRlcn1cbiAgICAgICAgICBpY29uQ29udmVydGVyPXtpY29uQ29udmVydGVyfVxuICAgICAgICAgIHRpbWVDb252ZXJ0ZXI9e3RpbWVDb252ZXJ0ZXJ9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTWFpbldpbmRvdyIsIkZvcmVjYXN0IiwiQVBJX0tFWSIsIkFwcCIsImJhY2tncm91bmQiLCJzZXRCYWNrZ3JvdW5kIiwiY2l0eSIsInNldENpdHkiLCJjb3VudHJ5Iiwic2V0Q291bnRyeSIsImRhdGUiLCJzZXREYXRlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImZlZWxzbGlrZSIsInNldEZlZWxzbGlrZSIsImh1bWlkaXR5Iiwic2V0SHVtaWRpdHkiLCJpY29uIiwic2V0SWNvbiIsInByZXNzdXJlIiwic2V0UHJlc3N1cmUiLCJ0ZW1wZXJhdHVyZSIsInNldFRlbXBlcmF0dXJlIiwidGltZSIsInNldFRpbWUiLCJ3aW5kIiwic2V0V2luZCIsImZpdmVIb3VyIiwic2V0Rml2ZUhvdXIiLCJnZXRXZWF0aGVyIiwiZSIsImZldGNoIiwiYXBpX2NhbGwiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kQ29udmVydGVyIiwid2VhdGhlciIsIm5hbWUiLCJzeXMiLCJkYXRlQ29udmVydGVyIiwiZHQiLCJtYWluIiwiZmVlbHNfbGlrZSIsImljb25Db252ZXJ0ZXIiLCJNYXRoIiwiZmxvb3IiLCJ0ZW1wIiwidGltZUNvbnZlcnRlciIsInNwZWVkIiwid2VhdGhlckJhY2tncm91bmQiLCJjb252ZXJ0SWNvbiIsIlVOSVhfdGltZXN0YW1wIiwiYSIsIkRhdGUiLCJtb250aHMiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImhvdXIiLCJnZXRIb3VycyIsIm1pbiIsImdldE1pbnV0ZXMiLCJzbGljZSIsImNlbGNpdXNDb252ZXJ0ZXIiLCJrIiwia2VsdmluIiwiZ2V0SG91ckZvcmVjYXN0IiwiZml2ZUhvdXJEYXRhIiwibGlzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/weatherApp/WeatherApp.js\n");

/***/ })

});