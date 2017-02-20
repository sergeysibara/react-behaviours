webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _appmodule = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_reactDom2.default.render(_react2.default.createElement(_appmodule.TunableInput, null), document.getElementById('example'));

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _maskBehaviour = __webpack_require__(4);
	
	Object.defineProperty(exports, 'MaskBehaviour', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_maskBehaviour).default;
	  }
	});
	
	var _maxLengthBehaviour = __webpack_require__(7);
	
	Object.defineProperty(exports, 'MaxLengthBehaviour', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_maxLengthBehaviour).default;
	  }
	});
	
	var _maskInput = __webpack_require__(8);
	
	Object.defineProperty(exports, 'MaskInput', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_maskInput).default;
	  }
	});
	
	var _tunableInput = __webpack_require__(9);
	
	Object.defineProperty(exports, 'TunableInput', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_tunableInput).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBehaviours = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MaskBehaviour = function (_Behaviour) {
	    _inherits(MaskBehaviour, _Behaviour);
	
	    function MaskBehaviour(props, owner) {
	        _classCallCheck(this, MaskBehaviour);
	
	        var _this = _possibleConstructorReturn(this, (MaskBehaviour.__proto__ || Object.getPrototypeOf(MaskBehaviour)).call(this, props, owner));
	
	        _this.updateProps(props);
	        return _this;
	    }
	
	    _createClass(MaskBehaviour, [{
	        key: 'updateProps',
	        value: function updateProps(props) {
	            _get(MaskBehaviour.prototype.__proto__ || Object.getPrototypeOf(MaskBehaviour.prototype), 'updateProps', this).call(this, props);
	            if (props === undefined) return;
	            this._regex = new RegExp(props.pattern);
	            this._prevValue = null;
	        }
	    }, {
	        key: 'onKeyDown',
	        value: function onKeyDown(event) {
	            this._prevValue = event.target.value;
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(event) {
	            var result = this._regex.test(event.target.value);
	            if (!result) {
	                event.target.value = this._prevValue;
	            }
	        }
	    }]);
	
	    return MaskBehaviour;
	}(_reactBehaviours.Behaviour);
	
	exports.default = MaskBehaviour;

/***/ },
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBehaviours = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MaxLengthBehaviour = function (_Behaviour) {
	    _inherits(MaxLengthBehaviour, _Behaviour);
	
	    function MaxLengthBehaviour(props, owner) {
	        _classCallCheck(this, MaxLengthBehaviour);
	
	        var _this = _possibleConstructorReturn(this, (MaxLengthBehaviour.__proto__ || Object.getPrototypeOf(MaxLengthBehaviour)).call(this, props, owner));
	
	        _this.updateProps(props);
	        return _this;
	    }
	
	    _createClass(MaxLengthBehaviour, [{
	        key: 'updateProps',
	        value: function updateProps(props) {
	            _get(MaxLengthBehaviour.prototype.__proto__ || Object.getPrototypeOf(MaxLengthBehaviour.prototype), 'updateProps', this).call(this, props);
	            if (props === undefined) return;
	            this._maxLength = props.maxLength;
	            this._prevValue = null;
	        }
	    }, {
	        key: 'onKeyDown',
	        value: function onKeyDown(event) {
	            this._prevValue = event.target.value;
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(event) {
	            if (event.target.value.length > this._maxLength) {
	                event.target.value = this._prevValue;
	            }
	        }
	    }]);
	
	    return MaxLengthBehaviour;
	}(_reactBehaviours.Behaviour);
	
	exports.default = MaxLengthBehaviour;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBehaviours = __webpack_require__(5);
	
	var _appModule = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MaskInput = function (_BehavioursContainer) {
	    _inherits(MaskInput, _BehavioursContainer);
	
	    function MaskInput(props) {
	        _classCallCheck(this, MaskInput);
	
	        var _this = _possibleConstructorReturn(this, (MaskInput.__proto__ || Object.getPrototypeOf(MaskInput)).call(this, props));
	
	        _this.initBehaviours([new _appModule.MaskBehaviour(props.MaskBehaviour, _this), new _appModule.MaxLengthBehaviour(props.MaxLengthBehaviour, _this)]);
	
	        _this.state = {
	            inputValue: ''
	        };
	        return _this;
	    }
	
	    _createClass(MaskInput, [{
	        key: 'changeHandler',
	        value: function changeHandler(event) {
	            _get(MaskInput.prototype.__proto__ || Object.getPrototypeOf(MaskInput.prototype), 'changeHandler', this).call(this, event);
	            this.setState({ inputValue: event.target.value });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement('input', { type: 'text', ref: 'targetInput', value: this.state.inputValue,
	                onChange: this.changeHandler,
	                onKeyDown: this.keyDownHandler
	            });
	        }
	    }]);
	
	    return MaskInput;
	}(_reactBehaviours.BehavioursContainer);
	
	exports.default = MaskInput;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBehaviours = __webpack_require__(5);
	
	var _appmodule = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TunableInput = function (_BehavioursContainer) {
	    _inherits(TunableInput, _BehavioursContainer);
	
	    function TunableInput(props) {
	        _classCallCheck(this, TunableInput);
	
	        var _this = _possibleConstructorReturn(this, (TunableInput.__proto__ || Object.getPrototypeOf(TunableInput)).call(this, props));
	
	        _this.state = {
	            maxLengthBehaviourEnabled: true,
	            maskBehaviourEnabled: true
	        };
	
	        _this.bindMethods(['onMaxLengthStateChangeHandler', 'onMaskStateChangeHandler']);
	        return _this;
	    }
	
	    _createClass(TunableInput, [{
	        key: 'onMaxLengthStateChangeHandler',
	        value: function onMaxLengthStateChangeHandler(event) {
	            this.setState({ maxLengthBehaviourEnabled: event.target.checked });
	        }
	    }, {
	        key: 'onMaskStateChangeHandler',
	        value: function onMaskStateChangeHandler(event) {
	            this.setState({ maskBehaviourEnabled: event.target.checked });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var maskInputHtml = _react2.default.createElement(_appmodule.MaskInput, {
	                MaxLengthBehaviour: { enabled: this.state.maxLengthBehaviourEnabled, maxLength: 5 },
	                MaskBehaviour: { enabled: this.state.maskBehaviourEnabled, pattern: '^[0-9]*$' }
	            });
	
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement('input', { type: 'checkbox', onChange: this.onMaskStateChangeHandler, defaultChecked: true }),
	                ' Enable/Disable Digits MaskBehaviour',
	                _react2.default.createElement('br', null),
	                _react2.default.createElement('input', { type: 'checkbox', onChange: this.onMaxLengthStateChangeHandler, defaultChecked: true }),
	                ' Enable/Disable MaxLengthBehaviour',
	                _react2.default.createElement('br', null),
	                maskInputHtml
	            );
	        }
	    }]);
	
	    return TunableInput;
	}(_reactBehaviours.BehavioursContainer);
	
	exports.default = TunableInput;

/***/ }
]);
//# sourceMappingURL=index.js.map