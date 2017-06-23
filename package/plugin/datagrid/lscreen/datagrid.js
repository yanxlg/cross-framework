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

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(1);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $each = $imports.$each, titles = $data.titles, title = $data.title, $index = $data.$index, $escape = $imports.$escape, height = $data.height;
    $$out += '<div class="data-grid-group">\r\n    <div class="data-grid-wrap grid-header">\r\n        <div class="data-grid">\r\n            <div class="data-row">\r\n                ';
    $each(titles, function (title, $index) {
        $$out += '\r\n                    <div class="data-col" style="width: ';
        $$out += $escape(title.width);
        $$out += 'px;">\r\n                    </div>\r\n                ';
    });
    $$out += '\r\n            </div>\r\n            <div class="data-row">\r\n                ';
    $each(titles, function (title, $index) {
        $$out += '\r\n                    <div class="data-grid-title">\r\n                        ';
        $$out += $escape(title.title);
        $$out += '\r\n                    </div>\r\n                ';
    });
    $$out += '\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="data-grid-wrap grid-data" style="height: ';
    $$out += $escape(height);
    $$out += ';">\r\n        <div class="data-grid">\r\n            <div class="data-row">\r\n                ';
    $each(titles, function (title, $index) {
        $$out += '\r\n                    <div class="data-col" style="width: ';
        $$out += $escape(title.width);
        $$out += 'px;">\r\n                    </div>\r\n                ';
    });
    $$out += '\r\n            </div>\r\n            <div class="data-row-group">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>';
    return $$out;
};

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(1);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $each = $imports.$each, data = $data.data, row = $data.row, $index = $data.$index, titles = $data.titles, title = $data.title, index = $data.index, $escape = $imports.$escape;
    $each(data, function (row, $index) {
        $$out += '\r\n    <div class="data-row">\r\n        ';
        $each(titles, function (title, index) {
            $$out += '\r\n            <div class="data-column grid-center">\r\n                <div class="data-key">';
            $$out += $escape(title.title);
            $$out += '</div>\r\n                <div class="data-data">';
            $$out += $escape(row[title.bindData]);
            $$out += '</div>\r\n                ';
            if (index === 0) {
                $$out += '\r\n                    <div class="grid-actions hide"></div>\r\n                ';
            }
            $$out += '\r\n            </div>\r\n        ';
        });
        $$out += '\r\n    </div>\r\n';
    });
    return $$out;
};

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yanxianliang on 2017/6/11.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 数据列表控件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Web端使用表格显示  移动端列表显示，列表不会显示全部字段 仅显示3或4个字段，其余字段隐藏 显示规则  过滤字段
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * data-row 控制行
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * data-index 控制列
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * flex 表示固定的列
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 表头固定，内容高度自己控制
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 总会有自适应宽度的列  当存在fix时，fix区域就是自适应列，否则
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * titles:[{title:"",width:100,fixed:false,bindData:""}]  宽度默认值为100   如果没有fixed区域,进度条宽度需要保留  bindData:绑定的字段名
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * actions 列表操作项
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _datagrid = __webpack_require__(21);

var _datagrid2 = _interopRequireDefault(_datagrid);

var _rows = __webpack_require__(22);

var _rows2 = _interopRequireDefault(_rows);

var _gridActions = __webpack_require__(9);

var _gridActions2 = _interopRequireDefault(_gridActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataGrid = function () {
    function DataGrid(container, titles, height) {
        _classCallCheck(this, DataGrid);

        //通过titles来构造表格
        titles.forEach(function (title, i) {
            titles[i].width = title.width || 100;
        });
        this.titles = titles;
        this.container = container;
        if (height) {
            this.height = height + "px";
        } else {
            this.height = "auto";
        }
        this.create();
        return this;
    }

    _createClass(DataGrid, [{
        key: 'create',
        value: function create() {
            var gridRender = $((0, _datagrid2.default)({
                titles: this.titles,
                height: this.height
            }));
            if (this.gridRender) {
                this.gridRender.replaceWith(gridRender);
            } else {
                this.container.append(gridRender);
            }
            this.gridRender = gridRender;
            this.scrollSync();
            this.initActions();
            return this;
        }
    }, {
        key: 'update',
        value: function update(data) {
            var rows = (0, _rows2.default)({
                titles: this.titles,
                data: data
            });
            this.gridRender.find(".data-row-group").html(rows);
            return this;
        }
    }, {
        key: 'append',
        value: function append(data) {
            var rows = (0, _rows2.default)({
                titles: this.titles,
                data: data
            });
            this.gridRender.find(".data-row-group").append(rows);
            return this;
        }
    }, {
        key: 'scrollSync',
        value: function scrollSync() {
            var header = this.gridRender.find(".grid-header");
            var content = this.gridRender.find(".grid-data");
            content.on("scroll", function () {
                header[0].scrollLeft = content[0].scrollLeft;
            });
        }
    }, {
        key: 'initActions',
        value: function initActions() {
            this.listActions = new _gridActions2.default(this.gridRender);
        }
    }]);

    return DataGrid;
}();

exports.default = DataGrid;

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

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by yanxlg on 2017/6/16 0016.
 * 列表操作项
 */
var ListActions = function () {
    function ListActions(grid) {
        _classCallCheck(this, ListActions);

        this.grid = grid;
        var _this = this;
        _this.update();
        $(window).on("resize", function () {
            _this.update();
        });
    }

    _createClass(ListActions, [{
        key: "bindWithGrid",
        value: function bindWithGrid() {
            var grid = this.grid;
            //绑定到grid中
            grid.on("mouseover", ".data-row", function () {
                //获取grid的宽度
                var areWidth = grid.width() + grid.find(".grid-data")[0].scrollLeft;
                var action = $(this).find(".grid-actions");
                var actionWidth = action.outerWidth();
                action.css({
                    left: areWidth + "px"
                });
                action.removeClass("hide").addClass("show").css({
                    marginLeft: -actionWidth + "px"
                });
            });
            grid.on("mouseout", ".data-row", function () {
                var action = $(this).find(".grid-actions");
                action.removeClass("show").addClass("hide").css({
                    marginLeft: "0px"
                });
            });
            return this;
        }
    }, {
        key: "bindWithMobild",
        value: function bindWithMobild() {
            var grid = this.grid;
            var startPoint = void 0,
                movePoint = void 0;
            grid.on("touchstart", ".data-row", function (e) {
                var touch = e.targetTouches[0];
                startPoint = movePoint = {
                    x: touch.screenX,
                    y: touch.screenY
                };
                if (!$(this).hasClass("touchEl")) {
                    grid.find(".touchEl").removeClass("touchEl").attr("data-delX", 0).css({
                        marginLeft: "0px"
                    }).find(".grid-actions").css({
                        marginLeft: "0px"
                    });
                    $(this).find(".grid-actions").css({
                        marginLeft: "0px"
                    });
                    $(this).addClass("touchEl").attr("data-delX", 0);
                } else {
                    $(this).addClass("touchEl");
                }
            });
            grid.on("touchmove", ".data-row", function (e) {
                if (!startPoint) return;
                var touch = e.targetTouches[0];
                var action = $(this).find(".grid-actions"),
                    actWidth = parseInt(action.outerWidth());
                if ($(this).hasClass("touchEl")) {
                    var mPoint = {
                        x: touch.screenX,
                        y: touch.screenY
                    };
                    var curr = parseInt($(this).attr("data-delX")) || 0;
                    var delX = mPoint.x - movePoint.x + curr;
                    delX = Math.max(-actWidth, delX);
                    delX = Math.min(delX, 0);
                    $(this).attr("data-delX", delX);
                    movePoint = mPoint;
                    action.css({
                        marginLeft: delX + "px"
                    });
                    $(this).css({
                        marginLeft: delX + "px"
                    });
                } else {}
            });
            grid.on("touchend touchcancel", ".data-row", function (e) {
                startPoint = null;
                var action = $(this).find(".grid-actions"),
                    actWidth = parseInt(action.outerWidth());
                var curr = parseInt($(this).attr("data-delX")) || 0;
                if (Math.abs(curr) < actWidth / 2) {
                    action.css({
                        marginLeft: "0px"
                    });
                    $(this).css({
                        marginLeft: "0px"
                    });
                } else {
                    action.css({
                        marginLeft: -actWidth + "px"
                    });
                    $(this).css({
                        marginLeft: -actWidth + "px"
                    });
                }
            });
        }
    }, {
        key: "update",
        value: function update() {
            var width = document.body.offsetWidth;
            if (parseInt(width) < 1000) {
                //移动端
                this.grid.off("mouseover");
                this.grid.off("mouseout");
                this.bindWithMobild();
            } else {
                //web端
                this.grid.off("touchstart");
                this.grid.off("touchmove");
                this.grid.off("touchend");
                this.grid.off("touchcancel");
                this.bindWithGrid();
            }
        }
    }]);

    return ListActions;
}();

exports.default = ListActions;

/***/ })

/******/ });