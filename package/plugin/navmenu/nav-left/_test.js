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
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
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

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yanxlg on 2017/6/2 0002.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 导航菜单
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 默认根据屏幕大小切换显示方式，大屏显示在左侧 中屏显示在顶部 小屏顶部折叠 右侧显示（支持左侧侧滑）
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * options 支持参数
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * force:""  强制以某种方式显示
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 菜单循环嵌套,一个菜单项是一个object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * menus:[{pMenu:{},menuList:[{groupName:"",menus:[]},{},{}]},{}}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 分组信息 group menus:{groupName:"",menus:[]}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 一组菜单：[]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 支持三层结构
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  name:"",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  data:obj
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  childMenus:[{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      groupName:"",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      menus:[{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *           name:"",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *           data:obj,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *           childMenus:[]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      }]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  }]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 打开的时候收起其他的
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _navLeft = __webpack_require__(12);

var _navLeft2 = _interopRequireDefault(_navLeft);

var _slide = __webpack_require__(4);

var _slide2 = _interopRequireDefault(_slide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LeftMenu = function () {
    function LeftMenu(menus) {
        _classCallCheck(this, LeftMenu);

        this.menus = menus;
        this.create();
        this.initLife();
    }

    _createClass(LeftMenu, [{
        key: 'getType',
        value: function getType() {
            return "LeftMenu";
        }
    }, {
        key: 'create',
        value: function create() {
            this.menusRender = $((0, _navLeft2.default)({
                menus: this.menus
            }));
            $("body").addClass("width-nav-left").append(this.menusRender);
        }
    }, {
        key: 'initLife',
        value: function initLife() {
            var _this = this;
            this.menusRender.on("click", ".nav-menu", function () {
                var $this = $(this);
                if ($this.next().hasClass("slide")) {
                    if ($this.next().hasClass("open")) {
                        $this.removeClass("open").next().removeClass("open");
                        var addH = _slide2.default.slideUp($this.next());
                        var parentSlide = $this.parents(".slide");
                        $.each(parentSlide, function (i, slide) {
                            $(slide).addClass("open").prev().addClass("open");
                            _slide2.default.slide($(slide), -addH);
                        });
                    } else {
                        //这样会造成父级元素高度变化
                        //fix it
                        //需要关闭其他父级菜单中已经打开的
                        var others = $this.parent().siblings(); //li元素
                        $.each(others, function (i, li) {
                            var slide = $(li).children(".slide");
                            if (slide.hasClass("open")) {
                                slide.removeClass("open").prev().removeClass("open");
                                _slide2.default.slideUp(slide);
                                //关闭子的
                                var childSlide = slide.find(".slide");
                                $.each(childSlide, function (i, mSlide) {
                                    $(mSlide).removeClass("open").prev().removeClass("open");
                                    _slide2.default.slideUp($(mSlide));
                                });
                            }
                        });
                        $this.addClass("open").next().addClass("open");
                        var _addH = _slide2.default.slideDown($this.next());
                        var _parentSlide = $this.parents(".slide");
                        $.each(_parentSlide, function (i, slide) {
                            $(slide).addClass("open").prev().addClass("open");
                            _slide2.default.slide($(slide), _addH);
                        });
                    }
                } else {
                    $(".nav-active").removeClass("nav-active");
                    $(".nav-menu.active").removeClass("active");
                    $this.addClass("nav-active");
                    var data = $this.attr("data-data");
                    _this.callback && _this.callback.call(_this, data);
                }
            });
        }
    }, {
        key: 'then',
        value: function then(callback) {
            this.callback = callback;
            return this;
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.menusRender.remove();
            $("body").removeClass("width-nav-left");
        }
    }]);

    return LeftMenu;
}();

exports.default = LeftMenu;

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(1);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $each = $imports.$each, menus = $data.menus, menu = $data.menu, $index = $data.$index, $escape = $imports.$escape, childMenu = $data.childMenu, subMenu = $data.subMenu, lastMenu = $data.lastMenu, item = $data.item;
    $$out += '<ul class="nav nav-left">\r\n    ';
    $each(menus, function (menu, $index) {
        $$out += '\r\n        <li>\r\n            <div class="nav-menu" data-data="';
        $$out += $escape(menu.data);
        $$out += '">';
        $$out += $escape(menu.name);
        $$out += '</div>\r\n            ';
        if (menu.childMenus && menu.childMenus.length > 0) {
            $$out += '\r\n                <ul class="slide">\r\n                    ';
            $each(menu.childMenus, function (childMenu, $index) {
                $$out += '\r\n                        ';
                if (childMenu.groupName) {
                    $$out += '\r\n                            <div class="nav-group">';
                    $$out += $escape(childMenu.groupName);
                    $$out += '</div>\r\n                        ';
                }
                $$out += '\r\n                        ';
                $each(childMenu.menus, function (subMenu, $index) {
                    $$out += '\r\n                            <li>\r\n                                <div class="nav-menu" data-data="';
                    $$out += $escape(subMenu.data);
                    $$out += '">';
                    $$out += $escape(subMenu.name);
                    $$out += '</div>\r\n                                ';
                    if (subMenu.childMenus && subMenu.childMenus.length > 0) {
                        $$out += '\r\n                                    <ul class="slide">\r\n                                        ';
                        $each(subMenu.childMenus, function (lastMenu, $index) {
                            $$out += '\r\n                                            ';
                            if (lastMenu.groupName) {
                                $$out += '\r\n                                                <div class="nav-group">';
                                $$out += $escape(lastMenu.groupName);
                                $$out += '</div>\r\n                                            ';
                            }
                            $$out += '\r\n                                            ';
                            $each(lastMenu.menus, function (item, $index) {
                                $$out += '\r\n                                                <li>\r\n                                                    <div class="nav-menu" data-data="';
                                $$out += $escape(item.data);
                                $$out += '">';
                                $$out += $escape(item.name);
                                $$out += '</div>\r\n                                                </li>\r\n                                            ';
                            });
                            $$out += '\r\n                                        ';
                        });
                        $$out += '\r\n                                    </ul>\r\n                                ';
                    }
                    $$out += '\r\n                            </li>\r\n                        ';
                });
                $$out += '\r\n                    ';
            });
            $$out += '\r\n                </ul>\r\n            ';
        }
        $$out += '\r\n        </li>\r\n    ';
    });
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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = false;

// Only Node.JS has a process variable that is of [[Class]] process
try {
 module.exports = Object.prototype.toString.call(global.process) === '[object process]' 
} catch(e) {}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by yanxlg on 2017/6/5 0005.
 * slide插件
 * 需要动态计算展开的大小
 */
var Slide = function () {
    function Slide() {
        _classCallCheck(this, Slide);
    }

    _createClass(Slide, null, [{
        key: "slideDown",
        value: function slideDown(el) {
            var child = el.children(),
                offH = 0;
            $.each(child, function (i, ch) {
                offH += ch.offsetHeight; //可能更新 不及时，需要从css中读取
            });
            el.css({
                height: offH + "px"
            });
            return offH;
        }
    }, {
        key: "slide",
        value: function slide(el, delY) {
            //增量处理
            var offH = el[0].offsetHeight;
            el.css({
                height: offH + delY + "px"
            });
            return offH + delY;
        }
    }, {
        key: "slideUp",
        value: function slideUp(el) {
            var child = el.children(),
                offH = 0;
            $.each(child, function (i, ch) {
                offH += ch.offsetHeight; //可能更新 不及时，需要从css中读取
            });
            el.css({
                height: 0
            });
            return offH;
        }
    }]);

    return Slide;
}();

exports.default = Slide;

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _navLeft = __webpack_require__(10);

var _navLeft2 = _interopRequireDefault(_navLeft);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

setTimeout(function () {
    new _navLeft2.default([{
        name: "菜单一",
        data: "",
        childMenus: [{
            groupName: "分组一",
            menus: [{
                name: "菜单一分组一",
                data: "",
                childMenus: [{
                    groupName: "分组一1",
                    menus: [{
                        name: "1",
                        data: ""
                    }, {
                        name: "2",
                        data: ""
                    }]
                }]
            }, {
                name: "菜单2分组一",
                data: ""
            }]
        }, {
            groupName: "分组2",
            menus: [{
                name: "菜单一分组一",
                data: ""
            }, {
                name: "菜单2分组一",
                data: ""
            }]
        }]
    }, {
        name: "菜单2",
        data: "",
        childMenus: [{
            menus: [{
                name: "菜单一分组一",
                data: ""
            }, {
                name: "菜单2分组一",
                data: ""
            }]
        }, {
            menus: [{
                name: "菜单一分组一",
                data: ""
            }, {
                name: "菜单2分组一",
                data: ""
            }]
        }]
    }, {
        name: "菜单3",
        data: ""
    }]).then(function (data) {
        alert(data);
    });
}, 0); /**
        * Created by yanxlg on 2017/6/5 0005.
        */

/***/ })

/******/ });