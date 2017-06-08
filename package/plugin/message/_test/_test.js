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
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(2);

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(1);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $escape = $imports.$escape, scale = $data.scale, type = $data.type, round = $data.round, customClass = $data.customClass, iconClass = $data.iconClass, message = $data.message, actions = $data.actions, $each = $imports.$each, action = $data.action, i = $data.i, showClose = $data.showClose;
    $$out += '<div class="message ';
    $$out += $escape(scale ? 'message-push-leave' : 'message-fade-leave');
    $$out += ' ';
    $$out += $escape(type);
    $$out += ' ';
    $$out += $escape(round ? 'round' : '');
    $$out += ' ';
    $$out += $escape(customClass);
    $$out += '">\r\n    ';
    if (iconClass) {
        $$out += '\r\n        <i class="icon ';
        $$out += $escape(iconClass);
        $$out += '"></i>\r\n    ';
    }
    $$out += '\r\n    <div class="message-group">\r\n        <p>';
    $$out += $escape(message);
    $$out += '</p>\r\n    </div>\r\n    ';
    if (actions.length > 0) {
        $$out += '\r\n        <div class="message-actions">\r\n            ';
        $each(actions, function (action, i) {
            $$out += '\r\n                ';
            if (action.icon) {
                $$out += '\r\n                    <div class="message-action" data-action="';
                $$out += $escape(i);
                $$out += '">\r\n                        ';
                if (action.icon) {
                    $$out += '\r\n                            <i class="';
                    $$out += $escape(action.icon);
                    $$out += '"></i>\r\n                        ';
                }
                $$out += '\r\n                        ';
                if (action.text) {
                    $$out += '\r\n                            <p>';
                    $$out += $escape(action.text);
                    $$out += '</p>\r\n                        ';
                }
                $$out += '\r\n                    </div>\r\n                ';
            }
            $$out += '\r\n            ';
        });
        $$out += '\r\n        </div>\r\n    ';
    }
    $$out += '\r\n    ';
    if (showClose) {
        $$out += '\r\n        <div class="message-close icon-close"></div>\r\n    ';
    }
    $$out += '\r\n</div>';
    return $$out;
};

/***/ }),

/***/ 2:
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

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Require Promise
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yanxlg on 2017/5/22 0022.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 消息显示
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 参数控制是否堆叠  与toast有区别
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * message	消息文字	string	—	—
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * type	主题	string	default/primary/success/warning/info/error	info
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * iconClass	自定义图标的类名 string	—	—
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * customClass	自定义类名	string	—	—
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * duration	显示时间, 毫秒。设为 0 则不会自动关闭	number	—	3000
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * showClose	是否显示关闭按钮	boolean	—	false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * onClose	关闭时的回调函数, 参数为被关闭的 message 实例	function	—	—
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * round 是否全圆角
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * actions 操作组 [{text:"刷新",icon:"icon-refresh"}]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * beta 2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * ******* scale模式   zui效果   缩放动画 scale 与opacity同时
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Promise 不能多次回调，不能用于插件生命周期
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _cfTransition = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var messageInstances = new Set();
var message_render = __webpack_require__(17);

var Message = function () {
    function Message(options) {
        _classCallCheck(this, Message);

        this.message = options.message || "";
        this.type = options.type || "info";
        this.iconClass = options.iconClass || "icon-info";
        this.customClass = options.customClass || "";
        this.duration = options.duration || 3000;
        this.showClose = options.showClose || false;
        this.round = options.round || false;
        //actions
        this.actions = options.actions || [];
        this.scale = options.scale || false;
        this.create();
        var _this = this;
        (0, _cfTransition.transition)(function () {
            _this.show();
        });
        messageInstances.add(this);
    }

    _createClass(Message, [{
        key: 'create',
        value: function create() {
            var _this2 = this;

            var _this = this;
            this._element = $(message_render({
                message: this.message,
                type: this.type,
                iconClass: this.iconClass,
                customClass: this.customClass,
                showClose: this.showClose,
                round: this.round,
                actions: this.actions,
                scale: this.scale
            }));
            this._element.on("mouseover", function () {
                _this.stopTimer();
            }).on("mouseleave", function () {
                _this.resumeTimer();
            }).on("click", ".message-action", function () {
                var index = $(_this2).attr("data-action");
                _this.callback && _this.callback('action' + index);
                _this.close();
            });
            $("body").append(this._element);
        }
    }, {
        key: 'show',
        value: function show() {
            var _this = this;
            !_this.startTime && (_this.startTime = new Date().getTime());
            this._element.removeClass("message-fade-leave").removeClass("message-push-leave");
            //定时器
            this._timer = setTimeout(function () {
                _this.close();
            }, this.duration);
        }
    }, {
        key: 'close',
        value: function close() {
            //关闭事件会触发
            var _this = this;
            this._element.addClass('' + (this.scale ? 'message-push-leave' : 'message-fade-leave')).on(_cfTransition.transitionEnd, function () {
                _this._element.remove();
            });
            //触发关闭事件
            this.callback && this.callback("close");
        }
    }, {
        key: 'stopTimer',
        value: function stopTimer() {
            //停止定时器
            if (this._timer) {
                this.endTime = new Date().getTime();
                clearTimeout(this._timer);
            }
        }
    }, {
        key: 'resumeTimer',
        value: function resumeTimer() {
            var _this = this;
            this._timer = setTimeout(function () {
                _this.close();
            }, this.duration - (this.endTime - this.startTime));
        }
    }, {
        key: 'then',
        value: function then(callback) {
            this.callback = callback;
        }
    }], [{
        key: 'closeAll',
        value: function closeAll() {
            messageInstances.forEach(function (instance) {
                instance.close();
                messageInstances.delete(instance);
            });
        }
    }, {
        key: 'success',
        value: function success(options) {
            return new Message(options);
        }
    }]);

    return Message;
}();

var message = function message(options) {
    return new Message(options);
};
exports.default = message;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = false;

// Only Node.JS has a process variable that is of [[Class]] process
try {
 module.exports = Object.prototype.toString.call(global.process) === '[object process]' 
} catch(e) {}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _message = __webpack_require__(21);

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _message2.default)({
    message: "测试",
    type: "success",
    iconClass: "icon-success",
    duration: 3000,
    showClose: true,
    round: true,
    scale: true,
    actions: [{
        text: "测试",
        icon: "icon-close"
    }]
});

/***/ }),

/***/ 5:
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

/***/ })

/******/ });