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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_wi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/wi */ \"./node_modules/react-icons/wi/index.esm.js\");\n/* harmony import */ var _layout_MainWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/MainWindow */ \"./components/layout/MainWindow.js\");\n/* harmony import */ var _layout_Forecast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/Forecast */ \"./components/layout/Forecast.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/garethhind/Documents/Github/weather-app/components/weatherApp/WeatherApp.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar API_KEY = \"4a64ed09d073cdac231c53e1a3b62181\";\nfunction App() {\n  _s();\n\n  var _this = this;\n\n  // Get Weather State\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"sky-gradient-11\"),\n      background = _useState[0],\n      setBackground = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      city = _useState2[0],\n      setCity = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      country = _useState3[0],\n      setCountry = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      date = _useState4[0],\n      setDate = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      degrees = _useState5[0],\n      setDegrees = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      description = _useState6[0],\n      setDescription = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      feelslike = _useState7[0],\n      setFeelslike = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      humidity = _useState8[0],\n      setHumidity = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      icon = _useState9[0],\n      setIcon = _useState9[1];\n\n  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      pressure = _useState10[0],\n      setPressure = _useState10[1];\n\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      temperature = _useState11[0],\n      setTemperature = _useState11[1];\n\n  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      time = _useState12[0],\n      setTime = _useState12[1];\n\n  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      wind = _useState13[0],\n      setWind = _useState13[1]; // Get Five Hour Forecast\n\n\n  var _useState14 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      fiveHour = _useState14[0],\n      setFiveHour = _useState14[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var getWeather = /*#__PURE__*/function () {\n      var _ref = (0,_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {\n        var api_call, data;\n        return _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch(\"https://api.openweathermap.org/data/2.5/weather?q=sydney,au&appid=\".concat(API_KEY, \"&units=metric\"));\n\n              case 2:\n                api_call = _context.sent;\n                _context.next = 5;\n                return api_call.json();\n\n              case 5:\n                data = _context.sent;\n                console.log(\"Get Weather Data\", data);\n                setBackground(backgroundConverter(data.weather[0].icon));\n                setCity(data.name);\n                setCountry(data.sys.country);\n                setDate(dateConverter(data.dt));\n                setDegrees(data.wind.deg);\n                setDescription(data.weather[0].description);\n                setFeelslike(data.main.feels_like);\n                setHumidity(data.main.humidity);\n                setIcon(iconConverter(data.weather[0].icon));\n                setPressure(data.main.pressure);\n                setTemperature(Math.floor(data.main.temp));\n                setTime(timeConverter(data.dt));\n                setWind(data.wind.speed);\n                console.log(degrees);\n\n              case 21:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getWeather(_x) {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    getWeather();\n  }, []);\n\n  var backgroundConverter = function backgroundConverter(icon) {\n    var weatherBackground = {\n      \"01d\": \"sky-gradient-11\",\n      \"02d\": \"sky-gradient-09\",\n      \"03d\": \"sky-gradient-13\",\n      \"04d\": \"sky-gradient-14\",\n      \"09d\": \"sky-gradient-14\",\n      \"10d\": \"sky-gradient-15\",\n      \"11d\": \"sky-gradient-15\",\n      \"13d\": \"sky-gradient-09\",\n      \"50d\": \"sky-gradient-08\",\n      \"01n\": \"sky-gradient-05\",\n      \"02n\": \"sky-gradient-21\",\n      \"03n\": \"sky-gradient-03\",\n      \"04n\": \"sky-gradient-03\",\n      \"09n\": \"sky-gradient-22\",\n      \"10n\": \"sky-gradient-03\",\n      \"11n\": \"sky-gradient-21\",\n      \"13n\": \"sky-gradient-02\",\n      \"50n\": \"sky-gradient-20\"\n    };\n    return weatherBackground[icon];\n  };\n\n  var iconConverter = function iconConverter(icon) {\n    var convertIcon = {\n      \"01d\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiDaySunny, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 14\n      }, _this),\n      \"02d\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiDaySunnyOvercast, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 14\n      }, _this),\n      \"03d\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiCloud, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 14\n      }, _this),\n      \"04d\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiDayCloudy, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 14\n      }, _this),\n      \"09d\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiRain, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 14\n      }, _this),\n      \"10d\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiDayShowers, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 14\n      }, _this),\n      \"11d\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiThunderstorm, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 14\n      }, _this),\n      \"13d\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiSnow, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 14\n      }, _this),\n      \"50d\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiFog, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 14\n      }, _this),\n      \"01n\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiNightClear, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 14\n      }, _this),\n      \"02n\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiNightPartlyCloudy, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 14\n      }, _this),\n      \"03n\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiCloud, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 14\n      }, _this),\n      \"04n\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiNightCloudy, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 14\n      }, _this),\n      \"09n\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiRain, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 14\n      }, _this),\n      \"10n\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiNightShowers, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 14\n      }, _this),\n      \"11n\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiThunderstorm, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 14\n      }, _this),\n      \"13n\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiSnow, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 14\n      }, _this),\n      \"50n\": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_6__.WiFog, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 14\n      }, _this)\n    };\n    return convertIcon[icon];\n  };\n\n  var dateConverter = function dateConverter(UNIX_timestamp) {\n    var a = new Date(UNIX_timestamp * 1000);\n    var months = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"];\n    var year = a.getFullYear();\n    var month = months[a.getMonth()];\n    var day = a.getDate();\n    var date = day + \" \" + month + \" \" + year;\n    return date;\n  };\n\n  var timeConverter = function timeConverter(UNIX_timestamp) {\n    var a = new Date(UNIX_timestamp * 1000);\n    var hour = a.getHours();\n    var min = (\"0\" + a.getMinutes()).slice(-2); // let sec = a.getSeconds();\n\n    var time = hour + \":\" + min;\n    return time;\n  }; // const directionConverter = (degrees) => {\n  //   const directions = [\"N\", \"NE\", \"E\", \"SE\", \"S\", \"SW\", \"W\", \"NW\"];\n  //   let direction = (degrees * 8) / 360;\n  //   direction = Math.round(direction, 0);\n  //   direction = (direction + 8) % 8;\n  //   return directions[direction];\n  // };\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var getHourForecast = /*#__PURE__*/function () {\n      var _ref2 = (0,_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(e) {\n        var api_call, fiveHourData;\n        return _Users_garethhind_Documents_Github_weather_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return fetch(\"https://api.openweathermap.org/data/2.5/forecast?q=sydney,nsw&appid=\".concat(API_KEY));\n\n              case 2:\n                api_call = _context2.sent;\n                _context2.next = 5;\n                return api_call.json();\n\n              case 5:\n                fiveHourData = _context2.sent;\n                console.log(\"Get Hour Data\", fiveHourData.list.slice(0, 5));\n                setFiveHour(fiveHourData.list.slice(0, 5));\n\n              case 8:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function getHourForecast(_x2) {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    getHourForecast();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"screen\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"weather-app\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"weather-app__title\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h1\", {\n          children: [city, \", \", country]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 186,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 185,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_layout_MainWindow__WEBPACK_IMPORTED_MODULE_3__.default, {\n        icon: icon,\n        description: description,\n        date: date,\n        temperature: temperature,\n        wind: wind,\n        feelslike: feelslike,\n        humidity: humidity,\n        pressure: pressure\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 191,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_layout_Forecast__WEBPACK_IMPORTED_MODULE_4__.default, {\n        fiveHour: fiveHour // directionConverter={directionConverter}\n        ,\n        iconConverter: iconConverter,\n        timeConverter: timeConverter\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 202,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 184,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 183,\n    columnNumber: 5\n  }, this);\n}\n\n_s(App, \"pLH90n64BJwjtbDXheUzy7HOamQ=\");\n\n_c = App;\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3dlYXRoZXJBcHAvV2VhdGhlckFwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBZ0JBO0FBQ0E7O0FBRUEsSUFBTWtCLE9BQU8sR0FBRyxrQ0FBaEI7QUFFZSxTQUFTQyxHQUFULEdBQWU7QUFBQTs7QUFBQTs7QUFDNUI7QUFDQSxrQkFBb0NsQiwrQ0FBUSxDQUFDLGlCQUFELENBQTVDO0FBQUEsTUFBT21CLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0EsbUJBQXdCcEIsK0NBQVEsRUFBaEM7QUFBQSxNQUFPcUIsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQThCdEIsK0NBQVEsRUFBdEM7QUFBQSxNQUFPdUIsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBd0J4QiwrQ0FBUSxFQUFoQztBQUFBLE1BQU95QixJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBOEIxQiwrQ0FBUSxFQUF0QztBQUFBLE1BQU8yQixPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUFzQzVCLCtDQUFRLEVBQTlDO0FBQUEsTUFBTzZCLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQWtDOUIsK0NBQVEsRUFBMUM7QUFBQSxNQUFPK0IsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBZ0NoQywrQ0FBUSxFQUF4QztBQUFBLE1BQU9pQyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUF3QmxDLCtDQUFRLEVBQWhDO0FBQUEsTUFBT21DLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG9CQUFnQ3BDLCtDQUFRLEVBQXhDO0FBQUEsTUFBT3FDLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0Esb0JBQXNDdEMsK0NBQVEsQ0FBQyxDQUFELENBQTlDO0FBQUEsTUFBT3VDLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0Esb0JBQXdCeEMsK0NBQVEsRUFBaEM7QUFBQSxNQUFPeUMsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0Esb0JBQXdCMUMsK0NBQVEsRUFBaEM7QUFBQSxNQUFPMkMsSUFBUDtBQUFBLE1BQWFDLE9BQWIsa0JBZDRCLENBZ0I1Qjs7O0FBQ0Esb0JBQWdDNUMsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBTzZDLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBRUE3QyxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNOEMsVUFBVTtBQUFBLGlUQUFHLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ01DLEtBQUssNkVBQzJDaEMsT0FEM0MsbUJBRFg7O0FBQUE7QUFDWGlDLGdCQUFBQSxRQURXO0FBQUE7QUFBQSx1QkFLRUEsUUFBUSxDQUFDQyxJQUFULEVBTEY7O0FBQUE7QUFLWEMsZ0JBQUFBLElBTFc7QUFPakJDLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQ0YsSUFBaEM7QUFFQWhDLGdCQUFBQSxhQUFhLENBQUNtQyxtQkFBbUIsQ0FBQ0gsSUFBSSxDQUFDSSxPQUFMLENBQWEsQ0FBYixFQUFnQnJCLElBQWpCLENBQXBCLENBQWI7QUFDQWIsZ0JBQUFBLE9BQU8sQ0FBQzhCLElBQUksQ0FBQ0ssSUFBTixDQUFQO0FBQ0FqQyxnQkFBQUEsVUFBVSxDQUFDNEIsSUFBSSxDQUFDTSxHQUFMLENBQVNuQyxPQUFWLENBQVY7QUFDQUcsZ0JBQUFBLE9BQU8sQ0FBQ2lDLGFBQWEsQ0FBQ1AsSUFBSSxDQUFDUSxFQUFOLENBQWQsQ0FBUDtBQUNBaEMsZ0JBQUFBLFVBQVUsQ0FBQ3dCLElBQUksQ0FBQ1QsSUFBTCxDQUFVa0IsR0FBWCxDQUFWO0FBQ0EvQixnQkFBQUEsY0FBYyxDQUFDc0IsSUFBSSxDQUFDSSxPQUFMLENBQWEsQ0FBYixFQUFnQjNCLFdBQWpCLENBQWQ7QUFDQUcsZ0JBQUFBLFlBQVksQ0FBQ29CLElBQUksQ0FBQ1UsSUFBTCxDQUFVQyxVQUFYLENBQVo7QUFDQTdCLGdCQUFBQSxXQUFXLENBQUNrQixJQUFJLENBQUNVLElBQUwsQ0FBVTdCLFFBQVgsQ0FBWDtBQUNBRyxnQkFBQUEsT0FBTyxDQUFDNEIsYUFBYSxDQUFDWixJQUFJLENBQUNJLE9BQUwsQ0FBYSxDQUFiLEVBQWdCckIsSUFBakIsQ0FBZCxDQUFQO0FBQ0FHLGdCQUFBQSxXQUFXLENBQUNjLElBQUksQ0FBQ1UsSUFBTCxDQUFVekIsUUFBWCxDQUFYO0FBQ0FHLGdCQUFBQSxjQUFjLENBQUN5QixJQUFJLENBQUNDLEtBQUwsQ0FBV2QsSUFBSSxDQUFDVSxJQUFMLENBQVVLLElBQXJCLENBQUQsQ0FBZDtBQUNBekIsZ0JBQUFBLE9BQU8sQ0FBQzBCLGFBQWEsQ0FBQ2hCLElBQUksQ0FBQ1EsRUFBTixDQUFkLENBQVA7QUFDQWhCLGdCQUFBQSxPQUFPLENBQUNRLElBQUksQ0FBQ1QsSUFBTCxDQUFVMEIsS0FBWCxDQUFQO0FBRUFoQixnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkzQixPQUFaOztBQXZCaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVm9CLFVBQVU7QUFBQTtBQUFBO0FBQUEsT0FBaEI7O0FBeUJBQSxJQUFBQSxVQUFVO0FBQ1gsR0EzQlEsRUEyQk4sRUEzQk0sQ0FBVDs7QUE2QkEsTUFBTVEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDcEIsSUFBRCxFQUFVO0FBQ3BDLFFBQU1tQyxpQkFBaUIsR0FBRztBQUN4QixhQUFPLGlCQURpQjtBQUV4QixhQUFPLGlCQUZpQjtBQUd4QixhQUFPLGlCQUhpQjtBQUl4QixhQUFPLGlCQUppQjtBQUt4QixhQUFPLGlCQUxpQjtBQU14QixhQUFPLGlCQU5pQjtBQU94QixhQUFPLGlCQVBpQjtBQVF4QixhQUFPLGlCQVJpQjtBQVN4QixhQUFPLGlCQVRpQjtBQVV4QixhQUFPLGlCQVZpQjtBQVd4QixhQUFPLGlCQVhpQjtBQVl4QixhQUFPLGlCQVppQjtBQWF4QixhQUFPLGlCQWJpQjtBQWN4QixhQUFPLGlCQWRpQjtBQWV4QixhQUFPLGlCQWZpQjtBQWdCeEIsYUFBTyxpQkFoQmlCO0FBaUJ4QixhQUFPLGlCQWpCaUI7QUFrQnhCLGFBQU87QUFsQmlCLEtBQTFCO0FBcUJBLFdBQU9BLGlCQUFpQixDQUFDbkMsSUFBRCxDQUF4QjtBQUNELEdBdkJEOztBQXlCQSxNQUFNNkIsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDN0IsSUFBRCxFQUFVO0FBQzlCLFFBQU1vQyxXQUFXLEdBQUc7QUFDbEIsMEJBQU8sOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURXO0FBRWxCLDBCQUFPLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGVztBQUdsQiwwQkFBTyw4REFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSFc7QUFJbEIsMEJBQU8sOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpXO0FBS2xCLDBCQUFPLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMVztBQU1sQiwwQkFBTyw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTlc7QUFPbEIsMEJBQU8sOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBXO0FBUWxCLDBCQUFPLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSVztBQVNsQiwwQkFBTyw4REFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVFc7QUFVbEIsMEJBQU8sOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZXO0FBV2xCLDBCQUFPLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYVztBQVlsQiwwQkFBTyw4REFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWlc7QUFhbEIsMEJBQU8sOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJXO0FBY2xCLDBCQUFPLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkVztBQWVsQiwwQkFBTyw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZlc7QUFnQmxCLDBCQUFPLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQlc7QUFpQmxCLDBCQUFPLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQlc7QUFrQmxCLDBCQUFPLDhEQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFsQlcsS0FBcEI7QUFvQkEsV0FBT0EsV0FBVyxDQUFDcEMsSUFBRCxDQUFsQjtBQUNELEdBdEJEOztBQXdCQSxNQUFNd0IsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDYSxjQUFELEVBQW9CO0FBQ3hDLFFBQUlDLENBQUMsR0FBRyxJQUFJQyxJQUFKLENBQVNGLGNBQWMsR0FBRyxJQUExQixDQUFSO0FBQ0EsUUFBTUcsTUFBTSxHQUFHLENBQ2IsS0FEYSxFQUViLEtBRmEsRUFHYixLQUhhLEVBSWIsS0FKYSxFQUtiLEtBTGEsRUFNYixLQU5hLEVBT2IsS0FQYSxFQVFiLEtBUmEsRUFTYixLQVRhLEVBVWIsS0FWYSxFQVdiLEtBWGEsRUFZYixLQVphLENBQWY7QUFjQSxRQUFJQyxJQUFJLEdBQUdILENBQUMsQ0FBQ0ksV0FBRixFQUFYO0FBQ0EsUUFBSUMsS0FBSyxHQUFHSCxNQUFNLENBQUNGLENBQUMsQ0FBQ00sUUFBRixFQUFELENBQWxCO0FBQ0EsUUFBSUMsR0FBRyxHQUFHUCxDQUFDLENBQUNRLE9BQUYsRUFBVjtBQUNBLFFBQUl4RCxJQUFJLEdBQUd1RCxHQUFHLEdBQUcsR0FBTixHQUFZRixLQUFaLEdBQW9CLEdBQXBCLEdBQTBCRixJQUFyQztBQUVBLFdBQU9uRCxJQUFQO0FBQ0QsR0F0QkQ7O0FBd0JBLE1BQU0yQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNJLGNBQUQsRUFBb0I7QUFDeEMsUUFBSUMsQ0FBQyxHQUFHLElBQUlDLElBQUosQ0FBU0YsY0FBYyxHQUFHLElBQTFCLENBQVI7QUFFQSxRQUFJVSxJQUFJLEdBQUdULENBQUMsQ0FBQ1UsUUFBRixFQUFYO0FBQ0EsUUFBSUMsR0FBRyxHQUFHLENBQUMsTUFBTVgsQ0FBQyxDQUFDWSxVQUFGLEVBQVAsRUFBdUJDLEtBQXZCLENBQTZCLENBQUMsQ0FBOUIsQ0FBVixDQUp3QyxDQUt4Qzs7QUFDQSxRQUFJN0MsSUFBSSxHQUFHeUMsSUFBSSxHQUFHLEdBQVAsR0FBYUUsR0FBeEI7QUFFQSxXQUFPM0MsSUFBUDtBQUNELEdBVEQsQ0F6SDRCLENBb0k1QjtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTs7O0FBRUF4QyxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNc0YsZUFBZTtBQUFBLGtUQUFHLGtCQUFPdkMsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNDQyxLQUFLLCtFQUM2Q2hDLE9BRDdDLEVBRE47O0FBQUE7QUFDaEJpQyxnQkFBQUEsUUFEZ0I7QUFBQTtBQUFBLHVCQUtLQSxRQUFRLENBQUNDLElBQVQsRUFMTDs7QUFBQTtBQUtoQnFDLGdCQUFBQSxZQUxnQjtBQU90Qm5DLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCa0MsWUFBWSxDQUFDQyxJQUFiLENBQWtCSCxLQUFsQixDQUF3QixDQUF4QixFQUEyQixDQUEzQixDQUE3QjtBQUVBeEMsZ0JBQUFBLFdBQVcsQ0FBQzBDLFlBQVksQ0FBQ0MsSUFBYixDQUFrQkgsS0FBbEIsQ0FBd0IsQ0FBeEIsRUFBMkIsQ0FBM0IsQ0FBRCxDQUFYOztBQVRzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFmQyxlQUFlO0FBQUE7QUFBQTtBQUFBLE9BQXJCOztBQVdBQSxJQUFBQSxlQUFlO0FBQ2hCLEdBYlEsRUFhTixFQWJNLENBQVQ7QUFlQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxvQkFBZjtBQUFBLCtCQUNFO0FBQUEscUJBQ0dsRSxJQURILFFBQ1dFLE9BRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBT0UsOERBQUMsdURBQUQ7QUFDRSxZQUFJLEVBQUVZLElBRFI7QUFFRSxtQkFBVyxFQUFFTixXQUZmO0FBR0UsWUFBSSxFQUFFSixJQUhSO0FBSUUsbUJBQVcsRUFBRWMsV0FKZjtBQUtFLFlBQUksRUFBRUksSUFMUjtBQU1FLGlCQUFTLEVBQUVaLFNBTmI7QUFPRSxnQkFBUSxFQUFFRSxRQVBaO0FBUUUsZ0JBQVEsRUFBRUk7QUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFrQkUsOERBQUMscURBQUQ7QUFDRSxnQkFBUSxFQUFFUSxRQURaLENBRUU7QUFGRjtBQUdFLHFCQUFhLEVBQUVtQixhQUhqQjtBQUlFLHFCQUFhLEVBQUVJO0FBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkJEOztHQTVMdUJsRDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy93ZWF0aGVyQXBwL1dlYXRoZXJBcHAuanM/ZTRlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgV2lEYXlTdW5ueSxcbiAgV2lOaWdodENsZWFyLFxuICBXaURheVN1bm55T3ZlcmNhc3QsXG4gIFdpTmlnaHRQYXJ0bHlDbG91ZHksXG4gIFdpQ2xvdWQsXG4gIFdpRGF5Q2xvdWR5LFxuICBXaU5pZ2h0Q2xvdWR5LFxuICBXaVJhaW4sXG4gIFdpRGF5U2hvd2VycyxcbiAgV2lOaWdodFNob3dlcnMsXG4gIFdpVGh1bmRlcnN0b3JtLFxuICBXaVNub3csXG4gIFdpRm9nLFxufSBmcm9tIFwicmVhY3QtaWNvbnMvd2lcIjtcblxuaW1wb3J0IE1haW5XaW5kb3cgZnJvbSBcIi4uL2xheW91dC9NYWluV2luZG93XCI7XG5pbXBvcnQgRm9yZWNhc3QgZnJvbSBcIi4uL2xheW91dC9Gb3JlY2FzdFwiO1xuXG5jb25zdCBBUElfS0VZID0gXCI0YTY0ZWQwOWQwNzNjZGFjMjMxYzUzZTFhM2I2MjE4MVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIC8vIEdldCBXZWF0aGVyIFN0YXRlXG4gIGNvbnN0IFtiYWNrZ3JvdW5kLCBzZXRCYWNrZ3JvdW5kXSA9IHVzZVN0YXRlKFwic2t5LWdyYWRpZW50LTExXCIpO1xuICBjb25zdCBbY2l0eSwgc2V0Q2l0eV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbY291bnRyeSwgc2V0Q291bnRyeV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbZGVncmVlcywgc2V0RGVncmVlc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtmZWVsc2xpa2UsIHNldEZlZWxzbGlrZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbaHVtaWRpdHksIHNldEh1bWlkaXR5XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtpY29uLCBzZXRJY29uXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtwcmVzc3VyZSwgc2V0UHJlc3N1cmVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3RlbXBlcmF0dXJlLCBzZXRUZW1wZXJhdHVyZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3dpbmQsIHNldFdpbmRdID0gdXNlU3RhdGUoKTtcblxuICAvLyBHZXQgRml2ZSBIb3VyIEZvcmVjYXN0XG4gIGNvbnN0IFtmaXZlSG91ciwgc2V0Rml2ZUhvdXJdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChlKSA9PiB7XG4gICAgICBjb25zdCBhcGlfY2FsbCA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1zeWRuZXksYXUmYXBwaWQ9JHtBUElfS0VZfSZ1bml0cz1tZXRyaWNgXG4gICAgICApO1xuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpX2NhbGwuanNvbigpO1xuXG4gICAgICBjb25zb2xlLmxvZyhcIkdldCBXZWF0aGVyIERhdGFcIiwgZGF0YSk7XG5cbiAgICAgIHNldEJhY2tncm91bmQoYmFja2dyb3VuZENvbnZlcnRlcihkYXRhLndlYXRoZXJbMF0uaWNvbikpO1xuICAgICAgc2V0Q2l0eShkYXRhLm5hbWUpO1xuICAgICAgc2V0Q291bnRyeShkYXRhLnN5cy5jb3VudHJ5KTtcbiAgICAgIHNldERhdGUoZGF0ZUNvbnZlcnRlcihkYXRhLmR0KSk7XG4gICAgICBzZXREZWdyZWVzKGRhdGEud2luZC5kZWcpO1xuICAgICAgc2V0RGVzY3JpcHRpb24oZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKTtcbiAgICAgIHNldEZlZWxzbGlrZShkYXRhLm1haW4uZmVlbHNfbGlrZSk7XG4gICAgICBzZXRIdW1pZGl0eShkYXRhLm1haW4uaHVtaWRpdHkpO1xuICAgICAgc2V0SWNvbihpY29uQ29udmVydGVyKGRhdGEud2VhdGhlclswXS5pY29uKSk7XG4gICAgICBzZXRQcmVzc3VyZShkYXRhLm1haW4ucHJlc3N1cmUpO1xuICAgICAgc2V0VGVtcGVyYXR1cmUoTWF0aC5mbG9vcihkYXRhLm1haW4udGVtcCkpO1xuICAgICAgc2V0VGltZSh0aW1lQ29udmVydGVyKGRhdGEuZHQpKTtcbiAgICAgIHNldFdpbmQoZGF0YS53aW5kLnNwZWVkKTtcblxuICAgICAgY29uc29sZS5sb2coZGVncmVlcyk7XG4gICAgfTtcbiAgICBnZXRXZWF0aGVyKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBiYWNrZ3JvdW5kQ29udmVydGVyID0gKGljb24pID0+IHtcbiAgICBjb25zdCB3ZWF0aGVyQmFja2dyb3VuZCA9IHtcbiAgICAgIFwiMDFkXCI6IFwic2t5LWdyYWRpZW50LTExXCIsXG4gICAgICBcIjAyZFwiOiBcInNreS1ncmFkaWVudC0wOVwiLFxuICAgICAgXCIwM2RcIjogXCJza3ktZ3JhZGllbnQtMTNcIixcbiAgICAgIFwiMDRkXCI6IFwic2t5LWdyYWRpZW50LTE0XCIsXG4gICAgICBcIjA5ZFwiOiBcInNreS1ncmFkaWVudC0xNFwiLFxuICAgICAgXCIxMGRcIjogXCJza3ktZ3JhZGllbnQtMTVcIixcbiAgICAgIFwiMTFkXCI6IFwic2t5LWdyYWRpZW50LTE1XCIsXG4gICAgICBcIjEzZFwiOiBcInNreS1ncmFkaWVudC0wOVwiLFxuICAgICAgXCI1MGRcIjogXCJza3ktZ3JhZGllbnQtMDhcIixcbiAgICAgIFwiMDFuXCI6IFwic2t5LWdyYWRpZW50LTA1XCIsXG4gICAgICBcIjAyblwiOiBcInNreS1ncmFkaWVudC0yMVwiLFxuICAgICAgXCIwM25cIjogXCJza3ktZ3JhZGllbnQtMDNcIixcbiAgICAgIFwiMDRuXCI6IFwic2t5LWdyYWRpZW50LTAzXCIsXG4gICAgICBcIjA5blwiOiBcInNreS1ncmFkaWVudC0yMlwiLFxuICAgICAgXCIxMG5cIjogXCJza3ktZ3JhZGllbnQtMDNcIixcbiAgICAgIFwiMTFuXCI6IFwic2t5LWdyYWRpZW50LTIxXCIsXG4gICAgICBcIjEzblwiOiBcInNreS1ncmFkaWVudC0wMlwiLFxuICAgICAgXCI1MG5cIjogXCJza3ktZ3JhZGllbnQtMjBcIixcbiAgICB9O1xuXG4gICAgcmV0dXJuIHdlYXRoZXJCYWNrZ3JvdW5kW2ljb25dO1xuICB9O1xuXG4gIGNvbnN0IGljb25Db252ZXJ0ZXIgPSAoaWNvbikgPT4ge1xuICAgIGNvbnN0IGNvbnZlcnRJY29uID0ge1xuICAgICAgXCIwMWRcIjogPFdpRGF5U3VubnkgLz4sXG4gICAgICBcIjAyZFwiOiA8V2lEYXlTdW5ueU92ZXJjYXN0IC8+LFxuICAgICAgXCIwM2RcIjogPFdpQ2xvdWQgLz4sXG4gICAgICBcIjA0ZFwiOiA8V2lEYXlDbG91ZHkgLz4sXG4gICAgICBcIjA5ZFwiOiA8V2lSYWluIC8+LFxuICAgICAgXCIxMGRcIjogPFdpRGF5U2hvd2VycyAvPixcbiAgICAgIFwiMTFkXCI6IDxXaVRodW5kZXJzdG9ybSAvPixcbiAgICAgIFwiMTNkXCI6IDxXaVNub3cgLz4sXG4gICAgICBcIjUwZFwiOiA8V2lGb2cgLz4sXG4gICAgICBcIjAxblwiOiA8V2lOaWdodENsZWFyIC8+LFxuICAgICAgXCIwMm5cIjogPFdpTmlnaHRQYXJ0bHlDbG91ZHkgLz4sXG4gICAgICBcIjAzblwiOiA8V2lDbG91ZCAvPixcbiAgICAgIFwiMDRuXCI6IDxXaU5pZ2h0Q2xvdWR5IC8+LFxuICAgICAgXCIwOW5cIjogPFdpUmFpbiAvPixcbiAgICAgIFwiMTBuXCI6IDxXaU5pZ2h0U2hvd2VycyAvPixcbiAgICAgIFwiMTFuXCI6IDxXaVRodW5kZXJzdG9ybSAvPixcbiAgICAgIFwiMTNuXCI6IDxXaVNub3cgLz4sXG4gICAgICBcIjUwblwiOiA8V2lGb2cgLz4sXG4gICAgfTtcbiAgICByZXR1cm4gY29udmVydEljb25baWNvbl07XG4gIH07XG5cbiAgY29uc3QgZGF0ZUNvbnZlcnRlciA9IChVTklYX3RpbWVzdGFtcCkgPT4ge1xuICAgIGxldCBhID0gbmV3IERhdGUoVU5JWF90aW1lc3RhbXAgKiAxMDAwKTtcbiAgICBjb25zdCBtb250aHMgPSBbXG4gICAgICBcIkphblwiLFxuICAgICAgXCJGZWJcIixcbiAgICAgIFwiTWFyXCIsXG4gICAgICBcIkFwclwiLFxuICAgICAgXCJNYXlcIixcbiAgICAgIFwiSnVuXCIsXG4gICAgICBcIkp1bFwiLFxuICAgICAgXCJBdWdcIixcbiAgICAgIFwiU2VwXCIsXG4gICAgICBcIk9jdFwiLFxuICAgICAgXCJOb3ZcIixcbiAgICAgIFwiRGVjXCIsXG4gICAgXTtcbiAgICBsZXQgeWVhciA9IGEuZ2V0RnVsbFllYXIoKTtcbiAgICBsZXQgbW9udGggPSBtb250aHNbYS5nZXRNb250aCgpXTtcbiAgICBsZXQgZGF5ID0gYS5nZXREYXRlKCk7XG4gICAgbGV0IGRhdGUgPSBkYXkgKyBcIiBcIiArIG1vbnRoICsgXCIgXCIgKyB5ZWFyO1xuXG4gICAgcmV0dXJuIGRhdGU7XG4gIH07XG5cbiAgY29uc3QgdGltZUNvbnZlcnRlciA9IChVTklYX3RpbWVzdGFtcCkgPT4ge1xuICAgIGxldCBhID0gbmV3IERhdGUoVU5JWF90aW1lc3RhbXAgKiAxMDAwKTtcblxuICAgIGxldCBob3VyID0gYS5nZXRIb3VycygpO1xuICAgIGxldCBtaW4gPSAoXCIwXCIgKyBhLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpO1xuICAgIC8vIGxldCBzZWMgPSBhLmdldFNlY29uZHMoKTtcbiAgICBsZXQgdGltZSA9IGhvdXIgKyBcIjpcIiArIG1pbjtcblxuICAgIHJldHVybiB0aW1lO1xuICB9O1xuXG4gIC8vIGNvbnN0IGRpcmVjdGlvbkNvbnZlcnRlciA9IChkZWdyZWVzKSA9PiB7XG4gIC8vICAgY29uc3QgZGlyZWN0aW9ucyA9IFtcIk5cIiwgXCJORVwiLCBcIkVcIiwgXCJTRVwiLCBcIlNcIiwgXCJTV1wiLCBcIldcIiwgXCJOV1wiXTtcblxuICAvLyAgIGxldCBkaXJlY3Rpb24gPSAoZGVncmVlcyAqIDgpIC8gMzYwO1xuXG4gIC8vICAgZGlyZWN0aW9uID0gTWF0aC5yb3VuZChkaXJlY3Rpb24sIDApO1xuXG4gIC8vICAgZGlyZWN0aW9uID0gKGRpcmVjdGlvbiArIDgpICUgODtcblxuICAvLyAgIHJldHVybiBkaXJlY3Rpb25zW2RpcmVjdGlvbl07XG4gIC8vIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRIb3VyRm9yZWNhc3QgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgY29uc3QgYXBpX2NhbGwgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPXN5ZG5leSxuc3cmYXBwaWQ9JHtBUElfS0VZfWBcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGZpdmVIb3VyRGF0YSA9IGF3YWl0IGFwaV9jYWxsLmpzb24oKTtcblxuICAgICAgY29uc29sZS5sb2coXCJHZXQgSG91ciBEYXRhXCIsIGZpdmVIb3VyRGF0YS5saXN0LnNsaWNlKDAsIDUpKTtcblxuICAgICAgc2V0Rml2ZUhvdXIoZml2ZUhvdXJEYXRhLmxpc3Quc2xpY2UoMCwgNSkpO1xuICAgIH07XG4gICAgZ2V0SG91ckZvcmVjYXN0KCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlYXRoZXItYXBwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VhdGhlci1hcHBfX3RpdGxlXCI+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAge2NpdHl9LCB7Y291bnRyeX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8TWFpbldpbmRvd1xuICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIGRhdGU9e2RhdGV9XG4gICAgICAgICAgdGVtcGVyYXR1cmU9e3RlbXBlcmF0dXJlfVxuICAgICAgICAgIHdpbmQ9e3dpbmR9XG4gICAgICAgICAgZmVlbHNsaWtlPXtmZWVsc2xpa2V9XG4gICAgICAgICAgaHVtaWRpdHk9e2h1bWlkaXR5fVxuICAgICAgICAgIHByZXNzdXJlPXtwcmVzc3VyZX1cbiAgICAgICAgLz5cblxuICAgICAgICA8Rm9yZWNhc3RcbiAgICAgICAgICBmaXZlSG91cj17Zml2ZUhvdXJ9XG4gICAgICAgICAgLy8gZGlyZWN0aW9uQ29udmVydGVyPXtkaXJlY3Rpb25Db252ZXJ0ZXJ9XG4gICAgICAgICAgaWNvbkNvbnZlcnRlcj17aWNvbkNvbnZlcnRlcn1cbiAgICAgICAgICB0aW1lQ29udmVydGVyPXt0aW1lQ29udmVydGVyfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIldpRGF5U3VubnkiLCJXaU5pZ2h0Q2xlYXIiLCJXaURheVN1bm55T3ZlcmNhc3QiLCJXaU5pZ2h0UGFydGx5Q2xvdWR5IiwiV2lDbG91ZCIsIldpRGF5Q2xvdWR5IiwiV2lOaWdodENsb3VkeSIsIldpUmFpbiIsIldpRGF5U2hvd2VycyIsIldpTmlnaHRTaG93ZXJzIiwiV2lUaHVuZGVyc3Rvcm0iLCJXaVNub3ciLCJXaUZvZyIsIk1haW5XaW5kb3ciLCJGb3JlY2FzdCIsIkFQSV9LRVkiLCJBcHAiLCJiYWNrZ3JvdW5kIiwic2V0QmFja2dyb3VuZCIsImNpdHkiLCJzZXRDaXR5IiwiY291bnRyeSIsInNldENvdW50cnkiLCJkYXRlIiwic2V0RGF0ZSIsImRlZ3JlZXMiLCJzZXREZWdyZWVzIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImZlZWxzbGlrZSIsInNldEZlZWxzbGlrZSIsImh1bWlkaXR5Iiwic2V0SHVtaWRpdHkiLCJpY29uIiwic2V0SWNvbiIsInByZXNzdXJlIiwic2V0UHJlc3N1cmUiLCJ0ZW1wZXJhdHVyZSIsInNldFRlbXBlcmF0dXJlIiwidGltZSIsInNldFRpbWUiLCJ3aW5kIiwic2V0V2luZCIsImZpdmVIb3VyIiwic2V0Rml2ZUhvdXIiLCJnZXRXZWF0aGVyIiwiZSIsImZldGNoIiwiYXBpX2NhbGwiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kQ29udmVydGVyIiwid2VhdGhlciIsIm5hbWUiLCJzeXMiLCJkYXRlQ29udmVydGVyIiwiZHQiLCJkZWciLCJtYWluIiwiZmVlbHNfbGlrZSIsImljb25Db252ZXJ0ZXIiLCJNYXRoIiwiZmxvb3IiLCJ0ZW1wIiwidGltZUNvbnZlcnRlciIsInNwZWVkIiwid2VhdGhlckJhY2tncm91bmQiLCJjb252ZXJ0SWNvbiIsIlVOSVhfdGltZXN0YW1wIiwiYSIsIkRhdGUiLCJtb250aHMiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImhvdXIiLCJnZXRIb3VycyIsIm1pbiIsImdldE1pbnV0ZXMiLCJzbGljZSIsImdldEhvdXJGb3JlY2FzdCIsImZpdmVIb3VyRGF0YSIsImxpc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/weatherApp/WeatherApp.js\n");

/***/ })

});