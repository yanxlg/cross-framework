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
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
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

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by yanxlg on 2017/5/27 0027.
 * drag 拖动
 */

var DRAG_DEFAULT = {
    container: 'body',
    move: true
};
var idIncrementer = 0;

var Drag = function () {
    function Drag(element, options) {
        _classCallCheck(this, Drag);

        this.options = {
            container: options.container || DRAG_DEFAULT.container,
            move: options.move || DRAG_DEFAULT.move
        };
        this.id = idIncrementer++;
        this.$ = $(element);
        this.init();
    }

    _createClass(Drag, [{
        key: 'init',
        value: function init() {
            var _this = this;

            var that = this,
                $root = that.$,
                BEFORE = 'before',
                DRAG = 'drag',
                FINISH = 'finish',
                eventSuffix = '.' + that.id,
                mouseDownEvent = 'mousedown' + eventSuffix,
                mouseUpEvent = 'mouseup' + eventSuffix,
                mouseMoveEvent = 'mousemove' + eventSuffix,
                setting = that.options,
                selector = setting.selector,
                handle = setting.handle,
                $ele = $root,
                startPos = void 0,
                cPos = void 0,
                startOffset = void 0,
                mousePos = void 0,
                moved = void 0;

            var mouseMove = function mouseMove(event) {
                var mX = event.pageX,
                    mY = event.pageY;
                moved = true;
                var dragPos = {
                    left: mX - startOffset.x,
                    top: mY - startOffset.y,
                    position: "absolute",
                    "margin-top": 0
                };
                $ele.removeClass('drag-ready').addClass('dragging');
                if (setting.move) {
                    $ele.css(dragPos);
                }
                setting[DRAG] && setting[DRAG]({
                    event: event,
                    element: $ele,
                    startOffset: startOffset,
                    pos: dragPos,
                    offset: {
                        x: mX - startPos.x,
                        y: mY - startPos.y
                    },
                    smallOffset: {
                        x: mX - mousePos.x,
                        y: mY - mousePos.y
                    }
                });
                mousePos.x = mX;
                mousePos.y = mY;
                if (setting.stopPropagation) {
                    event.stopPropagation();
                }
            };

            var mouseUp = function mouseUp(event) {
                $(document).off(eventSuffix);
                if (!moved) {
                    $ele.removeClass('drag-ready');
                    return;
                }
                var endPos = {
                    left: event.pageX - startOffset.x,
                    top: event.pageY - startOffset.y
                };
                $ele.removeClass('drag-ready dragging');
                if (setting.move) {
                    $ele.css(endPos);
                }
                setting[FINISH] && setting[FINISH]({
                    event: event,
                    element: $ele,
                    startOffset: startOffset,
                    pos: endPos,
                    offset: {
                        x: event.pageX - startPos.x,
                        y: event.pageY - startPos.y
                    },
                    smallOffset: {
                        x: event.pageX - mousePos.x,
                        y: event.pageY - mousePos.y
                    }
                });
                event.preventDefault();
                if (setting.stopPropagation) {
                    event.stopPropagation();
                }
            };

            var mouseDown = function mouseDown(event) {
                var $mouseDownEle = $(_this);
                if (selector) {
                    $ele = handle ? $mouseDownEle.closest(selector) : $mouseDownEle;
                }
                if (setting[BEFORE]) {
                    var isSure = setting[BEFORE]({
                        event: event,
                        element: $ele
                    });
                    if (isSure === false) return;
                }

                var $container = $(setting.container),
                    pos = $ele.offset();
                cPos = $container.offset();
                startPos = {
                    x: event.pageX,
                    y: event.pageY
                };
                startOffset = {
                    x: event.pageX - pos.left + cPos.left,
                    y: event.pageY - pos.top + cPos.top
                };
                mousePos = $.extend({}, startPos);
                moved = false;

                $ele.addClass('drag-ready');
                event.preventDefault();

                if (setting.stopPropagation) {
                    event.stopPropagation();
                }

                $(document).on(mouseMoveEvent, mouseMove).on(mouseUpEvent, mouseUp);
            };

            if (handle) {
                $root.on(mouseDownEvent, handle, mouseDown);
            } else if (selector) {
                $root.on(mouseDownEvent, selector, mouseDown);
            } else {
                $root.on(mouseDownEvent, mouseDown);
            }
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            var eventSuffix = '.' + this.id;
            this.$.off(eventSuffix);
            $(document).off(eventSuffix);
        }
    }]);

    return Drag;
}();

exports.default = Drag;

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

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(1);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $escape = $imports.$escape, id = $data.id, size = $data.size, width = $data.width, height = $data.height, showHeader = $data.showHeader, moveable = $data.moveable, icon = $data.icon, title = $data.title, content = $data.content, showFooter = $data.showFooter, footerBtn = $data.footerBtn, $each = $imports.$each, btn = $data.btn, i = $data.i, backdrop = $data.backdrop;
    $$out += '<div class="modal fade" data-dialog-id="';
    $$out += $escape(id);
    $$out += '">\r\n    <div class="dialog ';
    $$out += $escape(size);
    $$out += '" style="width:';
    $$out += $escape(width ? width + 'px' : 'auto');
    $$out += ';height:';
    $$out += $escape(height ? height + 'px' : 'auto');
    $$out += ';">\r\n        ';
    if (showHeader) {
        $$out += '\r\n            <div class="dialog-header ';
        $$out += $escape(moveable ? 'dialog-moveable' : '');
        $$out += '">\r\n                ';
        if (icon) {
            $$out += '\r\n                    <div class="dialog-icon ';
            $$out += $escape(icon);
            $$out += '"></div>\r\n                ';
        }
        $$out += '\r\n                <div class="dialog-title">\r\n                    ';
        $$out += $escape(title);
        $$out += '\r\n                </div>\r\n                <div class="dialog-close icon-close"></div>\r\n            </div>\r\n        ';
    }
    $$out += '\r\n        <div class="dialog-content">\r\n            ';
    $$out += content;
    $$out += '\r\n        </div>\r\n        ';
    if (showFooter) {
        $$out += '\r\n            <div class="dialog-footer">\r\n                ';
        if (!footerBtn) {
            $$out += '\r\n                    <button data-operation="cancel" class="btn">取消</button>\r\n                    <button data-operation="ok" class="btn btn-primary">确定</button>\r\n                ';
        } else {
            $$out += '\r\n                    ';
            $each(footerBtn, function (btn, i) {
                $$out += '\r\n                        <button data-operation="cusBtn';
                $$out += $escape(i);
                $$out += '" class="btn ';
                $$out += $escape(btn.themeCss);
                $$out += '">';
                $$out += $escape(btn.text);
                $$out += '</button>\r\n                    ';
            });
            $$out += '\r\n                ';
        }
        $$out += '\r\n            </div>\r\n        ';
    }
    $$out += '\r\n    </div>\r\n</div>\r\n';
    if (backdrop) {
        $$out += '\r\n    <div class="modal-backdrop fade" data-for="dialog_id_';
        $$out += $escape(id);
        $$out += '"></div>\r\n';
    }
    return $$out;
};

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yanxlg on 2017/5/18 0018.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * fit 位置   高度调整为最佳高度，不是居中，可以控制为居中
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  dialog 叠加显示   需要控制z-index
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * params
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      size  大小 默认为lg  sm  full
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      width  宽度
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      height 高度
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      title 标题
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      showHeader 通过该字段来控制是否显示标题
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      icon 对话框标题图标    主题图标
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      position 位置   fit or center                   js控制   参数设置位置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      backdrop  遮罩背景
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      modal  模态非模态
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      keyboard esc关闭对话框 默认为true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      moveable  是否可拖动  默认为false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      content 内容
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      showFooter 是否显示底部
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      footerBtn  Array[{text:"",themeCss:""}]  底部按钮
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _dialog = __webpack_require__(26);

var _dialog2 = _interopRequireDefault(_dialog);

var _cfIdGenerator = __webpack_require__(6);

var _cfIdGenerator2 = _interopRequireDefault(_cfIdGenerator);

var _cfTransition = __webpack_require__(5);

var _cfDrag = __webpack_require__(19);

var _cfDrag2 = _interopRequireDefault(_cfDrag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DIALOG_DEFAULT_OPTION = {
    size: "normal",
    width: "",
    height: "",
    title: "",
    showHeader: true,
    icon: "",
    position: "fit",
    backdrop: true,
    modal: false,
    keyboard: true,
    moveable: true,
    content: "<p>这是Dialog默认内容，需要使用其他内容来替换</p>",
    showFooter: true,
    footerBtn: null
};

var Dialog = function () {
    function Dialog(options) {
        _classCallCheck(this, Dialog);

        options = options || {};
        this.size = options.size || DIALOG_DEFAULT_OPTION.size;
        this.width = options.width || DIALOG_DEFAULT_OPTION.width;
        this.height = options.height || DIALOG_DEFAULT_OPTION.height;
        this.title = options.title || DIALOG_DEFAULT_OPTION.title;
        this.showHeader = options.showHeader || DIALOG_DEFAULT_OPTION.showHeader;
        this.icon = options.icon || DIALOG_DEFAULT_OPTION.icon;
        this.position = options.position || DIALOG_DEFAULT_OPTION.position;
        this.backdrop = options.backdrop || DIALOG_DEFAULT_OPTION.backdrop;
        this.modal = options.modal || DIALOG_DEFAULT_OPTION.modal;
        this.keyboard = options.keyboard || DIALOG_DEFAULT_OPTION.keyboard;
        this.moveable = options.moveable || DIALOG_DEFAULT_OPTION.moveable;
        this.content = options.content || DIALOG_DEFAULT_OPTION.content;
        this.showFooter = options.content || DIALOG_DEFAULT_OPTION.showFooter;
        this.footerBtn = options.content || DIALOG_DEFAULT_OPTION.footerBtn;
        this.id = _cfIdGenerator2.default.uuid();
        this.create().show();
    }

    _createClass(Dialog, [{
        key: 'create',
        value: function create() {
            var _this = this;
            this._element = $((0, _dialog2.default)({
                size: this.size,
                width: this.width,
                height: this.height,
                title: this.title,
                showHeader: this.showHeader,
                icon: this.icon,
                position: this.position,
                backdrop: this.backdrop,
                content: this.content,
                showFooter: this.showFooter,
                footerBtn: this.footerBtn,
                moveable: this.moveable,
                id: this.id
            }));
            if (!this.modal) {
                this._element[0].onclick = function (event) {
                    var target = event.srcElement || event.target;
                    if (target.className.search(/modal/gi) >= 0) {
                        //关闭当前dialog
                        _this.close();
                    }
                };
            }
            if (this.keyboard) {
                //键盘esc按键关闭
                $(window).on("keydown." + this.id, function (e) {
                    var code = e.keyCode || e.which;
                    if (code === 27) {
                        _this.close();
                    }
                });
            }
            this.initMove();
            this.initEvent();
            return this;
        }
    }, {
        key: 'initPos',
        value: function initPos() {
            //position设置
            var _h = $(this._element[0]).find(".dialog").outerHeight();
            var win_h = window.screen.availHeight;
            var half = Math.max(0, (win_h - _h) / 2),
                top = void 0;
            switch (this.position) {
                case "fit":
                    //中间偏上
                    top = half * 2 / 3;
                    break;
                case "center":
                    top = half;
                    break;
                case "top":
                    top = 4;
                    break;
                case "bottom":
                    top = win_h - _h - 4;
                    break;
                case parseInt(this.position):
                    //数字
                    top = parseInt(this.position);
                    break;
                default:
                    top = half * 2 / 3;
                    break;
            }
            $(this._element[0]).find(".dialog").css({
                "margin-top": top + "px"
            });
        }
    }, {
        key: 'initMove',
        value: function initMove() {
            if (this.moveable) {
                this.dragInstance = new _cfDrag2.default($(this._element[0]).find(".dialog")[0], {
                    container: $(this._element[0]),
                    handle: '.dialog-header',
                    before: function before() {
                        $(this._element[0]).find(".dialog").css('position', 'absolute');
                    },
                    finish: function finish(e) {}
                });
            }
        }
    }, {
        key: 'initEvent',
        value: function initEvent() {
            var _this = this;
            $(this._element[0]).on("click", "[data-operation]", function () {
                var operation = $(this).attr("data-operation");
                if (operation === "cancel") _this.close();
                _this.callback && _this.callback('operation_' + operation);
            });
        }
    }, {
        key: 'show',
        value: function show() {
            var _this = this;
            $("body").append(this._element);
            this.initPos();
            (0, _cfTransition.transition)(function () {
                _this._element.addClass("in");
            });
            return this;
        }
    }, {
        key: 'close',
        value: function close() {
            var _this = this;
            (0, _cfTransition.transition)(function () {
                _this.callback && _this.callback("closeStart");
                _this._element.removeClass("in").on(_cfTransition.transitionEnd, function () {
                    _this._element.remove();
                    $(window).off("keydown." + _this.id);
                    if (_this.dragInstance) {
                        _this.dragInstance.destroy();
                    }
                    _this.callback && _this.callback("closeEnd");
                });
            });
        }
    }, {
        key: 'then',
        value: function then(callback) {
            this.callback = callback;
        }
    }]);

    return Dialog;
}();

var dialog = function dialog(options) {
    return new Dialog(options);
};

dialog({
    width: "200",
    title: "测试",
    modal: false
}).then(function (type) {
    alert(type);
});

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

/***/ }),

/***/ 6:
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

/***/ })

/******/ });