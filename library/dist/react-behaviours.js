(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("react-behaviours", ["react"], factory);
	else if(typeof exports === 'object')
		exports["react-behaviours"] = factory(require("react"));
	else
		root["react-behaviours"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _behaviour = __webpack_require__(1);
	
	Object.defineProperty(exports, 'Behaviour', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_behaviour).default;
	  }
	});
	
	var _behavioursContainer = __webpack_require__(2);
	
	Object.defineProperty(exports, 'BehavioursContainer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_behavioursContainer).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Базовый класс для поведений, добавляемых к реакт компонентам
	 */
	var Behaviour = function () {
	    /**
	     * @param {{enabled: boolean, ...}} props
	     * @param {React.Component} owner
	     */
	    function Behaviour(owner, props) {
	        _classCallCheck(this, Behaviour);
	
	        this.owner = owner;
	        this.name = Object.getPrototypeOf(this).constructor.name;
	        this.enabled = true;
	    }
	
	    //вызывается в конструкторе и в componentWillReceiveProps.
	
	
	    _createClass(Behaviour, [{
	        key: "updateProps",
	        value: function updateProps(props) {
	            this.enabled = !(props instanceof Object) || props.enabled === undefined ? true : props.enabled;
	        }
	    }]);
	
	    return Behaviour;
	}();
	
	exports.default = Behaviour;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Базовый класс для всех реакт компонентов, использующих behaviours.
	 * Содержит логику вызова функций в behaviours. Если BehaviourX.enabled=true, то его методы будут вызваны.
	 */
	var BehavioursContainer = function (_React$Component) {
	    _inherits(BehavioursContainer, _React$Component);
	
	    function BehavioursContainer(props) {
	        _classCallCheck(this, BehavioursContainer);
	
	        var _this = _possibleConstructorReturn(this, (BehavioursContainer.__proto__ || Object.getPrototypeOf(BehavioursContainer)).call(this, props));
	
	        _this.behaviours = [];
	
	        _this.bindMethods = function (methods) {
	            methods.forEach(function (method) {
	                return _this[method] = _this[method].bind(_this);
	            });
	        };
	
	        //для обработчиков событий нужно делать так, иначе this будет undefined
	        _this.bindMethods(['changeHandler', 'keyDownHandler']);
	        return _this;
	    }
	
	    _createClass(BehavioursContainer, [{
	        key: 'initBehaviours',
	        value: function initBehaviours(behaviours) {
	            var _this2 = this;
	
	            this.behaviours = behaviours;
	
	            behaviours.forEach(function (behaviour) {
	                var name = firstToLowerCase(behaviour.name);
	                _this2[name] = behaviour;
	            });
	        }
	
	        /**
	         * Вызывает метод с указанным именем во всех Behaviours c enabled=true.
	         */
	
	    }, {
	        key: 'callMethodInAllBehaviours',
	        value: function callMethodInAllBehaviours(funcName, args) {
	            var behaviours = this.behaviours;
	            for (var i = 0; i < behaviours.length; i++) {
	                if (behaviours[i].enabled == true && behaviours[i][funcName] !== undefined) {
	                    behaviours[i][funcName](args[0], args[1], args[2], args[3]);
	                }
	            }
	        }
	    }, {
	        key: '_getBehaviour',
	        value: function _getBehaviour(behaviourName) {
	            for (var i = 0; i < this.behaviours.length; i++) {
	                var behaviour = this.behaviours[i];
	                if (behaviour.name == behaviourName) return behaviour;
	            }
	            return null;
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            for (var propKey in nextProps) {
	                var behaviour = this._getBehaviour(propKey);
	                if (behaviour != null) {
	                    behaviour.updateProps(nextProps[propKey]);
	                }
	            }
	        }
	
	        //Ниже перечень функций, вызываемый в поведениях
	        //shouldComponentUpdate отсутсвует, т.к. в нем нет необходимости
	
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.callMethodInAllBehaviours('componentWillMount', arguments);
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.callMethodInAllBehaviours('componentDidMount', arguments);
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {
	            this.callMethodInAllBehaviours('componentWillUpdate', arguments);
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {
	            this.callMethodInAllBehaviours('componentDidUpdate', arguments);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.callMethodInAllBehaviours('componentWillUnmount', arguments);
	        }
	
	        //здесь перечень обработчиков стандартных событий - https://facebook.github.io/react/docs/events.html
	        //перечень далеко не полный, поэтому при необходимости нужно дописать сюда нужные обработчики
	
	    }, {
	        key: 'changeHandler',
	        value: function changeHandler(event) {
	            this.callMethodInAllBehaviours('onChange', arguments);
	        }
	    }, {
	        key: 'keyDownHandler',
	        value: function keyDownHandler(event) {
	            this.callMethodInAllBehaviours('onKeyDown', arguments);
	        }
	    }]);
	
	    return BehavioursContainer;
	}(_react2.default.Component);
	
	exports.default = BehavioursContainer;
	
	
	function firstToLowerCase(str) {
	    return str.substr(0, 1).toLowerCase() + str.substr(1);
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-behaviours.js.map