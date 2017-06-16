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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ 24:
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

/***/ })

/******/ });