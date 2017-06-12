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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
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

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(1);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', pageCount = $data.pageCount, hideJump = $data.hideJump, $escape = $imports.$escape, pageIndex = $data.pageIndex, count = $data.count, half = $data.half, left = $data.left, right = $data.right, start = $data.start, end = $data.end, i = $data.i;
    $$out += '<ul class="pager pager-round">\r\n    ';
    if (pageCount > 0) {
        $$out += '\r\n        ';
        if (!hideJump) {
            $$out += '\r\n            <li class="pager-home ';
            $$out += $escape(1 == pageIndex ? 'disabled' : '');
            $$out += '"><span>首页</span></li>\r\n        ';
        }
        $$out += '\r\n        <li class="previous ';
        $$out += $escape(1 == pageIndex ? 'disabled' : '');
        $$out += '">\r\n            <span>\xAB</span>\r\n        </li>\r\n        <li class="';
        $$out += $escape(1 == pageIndex ? 'active' : '');
        $$out += '"><span data-index="1">1</span></li>\r\n        ';
        if (pageCount > count) {
            $$out += '\r\n            ';
            var half = count % 2 === 0 ? count / 2 : (count - 1) / 2;
            $$out += '\r\n            ';
            if (pageIndex > half + 1) {
                $$out += '\r\n                <li><span data-index="';
                $$out += $escape(pageIndex - 5);
                $$out += '">...</span></li>\r\n            ';
            }
            $$out += '\r\n            ';
            var left, right, start, end;
            $$out += '\r\n            ';
            if (half + 1 >= pageIndex) {
                $$out += '\r\n                ';
                start = 2;
                $$out += '\r\n                ';
                end = count + start - 4;
                $$out += '\r\n            ';
            } else if (half + pageIndex >= pageCount) {
                $$out += '\r\n                ';
                end = pageCount - 1;
                $$out += '\r\n                ';
                start = end - count + 4;
                $$out += '\r\n            ';
            } else {
                $$out += '\r\n                ';
                start = pageIndex - half + 2;
                $$out += '\r\n                ';
                end = pageIndex + half - 2;
                $$out += '\r\n            ';
            }
            $$out += '\r\n            ';
            for (var i = start; end >= i; i++) {
                $$out += '\r\n                <li class="';
                $$out += $escape(i == pageIndex ? 'active' : '');
                $$out += '"><span data-index="';
                $$out += $escape(i);
                $$out += '">';
                $$out += $escape(i);
                $$out += '</span></li>\r\n            ';
            }
            $$out += '\r\n            ';
            if (pageCount > pageIndex + half + 1) {
                $$out += '\r\n                <li><span data-index="';
                $$out += $escape(start + 10);
                $$out += '">...</span></li>\r\n            ';
            }
            $$out += '\r\n        ';
        } else {
            $$out += '\r\n            ';
            for (var i = 2; pageCount > i; i++) {
                $$out += '\r\n            <li class="';
                $$out += $escape(i == pageIndex ? 'active' : '');
                $$out += '"><span data-index="';
                $$out += $escape(i);
                $$out += '">';
                $$out += $escape(i);
                $$out += '</span></li>\r\n            ';
            }
            $$out += '\r\n        ';
        }
        $$out += '\r\n        <li class="';
        $$out += $escape(pageCount == pageIndex ? 'active' : '');
        $$out += '"><span data-index="';
        $$out += $escape(pageCount);
        $$out += '">';
        $$out += $escape(pageCount);
        $$out += '</span></li>\r\n        <li class="next ';
        $$out += $escape(pageCount == pageIndex ? 'disabled' : '');
        $$out += '">\r\n            <span>\xBB</span>\r\n        </li>\r\n        ';
        if (!hideJump) {
            $$out += '\r\n            <li class="pager-last ';
            $$out += $escape(pageCount == pageIndex ? 'disabled' : '');
            $$out += '"><span>尾页</span></li>\r\n        ';
        }
        $$out += '\r\n    ';
    }
    $$out += '\r\n</ul>';
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
var ESCAPE_REG = /["&'<>]/;

/**
 * 编码模板输出的内容
 * @param  {any}        content
 * @return {string}
 */
runtime.$escape = function (content) {
    return xmlEscape(toString(content));
};

/**
 * 迭代器，支持数组与对象
 * @param {array|Object} data 
 * @param {function}     callback 
 */
runtime.$each = function (data, callback) {
    if (Array.isArray(data)) {
        for (var i = 0, len = data.length; i < len; i++) {
            callback(data[i], i);
        }
    } else {
        for (var _i in data) {
            callback(data[_i], _i);
        }
    }
};

// 将目标转成字符
function toString(value) {
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
function xmlEscape(content) {
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

module.exports = runtime;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yanxlg on 2017/6/7 0007.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 分页器插件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 显示9个
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 添加参数控制是否显示首页 尾页
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _pager = __webpack_require__(18);

var _pager2 = _interopRequireDefault(_pager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pager = function () {
    function Pager(container, count, hideJump) {
        _classCallCheck(this, Pager);

        this.pageIndex = 1;
        this.pageCount = 0;
        this.container = container;
        this.count = count || 9;
        this.hideJump = hideJump || false;
        this.initLife();
    }

    _createClass(Pager, [{
        key: "update",
        value: function update() {
            if (this.element) {
                var newElement = $((0, _pager2.default)({
                    pageCount: this.pageCount,
                    pageIndex: this.pageIndex,
                    count: this.count,
                    hideJump: this.hideJump
                }));
                this.element.replaceWith(newElement);
                this.element = newElement;
            } else {
                this.element = $((0, _pager2.default)({
                    pageCount: this.pageCount,
                    pageIndex: this.pageIndex,
                    count: this.count,
                    hideJump: this.hideJump
                }));
                this.container.append(this.element);
            }
            return this;
        }
    }, {
        key: "setPageIndex",
        value: function setPageIndex(pageIndex) {
            this.pageIndex = pageIndex;
            return this;
        }
    }, {
        key: "setPageCount",
        value: function setPageCount(pageCount) {
            this.pageCount = pageCount;
            return this;
        }
    }, {
        key: "initLife",
        value: function initLife() {
            //生命周期
            var _this = this;
            this.container.on("click", "span", function () {
                var li = $(this).parent();
                if (li.hasClass("disabled") || li.hasClass("active")) return -1; //屏蔽不可点击项
                var pageIndex = void 0;
                if (li.hasClass("prev")) {
                    //当前前一个
                    pageIndex = parseInt($(this).parent().siblings(".active").children("span").attr("data-index")) - 1;
                } else if (li.hasClass("next")) {
                    pageIndex = parseInt($(this).parent().siblings(".active").children("span").attr("data-index")) + 1;
                } else if (li.hasClass("pager-home")) {
                    pageIndex = 1;
                } else if (li.hasClass("pager-last")) {
                    pageIndex = _this.pageCount;
                } else {
                    pageIndex = parseInt($(this).attr("data-index"));
                }
                _this.pageIndex = pageIndex;
                _this.update();
                _this.callback && _this.callback.call(_this, pageIndex);
            });
        }
    }, {
        key: "then",
        value: function then(callback) {
            this.callback = callback;
            return this;
        }
    }]);

    return Pager;
}();

exports.default = Pager;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = false;

// Only Node.JS has a process variable that is of [[Class]] process
try {
 module.exports = Object.prototype.toString.call(global.process) === '[object process]' 
} catch(e) {}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

/******/ });