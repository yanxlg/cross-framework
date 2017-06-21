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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ 7:
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