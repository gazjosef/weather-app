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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_wi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/wi */ \"./node_modules/react-icons/wi/index.esm.js\");\n/* harmony import */ var _layout_MainWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/MainWindow */ \"./components/layout/MainWindow.js\");\n/* harmony import */ var _layout_Forecast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/Forecast */ \"./components/layout/Forecast.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/garethhind/Documents/Github/weather-app/components/weatherApp/WeatherApp.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar API_KEY = \"4a64ed09d073cdac231c53e1a3b62181\";\nfunction App() {\n  _s();\n\n  var _this = this;\n\n  // Get Weather State\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"sky-gradient-11\"),\n      background = _useState[0],\n      setBackground = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      city = _useState2[0],\n      setCity = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      country = _useState3[0],\n      setCountry = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      date = _useState4[0],\n      setDate = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      degrees = _useState5[0],\n      setDegrees = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      description = _useState6[0],\n      setDescription = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      feelslike = _useState7[0],\n      setFeelslike = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      humidity = _useState8[0],\n      setHumidity = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      icon = _useState9[0],\n      setIcon = _useState9[1];\n\n  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      pressure = _useState10[0],\n      setPressure = _useState10[1];\n\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      temperature = _useState11[0],\n      setTemperature = _useState11[1];\n\n  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      time = _useState12[0],\n      setTime = _useState12[1];\n\n  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      wind = _useState13[0],\n      setWind = _useState13[1]; // Get Five Hour Forecast\n\n\n  var _useState14 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      fiveHour = _useState14[0],\n      setFiveHour = _useState14[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var getWeather = /*#__PURE__*/function () {\n      var _ref = (0,_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {\n        var api_call, data;\n        return _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch(\"https://api.openweathermap.org/data/2.5/weather?q=sydney,au&appid=\".concat(API_KEY, \"&units=metric\"));\n\n              case 2:\n                api_call = _context.sent;\n                _context.next = 5;\n                return api_call.json();\n\n              case 5:\n                data = _context.sent;\n                console.log(\"Get Weather Data\", data);\n                setBackground(backgroundConverter(data.weather[0].icon));\n                setCity(data.name);\n                setCountry(data.sys.country);\n                setDate(dateConverter(data.dt));\n                setDegrees(directionConverter(data.wind.deg));\n                setDescription(data.weather[0].description);\n                setFeelslike(data.main.feels_like);\n                setHumidity(data.main.humidity);\n                setIcon(iconConverter(data.weather[0].icon));\n                setPressure(data.main.pressure);\n                setTemperature(Math.floor(data.main.temp));\n                setTime(timeConverter(data.dt));\n                setWind(data.wind.speed);\n\n              case 20:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getWeather(_x) {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    getWeather();\n  }, []);\n\n  var backgroundConverter = function backgroundConverter(icon) {\n    var weatherBackground = {\n      \"01d\": \"sky-gradient-11\",\n      \"02d\": \"sky-gradient-09\",\n      \"03d\": \"sky-gradient-13\",\n      \"04d\": \"sky-gradient-14\",\n      \"09d\": \"sky-gradient-14\",\n      \"10d\": \"sky-gradient-15\",\n      \"11d\": \"sky-gradient-15\",\n      \"13d\": \"sky-gradient-09\",\n      \"50d\": \"sky-gradient-08\",\n      \"01n\": \"sky-gradient-05\",\n      \"02n\": \"sky-gradient-21\",\n      \"03n\": \"sky-gradient-03\",\n      \"04n\": \"sky-gradient-03\",\n      \"09n\": \"sky-gradient-22\",\n      \"10n\": \"sky-gradient-03\",\n      \"11n\": \"sky-gradient-21\",\n      \"13n\": \"sky-gradient-02\",\n      \"50n\": \"sky-gradient-20\"\n    };\n    return weatherBackground[icon];\n  };\n\n  var iconConverter = function iconConverter(icon) {\n    var convertIcon = {\n      \"01d\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiDaySunny, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 14\n      }, _this),\n      \"02d\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiDaySunnyOvercast, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 14\n      }, _this),\n      \"03d\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiCloud, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 14\n      }, _this),\n      \"04d\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiDayCloudy, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 14\n      }, _this),\n      \"09d\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiRain, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 14\n      }, _this),\n      \"10d\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiDayShowers, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 14\n      }, _this),\n      \"11d\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiThunderstorm, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 14\n      }, _this),\n      \"13d\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiSnow, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 14\n      }, _this),\n      \"50d\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiFog, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 14\n      }, _this),\n      \"01n\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiNightClear, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 14\n      }, _this),\n      \"02n\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiNightPartlyCloudy, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 14\n      }, _this),\n      \"03n\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiCloud, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 14\n      }, _this),\n      \"04n\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiNightCloudy, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 14\n      }, _this),\n      \"09n\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiRain, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 14\n      }, _this),\n      \"10n\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiNightShowers, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 14\n      }, _this),\n      \"11n\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiThunderstorm, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 14\n      }, _this),\n      \"13n\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiSnow, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 14\n      }, _this),\n      \"50n\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiFog, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 14\n      }, _this)\n    };\n    return convertIcon[icon];\n  };\n\n  var dateConverter = function dateConverter(UNIX_timestamp) {\n    var a = new Date(UNIX_timestamp * 1000);\n    var months = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"];\n    var year = a.getFullYear();\n    var month = months[a.getMonth()];\n    var day = a.getDate();\n    var date = day + \" \" + month + \" \" + year;\n    return date;\n  };\n\n  var timeConverter = function timeConverter(UNIX_timestamp) {\n    var a = new Date(UNIX_timestamp * 1000);\n    var hour = a.getHours();\n    var min = (\"0\" + a.getMinutes()).slice(-2); // let sec = a.getSeconds();\n\n    var time = hour + \":\" + min;\n    return time;\n  };\n\n  var directionConverter = function directionConverter(degrees) {\n    var directions = [\"N\", \"NE\", \"E\", \"SE\", \"S\", \"SW\", \"W\", \"NW\"];\n    var direction = degrees * 8 / 360;\n    direction = Math.round(direction, 0);\n    direction = (direction + 8) % 8;\n    return directions[direction];\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var getHourForecast = /*#__PURE__*/function () {\n      var _ref2 = (0,_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(e) {\n        var api_call, fiveHourData;\n        return _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return fetch(\"https://api.openweathermap.org/data/2.5/forecast?q=sydney,nsw&appid=\".concat(API_KEY));\n\n              case 2:\n                api_call = _context2.sent;\n                _context2.next = 5;\n                return api_call.json();\n\n              case 5:\n                fiveHourData = _context2.sent;\n                console.log(\"Get Hour Data\", fiveHourData.list.slice(0, 5));\n                setFiveHour(fiveHourData.list.slice(0, 5));\n\n              case 8:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function getHourForecast(_x2) {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    getHourForecast();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"screen\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"weather-app\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"weather-app__title\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h1\", {\n          children: [city, \", \", country]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 184,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 183,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_layout_MainWindow__WEBPACK_IMPORTED_MODULE_3__.default, {\n        icon: icon,\n        description: description,\n        date: date,\n        degrees: degrees,\n        temperature: temperature,\n        wind: wind,\n        feelslike: feelslike,\n        humidity: humidity,\n        pressure: pressure\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 189,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_layout_Forecast__WEBPACK_IMPORTED_MODULE_4__.default, {\n        fiveHour: fiveHour,\n        iconConverter: iconConverter,\n        timeConverter: timeConverter\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 201,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 182,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 181,\n    columnNumber: 5\n  }, this);\n}\n\n_s(App, \"pLH90n64BJwjtbDXheUzy7HOamQ=\");\n\n_c = App;\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3dlYXRoZXJBcHAvV2VhdGhlckFwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBZ0JBO0FBQ0E7O0FBRUEsSUFBTWtCLE9BQU8sR0FBRyxrQ0FBaEI7QUFFZSxTQUFTQyxHQUFULEdBQWU7QUFBQTs7QUFBQTs7QUFDNUI7QUFDQSxrQkFBb0NsQiwrQ0FBUSxDQUFDLGlCQUFELENBQTVDO0FBQUEsTUFBT21CLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0EsbUJBQXdCcEIsK0NBQVEsRUFBaEM7QUFBQSxNQUFPcUIsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQThCdEIsK0NBQVEsRUFBdEM7QUFBQSxNQUFPdUIsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBd0J4QiwrQ0FBUSxFQUFoQztBQUFBLE1BQU95QixJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBOEIxQiwrQ0FBUSxFQUF0QztBQUFBLE1BQU8yQixPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUFzQzVCLCtDQUFRLEVBQTlDO0FBQUEsTUFBTzZCLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQWtDOUIsK0NBQVEsRUFBMUM7QUFBQSxNQUFPK0IsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBZ0NoQywrQ0FBUSxFQUF4QztBQUFBLE1BQU9pQyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUF3QmxDLCtDQUFRLEVBQWhDO0FBQUEsTUFBT21DLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG9CQUFnQ3BDLCtDQUFRLEVBQXhDO0FBQUEsTUFBT3FDLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0Esb0JBQXNDdEMsK0NBQVEsQ0FBQyxDQUFELENBQTlDO0FBQUEsTUFBT3VDLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0Esb0JBQXdCeEMsK0NB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ZWF0aGVyQXBwL1dlYXRoZXJBcHAuanM/ZTRlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgV2lEYXlTdW5ueSxcbiAgV2lOaWdodENsZWFyLFxuICBXaURheVN1bm55T3ZlcmNhc3QsXG4gIFdpTmlnaHRQYXJ0bHlDbG91ZHksXG4gIFdpQ2xvdWQsXG4gIFdpRGF5Q2xvdWR5LFxuICBXaU5pZ2h0Q2xvdWR5LFxuICBXaVJhaW4sXG4gIFdpRGF5U2hvd2VycyxcbiAgV2lOaWdodFNob3dlcnMsXG4gIFdpVGh1bmRlcnN0b3JtLFxuICBXaVNub3csXG4gIFdpRm9nLFxufSBmcm9tIFwicmVhY3QtaWNvbnMvd2lcIjtcblxuaW1wb3J0IE1haW5XaW5kb3cgZnJvbSBcIi4uL2xheW91dC9NYWluV2luZG93XCI7XG5pbXBvcnQgRm9yZWNhc3QgZnJvbSBcIi4uL2xheW91dC9Gb3JlY2FzdFwiO1xuXG5jb25zdCBBUElfS0VZID0gXCI0YTY0ZWQwOWQwNzNjZGFjMjMxYzUzZTFhM2I2MjE4MVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIC8vIEdldCBXZWF0aGVyIFN0YXRlXG4gIGNvbnN0IFtiYWNrZ3JvdW5kLCBzZXRCYWNrZ3JvdW5kXSA9IHVzZVN0YXRlKFwic2t5LWdyYWRpZW50LTExXCIpO1xuICBjb25zdCBbY2l0eSwgc2V0Q2l0eV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbY291bnRyeSwgc2V0Q291bnRyeV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbZGVncmVlcywgc2V0RGVncmVlc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtmZWVsc2xpa2UsIHNldEZlZWxzbGlrZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbaHVtaWRpdHksIHNldEh1bWlkaXR5XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtpY29uLCBzZXRJY29uXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtwcmVzc3VyZSwgc2V0UHJlc3N1cmVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3RlbXBlcmF0dXJlLCBzZXRUZW1wZXJhdHVyZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3dpbmQsIHNldFdpbmRdID0gdXNlU3RhdGUoKTtcblxuICAvLyBHZXQgRml2ZSBIb3VyIEZvcmVjYXN0XG4gIGNvbnN0IFtmaXZlSG91ciwgc2V0Rml2ZUhvdXJdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChlKSA9PiB7XG4gICAgICBjb25zdCBhcGlfY2FsbCA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1zeWRuZXksYXUmYXBwaWQ9JHtBUElfS0VZfSZ1bml0cz1tZXRyaWNgXG4gICAgICApO1xuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpX2NhbGwuanNvbigpO1xuXG4gICAgICBjb25zb2xlLmxvZyhcIkdldCBXZWF0aGVyIERhdGFcIiwgZGF0YSk7XG5cbiAgICAgIHNldEJhY2tncm91bmQoYmFja2dyb3VuZENvbnZlcnRlcihkYXRhLndlYXRoZXJbMF0uaWNvbikpO1xuICAgICAgc2V0Q2l0eShkYXRhLm5hbWUpO1xuICAgICAgc2V0Q291bnRyeShkYXRhLnN5cy5jb3VudHJ5KTtcbiAgICAgIHNldERhdGUoZGF0ZUNvbnZlcnRlcihkYXRhLmR0KSk7XG4gICAgICBzZXREZWdyZWVzKGRpcmVjdGlvbkNvbnZlcnRlcihkYXRhLndpbmQuZGVnKSk7XG4gICAgICBzZXREZXNjcmlwdGlvbihkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24pO1xuICAgICAgc2V0RmVlbHNsaWtlKGRhdGEubWFpbi5mZWVsc19saWtlKTtcbiAgICAgIHNldEh1bWlkaXR5KGRhdGEubWFpbi5odW1pZGl0eSk7XG4gICAgICBzZXRJY29uKGljb25Db252ZXJ0ZXIoZGF0YS53ZWF0aGVyWzBdLmljb24pKTtcbiAgICAgIHNldFByZXNzdXJlKGRhdGEubWFpbi5wcmVzc3VyZSk7XG4gICAgICBzZXRUZW1wZXJhdHVyZShNYXRoLmZsb29yKGRhdGEubWFpbi50ZW1wKSk7XG4gICAgICBzZXRUaW1lKHRpbWVDb252ZXJ0ZXIoZGF0YS5kdCkpO1xuICAgICAgc2V0V2luZChkYXRhLndpbmQuc3BlZWQpO1xuICAgIH07XG4gICAgZ2V0V2VhdGhlcigpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgYmFja2dyb3VuZENvbnZlcnRlciA9IChpY29uKSA9PiB7XG4gICAgY29uc3Qgd2VhdGhlckJhY2tncm91bmQgPSB7XG4gICAgICBcIjAxZFwiOiBcInNreS1ncmFkaWVudC0xMVwiLFxuICAgICAgXCIwMmRcIjogXCJza3ktZ3JhZGllbnQtMDlcIixcbiAgICAgIFwiMDNkXCI6IFwic2t5LWdyYWRpZW50LTEzXCIsXG4gICAgICBcIjA0ZFwiOiBcInNreS1ncmFkaWVudC0xNFwiLFxuICAgICAgXCIwOWRcIjogXCJza3ktZ3JhZGllbnQtMTRcIixcbiAgICAgIFwiMTBkXCI6IFwic2t5LWdyYWRpZW50LTE1XCIsXG4gICAgICBcIjExZFwiOiBcInNreS1ncmFkaWVudC0xNVwiLFxuICAgICAgXCIxM2RcIjogXCJza3ktZ3JhZGllbnQtMDlcIixcbiAgICAgIFwiNTBkXCI6IFwic2t5LWdyYWRpZW50LTA4XCIsXG4gICAgICBcIjAxblwiOiBcInNreS1ncmFkaWVudC0wNVwiLFxuICAgICAgXCIwMm5cIjogXCJza3ktZ3JhZGllbnQtMjFcIixcbiAgICAgIFwiMDNuXCI6IFwic2t5LWdyYWRpZW50LTAzXCIsXG4gICAgICBcIjA0blwiOiBcInNreS1ncmFkaWVudC0wM1wiLFxuICAgICAgXCIwOW5cIjogXCJza3ktZ3JhZGllbnQtMjJcIixcbiAgICAgIFwiMTBuXCI6IFwic2t5LWdyYWRpZW50LTAzXCIsXG4gICAgICBcIjExblwiOiBcInNreS1ncmFkaWVudC0yMVwiLFxuICAgICAgXCIxM25cIjogXCJza3ktZ3JhZGllbnQtMDJcIixcbiAgICAgIFwiNTBuXCI6IFwic2t5LWdyYWRpZW50LTIwXCIsXG4gICAgfTtcblxuICAgIHJldHVybiB3ZWF0aGVyQmFja2dyb3VuZFtpY29uXTtcbiAgfTtcblxuICBjb25zdCBpY29uQ29udmVydGVyID0gKGljb24pID0+IHtcbiAgICBjb25zdCBjb252ZXJ0SWNvbiA9IHtcbiAgICAgIFwiMDFkXCI6IDxXaURheVN1bm55IC8+LFxuICAgICAgXCIwMmRcIjogPFdpRGF5U3VubnlPdmVyY2FzdCAvPixcbiAgICAgIFwiMDNkXCI6IDxXaUNsb3VkIC8+LFxuICAgICAgXCIwNGRcIjogPFdpRGF5Q2xvdWR5IC8+LFxuICAgICAgXCIwOWRcIjogPFdpUmFpbiAvPixcbiAgICAgIFwiMTBkXCI6IDxXaURheVNob3dlcnMgLz4sXG4gICAgICBcIjExZFwiOiA8V2lUaHVuZGVyc3Rvcm0gLz4sXG4gICAgICBcIjEzZFwiOiA8V2lTbm93IC8+LFxuICAgICAgXCI1MGRcIjogPFdpRm9nIC8+LFxuICAgICAgXCIwMW5cIjogPFdpTmlnaHRDbGVhciAvPixcbiAgICAgIFwiMDJuXCI6IDxXaU5pZ2h0UGFydGx5Q2xvdWR5IC8+LFxuICAgICAgXCIwM25cIjogPFdpQ2xvdWQgLz4sXG4gICAgICBcIjA0blwiOiA8V2lOaWdodENsb3VkeSAvPixcbiAgICAgIFwiMDluXCI6IDxXaVJhaW4gLz4sXG4gICAgICBcIjEwblwiOiA8V2lOaWdodFNob3dlcnMgLz4sXG4gICAgICBcIjExblwiOiA8V2lUaHVuZGVyc3Rvcm0gLz4sXG4gICAgICBcIjEzblwiOiA8V2lTbm93IC8+LFxuICAgICAgXCI1MG5cIjogPFdpRm9nIC8+LFxuICAgIH07XG4gICAgcmV0dXJuIGNvbnZlcnRJY29uW2ljb25dO1xuICB9O1xuXG4gIGNvbnN0IGRhdGVDb252ZXJ0ZXIgPSAoVU5JWF90aW1lc3RhbXApID0+IHtcbiAgICBsZXQgYSA9IG5ldyBEYXRlKFVOSVhfdGltZXN0YW1wICogMTAwMCk7XG4gICAgY29uc3QgbW9udGhzID0gW1xuICAgICAgXCJKYW5cIixcbiAgICAgIFwiRmViXCIsXG4gICAgICBcIk1hclwiLFxuICAgICAgXCJBcHJcIixcbiAgICAgIFwiTWF5XCIsXG4gICAgICBcIkp1blwiLFxuICAgICAgXCJKdWxcIixcbiAgICAgIFwiQXVnXCIsXG4gICAgICBcIlNlcFwiLFxuICAgICAgXCJPY3RcIixcbiAgICAgIFwiTm92XCIsXG4gICAgICBcIkRlY1wiLFxuICAgIF07XG4gICAgbGV0IHllYXIgPSBhLmdldEZ1bGxZZWFyKCk7XG4gICAgbGV0IG1vbnRoID0gbW9udGhzW2EuZ2V0TW9udGgoKV07XG4gICAgbGV0IGRheSA9IGEuZ2V0RGF0ZSgpO1xuICAgIGxldCBkYXRlID0gZGF5ICsgXCIgXCIgKyBtb250aCArIFwiIFwiICsgeWVhcjtcblxuICAgIHJldHVybiBkYXRlO1xuICB9O1xuXG4gIGNvbnN0IHRpbWVDb252ZXJ0ZXIgPSAoVU5JWF90aW1lc3RhbXApID0+IHtcbiAgICBsZXQgYSA9IG5ldyBEYXRlKFVOSVhfdGltZXN0YW1wICogMTAwMCk7XG5cbiAgICBsZXQgaG91ciA9IGEuZ2V0SG91cnMoKTtcbiAgICBsZXQgbWluID0gKFwiMFwiICsgYS5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKTtcbiAgICAvLyBsZXQgc2VjID0gYS5nZXRTZWNvbmRzKCk7XG4gICAgbGV0IHRpbWUgPSBob3VyICsgXCI6XCIgKyBtaW47XG5cbiAgICByZXR1cm4gdGltZTtcbiAgfTtcblxuICBjb25zdCBkaXJlY3Rpb25Db252ZXJ0ZXIgPSAoZGVncmVlcykgPT4ge1xuICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBbXCJOXCIsIFwiTkVcIiwgXCJFXCIsIFwiU0VcIiwgXCJTXCIsIFwiU1dcIiwgXCJXXCIsIFwiTldcIl07XG5cbiAgICBsZXQgZGlyZWN0aW9uID0gKGRlZ3JlZXMgKiA4KSAvIDM2MDtcblxuICAgIGRpcmVjdGlvbiA9IE1hdGgucm91bmQoZGlyZWN0aW9uLCAwKTtcblxuICAgIGRpcmVjdGlvbiA9IChkaXJlY3Rpb24gKyA4KSAlIDg7XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uc1tkaXJlY3Rpb25dO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0SG91ckZvcmVjYXN0ID0gYXN5bmMgKGUpID0+IHtcbiAgICAgIGNvbnN0IGFwaV9jYWxsID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT1zeWRuZXksbnN3JmFwcGlkPSR7QVBJX0tFWX1gXG4gICAgICApO1xuXG4gICAgICBjb25zdCBmaXZlSG91ckRhdGEgPSBhd2FpdCBhcGlfY2FsbC5qc29uKCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiR2V0IEhvdXIgRGF0YVwiLCBmaXZlSG91ckRhdGEubGlzdC5zbGljZSgwLCA1KSk7XG5cbiAgICAgIHNldEZpdmVIb3VyKGZpdmVIb3VyRGF0YS5saXN0LnNsaWNlKDAsIDUpKTtcbiAgICB9O1xuICAgIGdldEhvdXJGb3JlY2FzdCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWF0aGVyLWFwcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlYXRoZXItYXBwX190aXRsZVwiPlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIHtjaXR5fSwge2NvdW50cnl9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPE1haW5XaW5kb3dcbiAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICBkYXRlPXtkYXRlfVxuICAgICAgICAgIGRlZ3JlZXM9e2RlZ3JlZXN9XG4gICAgICAgICAgdGVtcGVyYXR1cmU9e3RlbXBlcmF0dXJlfVxuICAgICAgICAgIHdpbmQ9e3dpbmR9XG4gICAgICAgICAgZmVlbHNsaWtlPXtmZWVsc2xpa2V9XG4gICAgICAgICAgaHVtaWRpdHk9e2h1bWlkaXR5fVxuICAgICAgICAgIHByZXNzdXJlPXtwcmVzc3VyZX1cbiAgICAgICAgLz5cblxuICAgICAgICA8Rm9yZWNhc3RcbiAgICAgICAgICBmaXZlSG91cj17Zml2ZUhvdXJ9XG4gICAgICAgICAgaWNvbkNvbnZlcnRlcj17aWNvbkNvbnZlcnRlcn1cbiAgICAgICAgICB0aW1lQ29udmVydGVyPXt0aW1lQ29udmVydGVyfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIldpRGF5U3VubnkiLCJXaU5pZ2h0Q2xlYXIiLCJXaURheVN1bm55T3ZlcmNhc3QiLCJXaU5pZ2h0UGFydGx5Q2xvdWR5IiwiV2lDbG91ZCIsIldpRGF5Q2xvdWR5IiwiV2lOaWdodENsb3VkeSIsIldpUmFpbiIsIldpRGF5U2hvd2VycyIsIldpTmlnaHRTaG93ZXJzIiwiV2lUaHVuZGVyc3Rvcm0iLCJXaVNub3ciLCJXaUZvZyIsIk1haW5XaW5kb3ciLCJGb3JlY2FzdCIsIkFQSV9LRVkiLCJBcHAiLCJiYWNrZ3JvdW5kIiwic2V0QmFja2dyb3VuZCIsImNpdHkiLCJzZXRDaXR5IiwiY291bnRyeSIsInNldENvdW50cnkiLCJkYXRlIiwic2V0RGF0ZSIsImRlZ3JlZXMiLCJzZXREZWdyZWVzIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImZlZWxzbGlrZSIsInNldEZlZWxzbGlrZSIsImh1bWlkaXR5Iiwic2V0SHVtaWRpdHkiLCJpY29uIiwic2V0SWNvbiIsInByZXNzdXJlIiwic2V0UHJlc3N1cmUiLCJ0ZW1wZXJhdHVyZSIsInNldFRlbXBlcmF0dXJlIiwidGltZSIsInNldFRpbWUiLCJ3aW5kIiwic2V0V2luZCIsImZpdmVIb3VyIiwic2V0Rml2ZUhvdXIiLCJnZXRXZWF0aGVyIiwiZSIsImZldGNoIiwiYXBpX2NhbGwiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kQ29udmVydGVyIiwid2VhdGhlciIsIm5hbWUiLCJzeXMiLCJkYXRlQ29udmVydGVyIiwiZHQiLCJkaXJlY3Rpb25Db252ZXJ0ZXIiLCJkZWciLCJtYWluIiwiZmVlbHNfbGlrZSIsImljb25Db252ZXJ0ZXIiLCJNYXRoIiwiZmxvb3IiLCJ0ZW1wIiwidGltZUNvbnZlcnRlciIsInNwZWVkIiwid2VhdGhlckJhY2tncm91bmQiLCJjb252ZXJ0SWNvbiIsIlVOSVhfdGltZXN0YW1wIiwiYSIsIkRhdGUiLCJtb250aHMiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImhvdXIiLCJnZXRIb3VycyIsIm1pbiIsImdldE1pbnV0ZXMiLCJzbGljZSIsImRpcmVjdGlvbnMiLCJkaXJlY3Rpb24iLCJyb3VuZCIsImdldEhvdXJGb3JlY2FzdCIsImZpdmVIb3VyRGF0YSIsImxpc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/weatherApp/WeatherApp.js\n");

/***/ })

});