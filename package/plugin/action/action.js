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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/*! art-template@runtime | https://github.com/aui/art-template */

var detectNode = __webpack_require__(3);
var runtime = Object.create(detectNode ? global : window);

// 将目标转成字符
var toString = function toString(value) {
    if (typeof value !== 'string') {
        if (value === undefined || value === null) {
            value = '';
        } else if (typeof value === 'function') {
            value = toString(value.call(value));
        } else {
            value = JSON.stringify(value);
        }
    }

    return value;
};

// 编码 HTML 内容
var ESCAPE_REG = /["&'<>]/;
var xmlEscape = function xmlEscape(content) {
    var html = '' + content;
    var regexResult = ESCAPE_REG.exec(html);
    if (!regexResult) {
        return content;
    }

    var result = '';
    var i = void 0,
        lastIndex = void 0,
        char = void 0;
    for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {

        switch (html.charCodeAt(i)) {
            case 34:
                char = '&#34;';
                break;
            case 38:
                char = '&#38;';
                break;
            case 39:
                char = '&#39;';
                break;
            case 60:
                char = '&#60;';
                break;
            case 62:
                char = '&#62;';
                break;
            default:
                continue;
        }

        if (lastIndex !== i) {
            result += html.substring(lastIndex, i);
        }

        lastIndex = i + 1;
        result += char;
    }

    if (lastIndex !== i) {
        return result + html.substring(lastIndex, i);
    } else {
        return result;
    }
};

/**
 * 编码模板输出的内容
 * @param  {any}        content
 * @return {string}
 */
var escape = function escape(content) {
    return xmlEscape(toString(content));
};

/**
 * 迭代器，支持数组与对象
 * @param {array|Object} data 
 * @param {function}     callback 
 */
var each = function each(data, callback) {
    if (Array.isArray(data)) {
        for (var i = 0, len = data.length; i < len; i++) {
            callback(data[i], i, data);
        }
    } else {
        for (var _i in data) {
            callback(data[_i], _i);
        }
    }
};

runtime.$each = each;
runtime.$escape = escape;

module.exports = runtime;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = false;

// Only Node.JS has a process variable that is of [[Class]] process
try {
 module.exports = Object.prototype.toString.call(global.process) === '[object process]' 
} catch(e) {}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by yanxlg on 2017/5/26 0026.
 * 立即执行动画
 */
var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {
    setTimeout(function () {
        callback.call(undefined);
    }, 6000 / 100);
};
var transition = function transition(callback) {
    setTimeout(function () {
        requestAnimationFrame(callback);
    }, 0);
};

var transitionEnd = function () {
    var transEndEventNames = {
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'transitionend',
        OTransition: 'oTransitionEnd otransitionend',
        transition: 'transitionend'
    };
    for (var name in transEndEventNames) {
        if (typeof document.body.style[name] === "string") {
            return transEndEventNames[name];
        }
    }
}();

exports.requestAnimationFrame = requestAnimationFrame;
exports.transition = transition;
exports.transitionEnd = transitionEnd;

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by yanxlg on 2017/5/26 0026.
 * id 生成序列
 */
var lastUuidAmend = 0;

var IDGenerator = function () {
    function IDGenerator() {
        _classCallCheck(this, IDGenerator);
    }

    _createClass(IDGenerator, null, [{
        key: "uuid",
        value: function uuid() {
            return new Date().getTime() * 1000 + lastUuidAmend++ % 1000;
        }
    }]);

    return IDGenerator;
}();

exports.default = IDGenerator;

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(1);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', size = $data.size, $escape = $imports.$escape, id = $data.id, content = $data.content, height = $data.height, backdrop = $data.backdrop;
    if (size) {
        $$out += '\r\n    <div class="action fade ';
        $$out += $escape(size);
        $$out += '" data-action-id="';
        $$out += $escape(id);
        $$out += '">\r\n        ';
        $$out += content;
        $$out += '\r\n    </div>\r\n';
    } else {
        $$out += '\r\n<div class="action fade" style="';
        $$out += $escape('height:' + height + 'px;');
        $$out += '" data-action-id="';
        $$out += $escape(id);
        $$out += '">\r\n    ';
        $$out += content;
        $$out += '\r\n</div>\r\n';
    }
    $$out += '\r\n';
    if (backdrop) {
        $$out += '\r\n<div class="modal-backdrop fade" data-for="action_id_';
        $$out += $escape(id);
        $$out += '"></div>\r\n';
    }
    return $$out;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(1);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $each = $imports.$each, actionList = $data.actionList, action = $data.action, i = $data.i, $escape = $imports.$escape;
    $$out += '<div class="action-btn-group">\r\n    <div class="action-btn-list">\r\n        ';
    $each(actionList, function (action, i) {
        $$out += '\r\n            <div class="action-btn" data-action-index="';
        $$out += $escape(i);
        $$out += '">\r\n                ';
        $$out += $escape(action);
        $$out += '\r\n            </div>\r\n        ';
    });
    $$out += '\r\n    </div>\r\n    <div class="action-btn action-cancel">\r\n        取消\r\n    </div>\r\n</div>';
    return $$out;
};

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yanxlg on 2017/5/31 0031.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 底部弹出界面
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 高度自动计算   height==='fit'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 非模态
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 关闭会销毁，dom需要自己保存
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * actionList:["","",""]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _action = __webpack_require__(16);

var _action2 = _interopRequireDefault(_action);

var _action_btn = __webpack_require__(17);

var _action_btn2 = _interopRequireDefault(_action_btn);

var _cfIdGenerator = __webpack_require__(7);

var _cfIdGenerator2 = _interopRequireDefault(_cfIdGenerator);

var _cfTransition = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Action = function () {
    function Action(option) {
        _classCallCheck(this, Action);

        this.content = option.content;
        this.actionList = option.actionList; //actionList与content只有一个生效 actionList存在就屏蔽content
        this.id = _cfIdGenerator2.default.uuid();
        this.backdrop = option.backdrop || true;
        this.height = option.height; //支持数字
        if (isNaN(this.height)) {
            this.size = this.height || "normal";
            this.height = null;
        }
        this.create();
        this.initLife();
    }

    _createClass(Action, [{
        key: 'create',
        value: function create() {
            if (this.actionList && this.actionList.length > 0) {
                this.content = (0, _action_btn2.default)({
                    actionList: this.actionList
                });
            }
            this.el = $((0, _action2.default)({
                content: this.content,
                id: this.id,
                backdrop: this.backdrop,
                height: this.height,
                size: this.size
            }));
            $("body").append(this.el);
            if (this.size === "fit") {
                //自动计算高度并进行设置，控制最大高度为normal的高度
                var actionEl = $(this.el).eq(0);
                if (window.screen.availHeight < 767) {
                    actionEl.css({
                        "max-height": window.screen.availHeight * 0.8 + "px"
                    });
                } else {
                    actionEl.css({
                        "max-height": "600px"
                    });
                }
            }
        }
    }, {
        key: 'initLife',
        value: function initLife() {
            var _this2 = this;

            var _this = this;
            this.el.on("click", function (event) {
                var target = event.srcElement || event.target;
                if ($(target).hasClass("modal-backdrop") || $(target).hasClass("action-cancel")) {
                    _this.close();
                }
                if ($(target).hasClass("action-btn")) {
                    var index = $(target).attr("data-action-index");
                    if (index) {
                        _this2.callback && _this2.callback.call(_this2, 'action-btn' + index);
                        _this2.close();
                    }
                }
            });
        }
    }, {
        key: 'show',
        value: function show() {
            var _this = this;
            this.callback && this.callback.call(this, "show");
            (0, _cfTransition.transition)(function () {
                _this.el.addClass("in");
            });
        }
    }, {
        key: 'close',
        value: function close() {
            var _this = this;
            this.callback && this.callback.call(this, "close");
            (0, _cfTransition.transition)(function () {
                _this.el.removeClass("in").on(_cfTransition.transitionEnd, function () {
                    _this.el.remove();
                });
            });
        }
    }, {
        key: 'then',
        value: function then(callback) {
            this.callback = callback;
            return this;
        }
    }]);

    return Action;
}();

var action = function action(options) {
    return new Action(options);
};

exports.default = action;

/***/ })
/******/ ]);