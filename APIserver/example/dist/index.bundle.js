module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);\n/* config.js */\n // require and configure dotenv, will load vars in .env in process.env\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconst envVarSchema = joi__WEBPACK_IMPORTED_MODULE_0___default.a.object().keys({\n  NODE_ENV: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().default('development').allow(['development', 'production']),\n  // 字串且預設值為development 並只允許兩種參數\n  PORT: joi__WEBPACK_IMPORTED_MODULE_0___default.a.number().default(8080),\n  // 數字且預設值為 8080\n  MYSQL_PORT: joi__WEBPACK_IMPORTED_MODULE_0___default.a.number().default(3306),\n  // 數字且預設值為3306\n  MYSQL_HOST: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().default('127.0.0.1'),\n  // 字串取預設值為127.0.0.1\n  MYSQL_USER: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string(),\n  // 字串\n  MYSQL_PASS: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string(),\n  // 字串\n  MYSQL_NAME: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string(),\n  // 字串\n  VERSION: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string() // 字串\n\n}).unknown().required(); // process.env 撈取 .env 內的變數做 joi 驗證\n\nconst {\n  error,\n  value: envVars\n} = joi__WEBPACK_IMPORTED_MODULE_0___default.a.validate(process.env, envVarSchema);\n\nif (error) {\n  throw new Error(`Config validation error: ${error.message}`);\n}\n\nconst config = {\n  version: envVars.VERSION,\n  // API版本\n  env: envVars.NODE_ENV,\n  // 開發模式(development、production)\n  port: envVars.PORT,\n  // API阜號\n  mysqlPort: envVars.MYSQL_PORT,\n  // 連接阜號(MYSQL_PORT)\n  mysqlHost: envVars.MYSQL_HOST,\n  // 主機名稱 (MYSQL_HOST)\n  mysqlUserName: envVars.MYSQL_USER,\n  // 用戶名稱 (MYSQL_USER)\n  mysqlPass: envVars.MYSQL_PASS,\n  // 資料庫密碼(MYSQL_PASS)\n  mysqlDatabase: envVars.MYSQL_DATABASE // 資料庫名稱(MYSQL_DATABASE)\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (config); // 匯出共用\n\n//# sourceURL=webpack:///./src/config/config.js?");

/***/ }),

/***/ "./src/config/express.js":
/*!*******************************!*\
  !*** ./src/config/express.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express-validation */ \"express-validation\");\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express_validation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config */ \"./src/config/config.js\");\n/* harmony import */ var _server_helper_APIError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../server/helper/APIError */ \"./src/server/helper/APIError.js\");\n/* harmony import */ var _server_routes_index_route__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../server/routes/index.route */ \"./src/server/routes/index.route.js\");\n\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()(); // parse body params and attache them to req.body\n\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({\n  extended: true\n})); // enable CORS - Cross Origin Resource Sharing\n\napp.use(cors__WEBPACK_IMPORTED_MODULE_2___default()()); // http request logger middleware for node.js\n\napp.use(morgan__WEBPACK_IMPORTED_MODULE_3___default()('dev'));\n/* get home page. */\n\napp.get('/', (req, res) => {\n  res.send(`server started on  port http://127.0.0.1:${_config__WEBPACK_IMPORTED_MODULE_6__[\"default\"].port} (${_config__WEBPACK_IMPORTED_MODULE_6__[\"default\"].env})`);\n});\napp.use('/api', _server_routes_index_route__WEBPACK_IMPORTED_MODULE_8__[\"default\"]); // if error is not an instanceOf APIError, convert it.\n\napp.use((err, req, res, next) => {\n  let errorMessage;\n  let errorCode;\n  let errorStatus; // express validation error 所有傳入參數驗證錯誤\n\n  if (err instanceof express_validation__WEBPACK_IMPORTED_MODULE_4___default.a.ValidationError) {\n    if (err.errors[0].location === 'query' || err.errors[0].location === 'body') {\n      errorMessage = err.errors[0].messages;\n      errorCode = 400;\n      errorStatus = http_status__WEBPACK_IMPORTED_MODULE_5___default.a.BAD_REQUEST;\n    }\n\n    const error = new _server_helper_APIError__WEBPACK_IMPORTED_MODULE_7__[\"default\"](errorMessage, errorStatus, true, errorCode);\n    return next(error);\n  }\n\n  return next(err);\n}); // error handler, send stacktrace only during development 錯誤後最後才跑這邊\n\napp.use((err, req, res, next) => {\n  res.status(err.status).json({\n    message: err.isPublic ? err.message : http_status__WEBPACK_IMPORTED_MODULE_5___default.a[err.status],\n    code: err.code ? err.code : http_status__WEBPACK_IMPORTED_MODULE_5___default.a[err.status],\n    stack: _config__WEBPACK_IMPORTED_MODULE_6__[\"default\"].env === 'development' ? err.stack : {}\n  });\n  next();\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./src/config/express.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/config */ \"./src/config/config.js\");\n/* harmony import */ var _config_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/express */ \"./src/config/express.js\");\n\n\n\nif (!module.parent) {\n  // listen on port config.port\n  _config_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listen(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, () => {\n    console.log(`server started on  port http://127.0.0.1:${_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port} (${_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env})`);\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_config_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/server/controllers/comment.controlloer.js":
/*!*******************************************************!*\
  !*** ./src/server/controllers/comment.controlloer.js ***!
  \*******************************************************/
/*! exports provided: getComment, postComment, likeComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getComment\", function() { return getComment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postComment\", function() { return postComment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"likeComment\", function() { return likeComment; });\n/* harmony import */ var _modules_comment_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/comment.module */ \"./src/server/modules/comment.module.js\");\n\nconst getComment = (req, res, next) => {\n  const newsid = req.params.newsid;\n  _modules_comment_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getComment(newsid).then(result => {\n    res.send(result);\n  }).catch(err => {\n    next(err);\n  });\n};\nconst postComment = (req, res, next) => {\n  const commentInfo = req.body;\n  _modules_comment_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].postComment(commentInfo).then(result => {\n    res.send(result);\n  }).catch(err => {\n    next(err);\n  });\n};\nconst likeComment = (req, res, next) => {\n  const commentInfo = req.body;\n  _modules_comment_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].likeComment(commentInfo).then(result => {\n    res.send(result);\n  }).catch(err => {\n    next(err);\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getComment,\n  postComment,\n  likeComment\n});\n\n//# sourceURL=webpack:///./src/server/controllers/comment.controlloer.js?");

/***/ }),

/***/ "./src/server/controllers/keyword.controller.js":
/*!******************************************************!*\
  !*** ./src/server/controllers/keyword.controller.js ***!
  \******************************************************/
/*! exports provided: postKeyword, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postKeyword\", function() { return postKeyword; });\n/* harmony import */ var _modules_keyword_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/keyword.module */ \"./src/server/modules/keyword.module.js\");\n\nconst postKeyword = (req, res, next) => {\n  const newsInfo = req.body;\n  _modules_keyword_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].postKeyword(newsInfo).then(result => {\n    res.send(result);\n  }).catch(err => {\n    next(err);\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  postKeyword\n});\n\n//# sourceURL=webpack:///./src/server/controllers/keyword.controller.js?");

/***/ }),

/***/ "./src/server/controllers/newsDetail.controller.js":
/*!*********************************************************!*\
  !*** ./src/server/controllers/newsDetail.controller.js ***!
  \*********************************************************/
/*! exports provided: getNewsDetail, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNewsDetail\", function() { return getNewsDetail; });\n/* harmony import */ var _modules_newsDetail_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/newsDetail.module */ \"./src/server/modules/newsDetail.module.js\");\n\nconst getNewsDetail = (req, res, next) => {\n  const newsId = req.params.newsId;\n  _modules_newsDetail_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findNewsDetail(newsId).then(result => {\n    res.send(result);\n  }).catch(err => {\n    next(err);\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getNewsDetail\n});\n\n//# sourceURL=webpack:///./src/server/controllers/newsDetail.controller.js?");

/***/ }),

/***/ "./src/server/controllers/popular.controller.js":
/*!******************************************************!*\
  !*** ./src/server/controllers/popular.controller.js ***!
  \******************************************************/
/*! exports provided: getPopularNewsInfo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPopularNewsInfo\", function() { return getPopularNewsInfo; });\n/* harmony import */ var _modules_popular_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/popular.module */ \"./src/server/modules/popular.module.js\");\n\nconst getPopularNewsInfo = (req, res, next) => {\n  _modules_popular_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findPopularNewsInfo().then(result => {\n    res.send(result);\n  }).catch(err => {\n    next(err);\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getPopularNewsInfo\n});\n\n//# sourceURL=webpack:///./src/server/controllers/popular.controller.js?");

/***/ }),

/***/ "./src/server/controllers/process.controller.js":
/*!******************************************************!*\
  !*** ./src/server/controllers/process.controller.js ***!
  \******************************************************/
/*! exports provided: getAllNews, postSummary, postReliability, postPopularity, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllNews\", function() { return getAllNews; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postSummary\", function() { return postSummary; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postReliability\", function() { return postReliability; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postPopularity\", function() { return postPopularity; });\n/* harmony import */ var _modules_process_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/process.module */ \"./src/server/modules/process.module.js\");\n\nconst getAllNews = (req, res, next) => {\n  const day = req.params.day;\n  _modules_process_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findAllNews(day).then(result => {\n    res.send(result);\n  }).catch(err => {\n    next(err);\n  });\n};\nconst postSummary = (req, res, next) => {\n  const Summary = req.body;\n  _modules_process_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].postSummary(Summary).then(result => {\n    res.send(result);\n  }).catch(err => {\n    next(err);\n  });\n};\nconst postReliability = (req, res, next) => {\n  const Reliability = req.body;\n  _modules_process_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].postReliability(Reliability).then(result => {\n    res.send(result);\n  }).catch(err => {\n    next(err);\n  });\n};\nconst postPopularity = (req, res, next) => {\n  const Popularity = req.body;\n  _modules_process_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].postPopularity(Popularity).then(result => {\n    res.send(result);\n  }).catch(err => {\n    next(err);\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getAllNews,\n  postSummary,\n  postReliability,\n  postPopularity\n});\n\n//# sourceURL=webpack:///./src/server/controllers/process.controller.js?");

/***/ }),

/***/ "./src/server/controllers/search.controller.js":
/*!*****************************************************!*\
  !*** ./src/server/controllers/search.controller.js ***!
  \*****************************************************/
/*! exports provided: getNewsByClass, getNewsByKeyword, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNewsByClass\", function() { return getNewsByClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNewsByKeyword\", function() { return getNewsByKeyword; });\n/* harmony import */ var _modules_search_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/search.module */ \"./src/server/modules/search.module.js\");\n\nconst getNewsByClass = (req, res, next) => {\n  const classification = req.params.class;\n  _modules_search_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findNewsByClass(classification).then(result => {\n    res.send(result);\n  }).catch(err => {\n    next(err);\n  });\n};\nconst getNewsByKeyword = (req, res, next) => {\n  const keyword = req.params.keyword;\n  _modules_search_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findNewsByKeyword(keyword).then(result => {\n    res.send(result);\n  }).catch(err => {\n    next(err);\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getNewsByClass,\n  getNewsByKeyword\n});\n\n//# sourceURL=webpack:///./src/server/controllers/search.controller.js?");

/***/ }),

/***/ "./src/server/controllers/test.controller.js":
/*!***************************************************!*\
  !*** ./src/server/controllers/test.controller.js ***!
  \***************************************************/
/*! exports provided: get, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\n/* harmony import */ var _modules_test_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/test.module */ \"./src/server/modules/test.module.js\");\n\nconst get = (req, res, next) => {\n  _modules_test_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find().then(result => {\n    res.send(result);\n  }).catch(err => {\n    next(err);\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  get\n});\n\n//# sourceURL=webpack:///./src/server/controllers/test.controller.js?");

/***/ }),

/***/ "./src/server/helper/APIError.js":
/*!***************************************!*\
  !*** ./src/server/helper/APIError.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ExtendableError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExtendableError */ \"./src/server/helper/ExtendableError.js\");\n\n\n/**\r\n * Class representing an API error.\r\n * @extends ExtendableError\r\n */\n\nclass APIError extends _ExtendableError__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  /**\r\n   * Creates an API error.\r\n   * @param {string} message - Error message.\r\n   * @param {number} status - HTTP status code of error.\r\n   * @param {boolean} isPublic - Whether the message should be visible to user or not.\r\n   */\n  constructor(message, status = http_status__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL_SERVER_ERROR, isPublic = false, code) {\n    super(message, status, isPublic, code);\n    this.name = 'APIError';\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (APIError);\n\n//# sourceURL=webpack:///./src/server/helper/APIError.js?");

/***/ }),

/***/ "./src/server/helper/ExtendableError.js":
/*!**********************************************!*\
  !*** ./src/server/helper/ExtendableError.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * @extends Error\r\n */\nclass ExtendableError extends Error {\n  constructor(message, status, isPublic, code) {\n    super(message);\n    this.message = message;\n    this.name = this.constructor.name;\n    this.status = status;\n    this.isPublic = isPublic;\n    this.code = code;\n    this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.\n\n    Error.captureStackTrace(this, this.constructor.name);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExtendableError);\n\n//# sourceURL=webpack:///./src/server/helper/ExtendableError.js?");

/***/ }),

/***/ "./src/server/modules/comment.module.js":
/*!**********************************************!*\
  !*** ./src/server/modules/comment.module.js ***!
  \**********************************************/
/*! exports provided: getComment, postComment, likeComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getComment\", function() { return getComment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postComment\", function() { return postComment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"likeComment\", function() { return likeComment; });\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ \"./src/config/config.js\");\n/* harmony import */ var _helper_APIError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/APIError */ \"./src/server/helper/APIError.js\");\n\n\n\n\nconst connectionPool = mysql__WEBPACK_IMPORTED_MODULE_0___default.a.createPool({\n  connectionLimit: 10,\n  host: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlHost,\n  user: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlUserName,\n  password: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlPass,\n  database: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlDatabase\n});\nconst getComment = newsid => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        let sql = 'SELECT comment, likes, sentiment FROM comments WHERE News_id = ?';\n        connection.query(sql, newsid, (error, result) => {\n          if (error) {\n            console.error('SQL Error: ', error);\n            reject(new _helper_APIError__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('error', http_status__WEBPACK_IMPORTED_MODULE_1___default.a.INTERNAL_SERVER_ERROR, true, 500));\n          } else if (result.length >= 1) {\n            let resultData = {\n              status: true,\n              data: result\n            };\n            resolve(resultData);\n          } else {\n            let resultData = {\n              status: true,\n              data: 'news_id錯誤 or 尚無留言'\n            };\n            resolve(resultData);\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\nconst postComment = commentInfo => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        let sql = 'INSERT INTO comments(News_id, Provenance, Comment) VALUES(?, ?, ?)';\n        connection.query(sql, [commentInfo.newsID, commentInfo.provenance, commentInfo.comment], (error, result) => {\n          if (error) {\n            console.error('SQL Error: ', error);\n            reject(new _helper_APIError__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('error', http_status__WEBPACK_IMPORTED_MODULE_1___default.a.INTERNAL_SERVER_ERROR, true, 500));\n          } else if (result.affectedRows === 1) {\n            resolve({\n              code: 200,\n              message: '評論新增成功！'\n            }); // 寫入成功回傳寫入\n          } else {\n            reject(new _helper_APIError__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('result not found', http_status__WEBPACK_IMPORTED_MODULE_1___default.a.NOT_FOUND, true, 400));\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\nconst likeComment = commentInfo => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        let sql = 'UPDATE comments SET Likes = ? WHERE News_id = ? and Provenance = ? and Comment = ?';\n        connection.query(sql, [commentInfo.like, commentInfo.newsID, commentInfo.provenance, commentInfo.comment], (error, result) => {\n          if (error) {\n            console.error('SQL Error: ', error);\n            reject(new _helper_APIError__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('error', http_status__WEBPACK_IMPORTED_MODULE_1___default.a.INTERNAL_SERVER_ERROR, true, 500));\n          } else if (result.affectedRows === 1) {\n            resolve({\n              code: 200,\n              message: '評論按讚成功！'\n            }); // 寫入成功回傳寫入\n          } else {\n            reject(new _helper_APIError__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('result not found', http_status__WEBPACK_IMPORTED_MODULE_1___default.a.NOT_FOUND, true, 400));\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getComment,\n  postComment,\n  likeComment\n});\n\n//# sourceURL=webpack:///./src/server/modules/comment.module.js?");

/***/ }),

/***/ "./src/server/modules/keyword.module.js":
/*!**********************************************!*\
  !*** ./src/server/modules/keyword.module.js ***!
  \**********************************************/
/*! exports provided: postKeyword, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postKeyword\", function() { return postKeyword; });\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ \"./src/config/config.js\");\n/* harmony import */ var _helper_APIError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/APIError */ \"./src/server/helper/APIError.js\");\n\n\n\n\nconst connectionPool = mysql__WEBPACK_IMPORTED_MODULE_0___default.a.createPool({\n  connectionLimit: 10,\n  host: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlHost,\n  user: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlUserName,\n  password: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlPass,\n  database: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlDatabase\n});\nconst postKeyword = newsInfo => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        let sql = 'INSERT INTO keywords(News_id, Provenance, keyword) VALUES(?, ?, ?)';\n        connection.query(sql, [newsInfo.newsID, newsInfo.provenance, newsInfo.keyword], (error, result) => {\n          if (error) {\n            console.error('SQL Error: ', error);\n            reject(new _helper_APIError__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('error', http_status__WEBPACK_IMPORTED_MODULE_1___default.a.INTERNAL_SERVER_ERROR, true, 500));\n          } else if (result.affectedRows === 1) {\n            resolve({\n              code: 200,\n              message: '關鍵字新增成功！'\n            }); // 寫入成功回傳寫入\n          } else {\n            reject(new _helper_APIError__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('result not found', http_status__WEBPACK_IMPORTED_MODULE_1___default.a.NOT_FOUND, true, 400));\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  postKeyword\n});\n\n//# sourceURL=webpack:///./src/server/modules/keyword.module.js?");

/***/ }),

/***/ "./src/server/modules/newsDetail.module.js":
/*!*************************************************!*\
  !*** ./src/server/modules/newsDetail.module.js ***!
  \*************************************************/
/*! exports provided: findNewsDetail, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findNewsDetail\", function() { return findNewsDetail; });\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ \"./src/config/config.js\");\n/* harmony import */ var _helper_APIError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/APIError */ \"./src/server/helper/APIError.js\");\n\n\n\n\nconst connectionPool = mysql__WEBPACK_IMPORTED_MODULE_0___default.a.createPool({\n  connectionLimit: 10,\n  host: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlHost,\n  user: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlUserName,\n  password: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlPass,\n  database: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlDatabase\n});\nconst findNewsDetail = newsId => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        let sql = 'SELECT News_id, Provenance, Date, Classification, Title, Content, Reliability FROM original NATURAL JOIN processed_data where News_id = ?';\n        connection.query(sql, newsId, (error, NewsResult) => {\n          if (error) {\n            console.error('SQL Error', error);\n            reject(new _helper_APIError__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('error', http_status__WEBPACK_IMPORTED_MODULE_1___default.a.INTERNAL_SERVER_ERROR, true, 500));\n          } else if (NewsResult.length >= 1) {\n            let sql2 = 'SELECT sum(sentiment * (likes+1)) as s, count(*) as c FROM `comments` where News_id = ? and sentiment <> 2';\n            connection.query(sql2, NewsResult[0].News_id, (error, Result) => {\n              if (error) {\n                console.error('SQL Error', error);\n                reject(new _helper_APIError__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('error', http_status__WEBPACK_IMPORTED_MODULE_1___default.a.INTERNAL_SERVER_ERROR, true, 500));\n              } else {\n                if (Result[0].c >= 1) {\n                  var sentiment = Result[0].s / Result[0].c * 100;\n                  sentiment = parseInt(sentiment);\n                  NewsResult[0].sentiment = {\n                    positive: sentiment,\n                    negative: 100 - sentiment\n                  };\n                } else {\n                  NewsResult[0].sentiment = '資料過少，無法分析';\n                }\n\n                let sql3 = 'SELECT keyword FROM keywords WHERE News_id = ? LIMIT 1, 4';\n                connection.query(sql3, NewsResult[0].News_id, (error, KeywordResult) => {\n                  if (error) {\n                    console.error('SQL Error', error);\n                    reject(new _helper_APIError__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('error', http_status__WEBPACK_IMPORTED_MODULE_1___default.a.INTERNAL_SERVER_ERROR, true, 500));\n                  } else if (Result.length >= 1) {\n                    NewsResult[0].keywords = KeywordResult;\n                    let resultData = {\n                      status: true,\n                      data: NewsResult\n                    };\n                    resolve(resultData);\n                  } else {\n                    NewsResult[0].keywords = '';\n                    let resultData = {\n                      status: true,\n                      data: NewsResult\n                    };\n                    resolve(resultData);\n                  }\n                });\n              }\n            });\n          } else {\n            let resultData = {\n              status: true,\n              data: 'news_id錯誤，查無結果'\n            };\n            resolve(resultData);\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  findNewsDetail\n});\n\n//# sourceURL=webpack:///./src/server/modules/newsDetail.module.js?");

/***/ }),

/***/ "./src/server/modules/popular.module.js":
/*!**********************************************!*\
  !*** ./src/server/modules/popular.module.js ***!
  \**********************************************/
/*! exports provided: findPopularNewsInfo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findPopularNewsInfo\", function() { return findPopularNewsInfo; });\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ \"./src/config/config.js\");\n/* harmony import */ var _helper_APIError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/APIError */ \"./src/server/helper/APIError.js\");\n\n\n\n\nconst connectionPool = mysql__WEBPACK_IMPORTED_MODULE_0___default.a.createPool({\n  connectionLimit: 10,\n  host: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlHost,\n  user: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlUserName,\n  password: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlPass,\n  database: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlDatabase\n});\nconst findPopularNewsInfo = () => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        // 取前十筆熱門的新聞\n        let sql = 'SELECT News_id, Provenance, Date, Classification, Title, Summary, Reliability, Popularity FROM processed_data NATURAL JOIN original ORDER by Popularity DESC LIMIT 0, 10';\n        connection.query(sql, (error, Result) => {\n          if (error) {\n            console.error('SQL Error', error);\n            reject(new _helper_APIError__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('error', http_status__WEBPACK_IMPORTED_MODULE_1___default.a.INTERNAL_SERVER_ERROR, true, 500));\n          } else if (Result.length >= 1) {\n            let resultData = {\n              status: true,\n              data: Result\n            };\n            resolve(resultData);\n          } else {\n            let resultData = {\n              status: true,\n              data: \"資料尚在更新中\"\n            };\n            resolve(resultData);\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  findPopularNewsInfo\n});\n\n//# sourceURL=webpack:///./src/server/modules/popular.module.js?");

/***/ }),

/***/ "./src/server/modules/process.module.js":
/*!**********************************************!*\
  !*** ./src/server/modules/process.module.js ***!
  \**********************************************/
/*! exports provided: findAllNews, postSummary, postReliability, postPopularity, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findAllNews\", function() { return findAllNews; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postSummary\", function() { return postSummary; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postReliability\", function() { return postReliability; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postPopularity\", function() { return postPopularity; });\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ \"./src/config/config.js\");\n/* harmony import */ var _helper_APIError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/APIError */ \"./src/server/helper/APIError.js\");\n\n\n\n\nconst connectionPool = mysql__WEBPACK_IMPORTED_MODULE_0___default.a.createPool({\n  connectionLimit: 10,\n  host: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlHost,\n  user: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlUserName,\n  password: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlPass,\n  database: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlDatabase\n});\nconst findAllNews = day => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        let sql = 'SELECT  O.News_id, O.Provenance, O.Content FROM processed_data P, original O \\\r\n                            WHERE ((O.News_id = P.News_id) and O.News_id NOT IN (SELECT News_id FROM `keywords`)) or\\\r\n                            (P.News_id = O.News_id and (P.Summary is null or P.Reliability is null))';\n        connectionPool.query(sql, day, (error, Result) => {\n          if (error) {\n            console.error('SQL Error', error);\n            reject(new _helper_APIError__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('error', http_status__WEBPACK_IMPORTED_MODULE_1___default.a.INTERNAL_SERVER_ERROR, true, 500));\n          } else if (Result.length >= 1) {\n            let resultData = {\n              status: true,\n              data: Result\n            };\n            resolve(resultData);\n          } else {\n            reject(new _helper_APIError__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('result not found', http_status__WEBPACK_IMPORTED_MODULE_1___default.a.NOT_FOUND, true, 400));\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\nconst postSummary = Summary => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        let sql = 'UPDATE processed_data SET summary = ? WHERE News_id = ?';\n        connection.query(sql, [Summary.summary, Summary.newsID], (error, result) => {\n          if (error) {\n            console.error('SQL Error: ', error);\n            reject(new _helper_APIError__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('error', http_status__WEBPACK_IMPORTED_MODULE_1___default.a.INTERNAL_SERVER_ERROR, true, 500));\n          } else if (result.affectedRows === 1) {\n            resolve({\n              code: 200,\n              message: 'summary更新成功！'\n            }); // 成功回傳寫入\n          } else {\n            reject(new _helper_APIError__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('result not found', http_status__WEBPACK_IMPORTED_MODULE_1___default.a.NOT_FOUND, true, 400));\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\nconst postReliability = Reliability => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        let sql = 'UPDATE processed_data SET Reliability = ? WHERE News_id = ?';\n        connection.query(sql, [Reliability.reliability, Reliability.newsID], (error, result) => {\n          if (error) {\n            console.error('SQL Error: ', error);\n            reject(new _helper_APIError__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('error', http_status__WEBPACK_IMPORTED_MODULE_1___default.a.INTERNAL_SERVER_ERROR, true, 500));\n          } else if (result.affectedRows === 1) {\n            resolve({\n              code: 200,\n              message: 'Reliability更新成功！'\n            }); // 成功回傳寫入\n          } else {\n            reject(new _helper_APIError__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('result not found', http_status__WEBPACK_IMPORTED_MODULE_1___default.a.NOT_FOUND, true, 400));\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\nconst postPopularity = Popularity => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        let sql = 'UPDATE processed_data SET Popularity = ? WHERE News_id = ?';\n        connection.query(sql, [Popularity.popularity, Popularity.newsID], (error, result) => {\n          if (error) {\n            console.error('SQL Error: ', error);\n            reject(new _helper_APIError__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('error', http_status__WEBPACK_IMPORTED_MODULE_1___default.a.INTERNAL_SERVER_ERROR, true, 500));\n          } else if (result.affectedRows === 1) {\n            resolve({\n              code: 200,\n              message: 'Popularity更新成功！'\n            }); // 成功回傳寫入\n          } else {\n            reject(new _helper_APIError__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('result not found', http_status__WEBPACK_IMPORTED_MODULE_1___default.a.NOT_FOUND, true, 400));\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  findAllNews,\n  postSummary,\n  postReliability,\n  postPopularity\n});\n\n//# sourceURL=webpack:///./src/server/modules/process.module.js?");

/***/ }),

/***/ "./src/server/modules/search.module.js":
/*!*********************************************!*\
  !*** ./src/server/modules/search.module.js ***!
  \*********************************************/
/*! exports provided: findNewsByClass, findNewsByKeyword, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findNewsByClass\", function() { return findNewsByClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findNewsByKeyword\", function() { return findNewsByKeyword; });\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ \"./src/config/config.js\");\n/* harmony import */ var _helper_APIError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/APIError */ \"./src/server/helper/APIError.js\");\n\n\n\n\nconst connectionPool = mysql__WEBPACK_IMPORTED_MODULE_0___default.a.createPool({\n  connectionLimit: 10,\n  host: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlHost,\n  user: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlUserName,\n  password: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlPass,\n  database: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlDatabase\n});\nconst findNewsByClass = classification => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        let sql = 'SELECT News_id, Provenance, Date, Classification, Title, Summary, Reliability, Popularity FROM processed_data NATURAL JOIN original WHERE Classification = ? ORDER by Popularity DESC';\n        connectionPool.query(sql, classification, (error, Result) => {\n          if (error) {\n            console.error('SQL Error', error);\n            reject(new _helper_APIError__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('error', http_status__WEBPACK_IMPORTED_MODULE_1___default.a.INTERNAL_SERVER_ERROR, true, 500));\n          } else if (Result.length >= 1) {\n            let resultData = {\n              status: true,\n              data: Result\n            };\n            resolve(resultData);\n          } else {\n            let resultData = {\n              status: true,\n              data: '查無結果'\n            };\n            resolve(resultData);\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\nconst findNewsByKeyword = keyword => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        keyword = '%' + keyword + '%';\n        let sql = 'SELECT News_id, Provenance, Date, Classification, Title, Summary, Reliability, Popularity FROM processed_data NATURAL JOIN original WHERE title like ? ORDER by Popularity DESC';\n        connection.query(sql, keyword, (error, Result) => {\n          if (error) {\n            console.error('SQL Error', error);\n            reject(new _helper_APIError__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('error', http_status__WEBPACK_IMPORTED_MODULE_1___default.a.INTERNAL_SERVER_ERROR, true, 500));\n          } else if (Result.length >= 1) {\n            let resultData = {\n              status: true,\n              data: Result\n            };\n            resolve(resultData);\n          } else {\n            let resultData = {\n              status: true,\n              data: '查無結果'\n            };\n            resolve(resultData);\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  findNewsByClass,\n  findNewsByKeyword\n});\n\n//# sourceURL=webpack:///./src/server/modules/search.module.js?");

/***/ }),

/***/ "./src/server/modules/test.module.js":
/*!*******************************************!*\
  !*** ./src/server/modules/test.module.js ***!
  \*******************************************/
/*! exports provided: find, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return find; });\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ \"./src/config/config.js\");\n/* harmony import */ var _helper_APIError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/APIError */ \"./src/server/helper/APIError.js\");\n\n\n\n\nconst connectionPool = mysql__WEBPACK_IMPORTED_MODULE_0___default.a.createPool({\n  connectionLimit: 10,\n  host: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlHost,\n  user: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlUserName,\n  password: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlPass,\n  database: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlDatabase\n});\nconst find = () => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        // 查詢留言數量超過一筆的新聞\n        let sql = 'SELECT News_id FROM `original` WHERE News_id in (SELECT News_id FROM comments GROUP By News_id HAVING (COUNT(*) > 1))';\n        connection.query(sql, (error, Result) => {\n          if (error) {\n            console.error('SQL Error', error);\n            reject(new _helper_APIError__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('error', http_status__WEBPACK_IMPORTED_MODULE_1___default.a.INTERNAL_SERVER_ERROR, true, 500));\n          } else if (Result.length >= 1) {\n            let resultData = {\n              status: true,\n              data: Result\n            };\n            resolve(resultData);\n          } else {\n            let resultData = {\n              status: true,\n              data: \"資料尚在更新中\"\n            };\n            resolve(resultData);\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  find\n});\n\n//# sourceURL=webpack:///./src/server/modules/test.module.js?");

/***/ }),

/***/ "./src/server/routes/comment.route.js":
/*!********************************************!*\
  !*** ./src/server/routes/comment.route.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_comment_controlloer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/comment.controlloer */ \"./src/server/controllers/comment.controlloer.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.get('/', (req, res) => {\n  res.send(`此路徑是: localhost:3000/api/comment`);\n});\nrouter.route('/getComment/:newsid').get(_controllers_comment_controlloer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getComment);\nrouter.route('/postComment').post(_controllers_comment_controlloer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].postComment);\nrouter.route('/likeComment').post(_controllers_comment_controlloer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].likeComment);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/comment.route.js?");

/***/ }),

/***/ "./src/server/routes/index.route.js":
/*!******************************************!*\
  !*** ./src/server/routes/index.route.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ \"./src/config/config.js\");\n/* harmony import */ var _popular_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popular.route */ \"./src/server/routes/popular.route.js\");\n/* harmony import */ var _news_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news.route */ \"./src/server/routes/news.route.js\");\n/* harmony import */ var _search_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search.route */ \"./src/server/routes/search.route.js\");\n/* harmony import */ var _process_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./process.route */ \"./src/server/routes/process.route.js\");\n/* harmony import */ var _comment_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comment.route */ \"./src/server/routes/comment.route.js\");\n/* harmony import */ var _test_route__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./test.route */ \"./src/server/routes/test.route.js\");\n/* harmony import */ var _keyword_route__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./keyword.route */ \"./src/server/routes/keyword.route.js\");\n/* eslint-disable max-len */\n\n\n // Router\n\n\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n/* get localhost:[port]/api page. */\n\nrouter.get('/', (req, res) => {\n  res.send(`此路徑是: localhost:${_config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].port}/api`);\n});\n/* mysql連線測試 */\n\nrouter.get('/sqlTest', (req, res) => {\n  const connectionPool = mysql__WEBPACK_IMPORTED_MODULE_1___default.a.createPool({\n    // 建立一個連線池\n    connectionLimit: 10,\n    // 限制池子連線人數\n    host: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlHost,\n    // 主機名稱\n    port: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlPort,\n    user: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlUserName,\n    // 用戶名稱\n    password: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlPass,\n    // 資料庫密碼\n    database: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlDatabase // 資料庫名稱\n\n  });\n  connectionPool.getConnection((err, connection) => {\n    // 建立一個連線若錯誤回傳err\n    if (err) {\n      console.log(_config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlPass);\n      res.send(err);\n      console.log('連線失敗！');\n    } else {\n      res.send('連線成功！');\n      console.log(connection);\n    }\n  });\n});\nrouter.use('/popular', _popular_route__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nrouter.use('/search', _search_route__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nrouter.use('/news', _news_route__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nrouter.use('/process', _process_route__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nrouter.use('/comment', _comment_route__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\nrouter.use('/test', _test_route__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\nrouter.use('/keyword', _keyword_route__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/index.route.js?");

/***/ }),

/***/ "./src/server/routes/keyword.route.js":
/*!********************************************!*\
  !*** ./src/server/routes/keyword.route.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_keyword_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/keyword.controller */ \"./src/server/controllers/keyword.controller.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.get('/', (req, res) => {\n  res.send(`此路徑是: localhost:3000/api/keyword`);\n});\nrouter.route('/postkeyword').post(_controllers_keyword_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].postKeyword);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/keyword.route.js?");

/***/ }),

/***/ "./src/server/routes/news.route.js":
/*!*****************************************!*\
  !*** ./src/server/routes/news.route.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_newsDetail_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/newsDetail.controller */ \"./src/server/controllers/newsDetail.controller.js\");\n/* eslint-disable max-len */\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.get('/', (req, res) => {\n  res.send(`此路徑是: localhost:3000/api/news`);\n});\nrouter.route('/getNewsDetail/:newsId').get(_controllers_newsDetail_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getNewsDetail); //個別新聞\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/news.route.js?");

/***/ }),

/***/ "./src/server/routes/popular.route.js":
/*!********************************************!*\
  !*** ./src/server/routes/popular.route.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_popular_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/popular.controller */ \"./src/server/controllers/popular.controller.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route('/getPopularNews').get(_controllers_popular_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getPopularNewsInfo);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/popular.route.js?");

/***/ }),

/***/ "./src/server/routes/process.route.js":
/*!********************************************!*\
  !*** ./src/server/routes/process.route.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_process_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/process.controller */ \"./src/server/controllers/process.controller.js\");\n/* eslint-disable max-len */\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.get('/', (req, res) => {\n  res.send(`此路徑是: localhost:3000/api/process`);\n});\nrouter.route('/getNews/:day').get(_controllers_process_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getAllNews);\nrouter.route('/postSummary').post(_controllers_process_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].postSummary);\nrouter.route('/postReliability').post(_controllers_process_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].postReliability);\nrouter.route('/postPopularity').post(_controllers_process_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].postPopularity);\n/* 可以新增其他查詢方式 */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/process.route.js?");

/***/ }),

/***/ "./src/server/routes/search.route.js":
/*!*******************************************!*\
  !*** ./src/server/routes/search.route.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_search_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/search.controller */ \"./src/server/controllers/search.controller.js\");\n/* eslint-disable max-len */\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.get('/', (req, res) => {\n  res.send(`此路徑是: localhost:3000/api/search`);\n});\nrouter.route('/searchByClass/:class').get(_controllers_search_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getNewsByClass);\nrouter.route('/searchByKeyword/:keyword').get(_controllers_search_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getNewsByKeyword);\n/* 可以新增其他查詢方式 */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/search.route.js?");

/***/ }),

/***/ "./src/server/routes/test.route.js":
/*!*****************************************!*\
  !*** ./src/server/routes/test.route.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_test_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/test.controller */ \"./src/server/controllers/test.controller.js\");\n/* eslint-disable max-len */\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.get('/', (req, res) => {\n  res.send(`此路徑是: localhost:3000/api/test`);\n});\nrouter.route('/get').get(_controllers_test_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/test.route.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-validation":
/*!*************************************!*\
  !*** external "express-validation" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validation\");\n\n//# sourceURL=webpack:///external_%22express-validation%22?");

/***/ }),

/***/ "http-status":
/*!******************************!*\
  !*** external "http-status" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-status\");\n\n//# sourceURL=webpack:///external_%22http-status%22?");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"joi\");\n\n//# sourceURL=webpack:///external_%22joi%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql\");\n\n//# sourceURL=webpack:///external_%22mysql%22?");

/***/ })

/******/ });