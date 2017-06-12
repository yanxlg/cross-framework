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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yanxlg on 2017/6/5 0005.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 顶部菜单
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _navTop = __webpack_require__(12);

var _navTop2 = _interopRequireDefault(_navTop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TopMenu = function () {
    function TopMenu(menus) {
        _classCallCheck(this, TopMenu);

        this.menus = menus;
        this.create();
        this.initLife();
    }

    _createClass(TopMenu, [{
        key: "getType",
        value: function getType() {
            return "TopMenu";
        }
    }, {
        key: "create",
        value: function create() {
            this.menusRender = $((0, _navTop2.default)({
                menus: this.menus
            }));
            $("body").addClass("width-nav-top").append(this.menusRender);
            this.updateBg();
        }
    }, {
        key: "initLife",
        value: function initLife() {
            var $this = this;
            this.menusRender.on("mouseover", ".nav-right > li", function () {
                $(this).children(".nav-menu").addClass("hover");
            });
            this.menusRender.on("mouseout", ".nav-right > li", function () {
                $(this).children(".nav-menu").removeClass("hover");
            });
            this.menusRender.on("click", ".nav-menu", function () {
                //如果有子菜单项则不执行
                if ($(this).next().length > 0) {
                    return;
                }
                $this.menusRender.find(".active").removeClass("active");
                $(this).addClass("active").parents().prev(".nav-menu").addClass("active");
                var data = $(this).attr("data-data");
                $this.callback && $this.callback.call($this, data);
            });
            //滚动监听，当滚动到一定程度的时候背景设置为透明
            $(window).on("scroll", function () {
                //500像素透明
                $this.updateBg();
            });
        }
    }, {
        key: "updateBg",
        value: function updateBg() {
            if (!this.bg) {
                var bgColor = this.menusRender.css("background-color");
                //正则解析出三段int值
                this.bg = bgColor.match(/\d+/g);
            }
            var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
            var opacity = 1 - Math.round(scrolltop / 100) / 10; //背景调整
            this.menusRender.css({
                "background-color": "rgba(" + this.bg[0] + "," + this.bg[1] + "," + this.bg[2] + "," + opacity + ")"
            });
        }
    }, {
        key: "then",
        value: function then(callback) {
            this.callback = callback;
        }
    }]);

    return TopMenu;
}();

exports.default = TopMenu;

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(1);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $each = $imports.$each, menus = $data.menus, menu = $data.menu, $index = $data.$index, $escape = $imports.$escape, childMenu = $data.childMenu, subMenu = $data.subMenu, lastMenu = $data.lastMenu, item = $data.item;
    $$out += '<div class="nav nav-top">\r\n    <ul class="nav-right">\r\n        ';
    $each(menus, function (menu, $index) {
        $$out += '\r\n            <li>\r\n                <div class="nav-menu" data-data="';
        $$out += $escape(menu.data);
        $$out += '">';
        $$out += $escape(menu.name);
        $$out += '</div>\r\n                ';
        if (menu.childMenus && menu.childMenus.length > 0) {
            $$out += '\r\n                    <ul>\r\n                        ';
            $each(menu.childMenus, function (childMenu, $index) {
                $$out += '\r\n                            ';
                $each(childMenu.menus, function (subMenu, $index) {
                    $$out += '\r\n                                <li>\r\n                                    <div class="nav-menu" data-data="';
                    $$out += $escape(subMenu.data);
                    $$out += '">';
                    $$out += $escape(subMenu.name);
                    $$out += '</div>\r\n                                    ';
                    if (subMenu.childMenus && subMenu.childMenus.length > 0) {
                        $$out += '\r\n                                        <ul>\r\n                                            ';
                        $each(subMenu.childMenus, function (lastMenu, $index) {
                            $$out += '\r\n                                                ';
                            $each(lastMenu.menus, function (item, $index) {
                                $$out += '\r\n                                                    <li>\r\n                                                        <div class="nav-menu" data-data="';
                                $$out += $escape(item.data);
                                $$out += '">';
                                $$out += $escape(item.name);
                                $$out += '</div>\r\n                                                    </li>\r\n                                                ';
                            });
                            $$out += '\r\n                                            ';
                        });
                        $$out += '\r\n                                        </ul>\r\n                                    ';
                    }
                    $$out += '\r\n                                </li>\r\n                            ';
                });
                $$out += '\r\n                        ';
            });
            $$out += '\r\n                    </ul>\r\n                ';
        }
        $$out += '\r\n            </li>\r\n        ';
    });
    $$out += '\r\n    </ul>\r\n</div>';
    return $$out;
};

/***/ })
/******/ ]);